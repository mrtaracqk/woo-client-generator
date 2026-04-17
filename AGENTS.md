# AGENTS.md — руководство для AI-агентов

Этот файл даёт контекст по репозиторию для агентов (в т.ч. Cursor) и помогает не ломать пайплайн генерации и тесты.

## Что это за проект

**woo-client-generator** — локальный тулчейн на Node/TypeScript для:

1. Сбора снапшотов WooCommerce REST API с живого инстанса (или fixture в Docker).
2. Генерации TypeScript SDK: типы, Zod-схемы, типизированные операции.

SDK рассчитан на копирование в другой проект или локальный импорт; зависимости — Node ≥22, Zod ^3.x.

## Пайплайн генерации (не перепутать порядок)

Цепочка артефактов:

1. **Snapshot** — сырой снимок REST (routes, OPTIONS, схемы).  
   Скрипт: `scripts/woo/fetch-woo-rest-schema.ts` → `generated/woo-rest/woo-vX.Y.Z.snapshot.json`.

2. **Manifest** — нормализованный список операций для codegen.  
   Скрипты: `build-woo-manifest.ts` → `.manifest.json`, затем `build-woo-sdk-manifest.ts` → `woo-vX.Y.Z.sdk-manifest.json`.

3. **SDK** — исходники клиента (client, models, operations, core).  
   Скрипт: `scripts/woo/build-woo-sdk.ts`; читает **sdk-manifest**, пишет в `generated/woo-sdk/src/`.

4. **Definitions** (опционально) — сгенерированные определения операций для регистра.  
   Скрипт: `scripts/woo/generate-operation-definitions.ts` → `src/woo-core/operation-registry/generated/generated-operation-definitions.ts`.

Команды из `package.json`:

- Полный цикл с живым Woo: `npm run generate:woo:full -- --base-url=...`
- Всё с Docker fixture: `npm run generate:woo:fixture`
- Только регенерация из уже имеющегося snapshot: `npm run generate:woo` (manifest → sdk-manifest → sdk → definitions).

## Что редактировать, а что — нет

- **Не редактировать вручную** (перезаписываются генераторами):
  - `generated/woo-sdk/**` — весь сгенерированный SDK.
  - `generated/woo-rest/*.json` — snapshot и манифесты.
  - `src/woo-core/operation-registry/generated/generated-operation-definitions.ts` — генерируется скриптом.

- **Редактировать при доработке генератора/рантайма**:
  - `scripts/woo/*.ts` — логика снапшота, манифестов, генерации SDK и definitions.
  - `src/woo-sdk-runtime/*` — рантайм (HTTP, auth, serialize, types), копируется в `generated/woo-sdk/src/core/`.
  - `src/woo-core/*` — общая логика (например, регистр операций), кроме `generated/`.

## Стек и команды

- **Язык:** TypeScript (Node ≥22).
- **Запуск скриптов:** `tsx` (не ts-node).
- **Тесты:** Vitest (`npm run test`, `npm run test:watch`).
- **Проверки:** `npm run check` (tsc), `npm run format:check` / `npm run format` (Prettier).

Перед коммитом имеет смысл: `npm run check && npm run format:check && npm run test`. После изменений в пайплайне — по необходимости `npm run generate:woo:check` и/или регенерация SDK.

## Важные пути

| Назначение              | Путь |
|-------------------------|------|
| Исходники рантайма      | `src/woo-sdk-runtime/` |
| Ядро (регистр и т.д.)   | `src/woo-core/` |
| Скрипты Woo             | `scripts/woo/` |
| Сгенерированный SDK     | `generated/woo-sdk/src/` |
| Snapshot / манифесты    | `generated/woo-rest/` |
| Конфиг окружения (пример) | `.env.example`; реальный `.env` в `.gitignore` |

## Конфигурация окружения

- `WOO_REST_SNAPSHOT_BASE_URL` или `WOO_BASE_URL` — URL WooCommerce (по умолчанию в примерах `http://127.0.0.1:8081`).
- Опционально: `WOO_REST_SNAPSHOT_NAMESPACE`, `WOO_REST_SNAPSHOT_WOO_VERSION` и др. — см. скрипты и `.env.example`.

## Полезные документы в репо

- **README.md** — как установить, как получить SDK (fixture / full), структура `generated/woo-sdk/src/`.
- **IMPLEMENTATION_PLAN.md** — план внедрения, канонические артефакты, целевой output.
- **ZOD_SCHEMAS_PLAN.md** — планы по Zod-схемам в SDK.

При изменениях в формате snapshot или sdk-manifest нужно согласовать правки в скриптах и, при необходимости, в этих планах.
