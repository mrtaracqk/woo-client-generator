#!/usr/bin/env sh
set -eu

wp_path="/var/www/html"
site_url="${WOO_FIXTURE_SITE_URL:-http://127.0.0.1:${WOO_FIXTURE_PORT:-8081}}"
site_title="${WOO_FIXTURE_SITE_TITLE:-Woo MCP Fixture}"
admin_user="${WOO_FIXTURE_ADMIN_USER:-admin}"
admin_password="${WOO_FIXTURE_ADMIN_PASSWORD:-admin_password}"
admin_email="${WOO_FIXTURE_ADMIN_EMAIL:-admin@example.test}"
woo_version="${WOO_FIXTURE_WOO_VERSION:-9.9.7}"

until [ -f "${wp_path}/wp-load.php" ]; do
  echo "Waiting for WordPress files..."
  sleep 2
done

until php -r '
  $host = getenv("WORDPRESS_DB_HOST");
  [$hostname, $port] = array_pad(explode(":", $host, 2), 2, null);
  mysqli_report(MYSQLI_REPORT_OFF);
  $db = mysqli_init();
  if (!$db) {
    exit(1);
  }
  $connected = $db->real_connect(
    $hostname,
    getenv("WORDPRESS_DB_USER"),
    getenv("WORDPRESS_DB_PASSWORD"),
    getenv("WORDPRESS_DB_NAME"),
    $port ? (int) $port : 3306,
  );
  exit($connected ? 0 : 1);
' >/dev/null 2>&1; do
  echo "Waiting for database..."
  sleep 2
done

if ! wp core is-installed --path="${wp_path}" --allow-root >/dev/null 2>&1; then
  wp core install \
    --path="${wp_path}" \
    --url="${site_url}" \
    --title="${site_title}" \
    --admin_user="${admin_user}" \
    --admin_password="${admin_password}" \
    --admin_email="${admin_email}" \
    --skip-email \
    --allow-root
fi

wp option update home "${site_url}" --path="${wp_path}" --allow-root >/dev/null
wp option update siteurl "${site_url}" --path="${wp_path}" --allow-root >/dev/null
wp option update blogname "${site_title}" --path="${wp_path}" --allow-root >/dev/null

installed_woo_version=""
if wp plugin is-installed woocommerce --path="${wp_path}" --allow-root >/dev/null 2>&1; then
  installed_woo_version="$(wp plugin get woocommerce --field=version --path="${wp_path}" --allow-root)"
fi

if [ "${installed_woo_version}" != "${woo_version}" ]; then
  wp plugin install woocommerce \
    --path="${wp_path}" \
    --version="${woo_version}" \
    --force \
    --activate \
    --allow-root
else
  wp plugin activate woocommerce --path="${wp_path}" --allow-root >/dev/null 2>&1 || true
fi

wp option update permalink_structure '/%postname%/' \
  --path="${wp_path}" \
  --allow-root >/dev/null

wp rewrite flush --hard --path="${wp_path}" --allow-root >/dev/null

echo "WooCommerce fixture is ready at ${site_url}"
