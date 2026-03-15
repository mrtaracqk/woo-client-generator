/**
 * AUTO-GENERATED FILE. DO NOT EDIT.
 * generator-version: 1
 * wordpress-version: unknown
 * woocommerce-version: 9.9.7
 * woocommerce-version-source: undefined
 */
import {
  buildGeneratedOperationDefinitions,
  type GeneratedRegistryOperationSpec,
} from './generated-operation-definitions.builders';

const GENERATED_OPERATION_SPECS = [
  {
    "toolName": "wc.v3.coupons_batch",
    "title": "Coupons Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /coupons/batch.",
    "operationKey": "COUPONS_BATCH",
    "method": "POST",
    "routeTemplate": "/coupons/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "amount": {
                "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                "type": "string"
              },
              "code": {
                "description": "Coupon code.",
                "type": "string"
              },
              "date_expires": {
                "description": "The date the coupon expires, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_expires_gmt": {
                "description": "The date the coupon expires, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "description": {
                "description": "Coupon description.",
                "type": "string"
              },
              "discount_type": {
                "description": "Determines the type of discount that will be applied.",
                "enum": [
                  "percent",
                  "fixed_cart",
                  "fixed_product"
                ],
                "type": "string"
              },
              "email_restrictions": {
                "description": "List of email addresses that can use this coupon.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "exclude_sale_items": {
                "description": "If true, this coupon will not be applied to items that have sale prices.",
                "type": "boolean"
              },
              "excluded_product_categories": {
                "description": "List of category IDs the coupon does not apply to.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "excluded_product_ids": {
                "description": "List of product IDs the coupon cannot be used on.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "free_shipping": {
                "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                "type": "boolean"
              },
              "individual_use": {
                "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                "type": "boolean"
              },
              "limit_usage_to_x_items": {
                "description": "Max number of items in the cart the coupon can be applied to.",
                "type": "integer"
              },
              "maximum_amount": {
                "description": "Maximum order amount allowed when using the coupon.",
                "type": "string"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "minimum_amount": {
                "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                "type": "string"
              },
              "product_categories": {
                "description": "List of category IDs the coupon applies to.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "product_ids": {
                "description": "List of product IDs the coupon can be used on.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "status": {
                "description": "The status of the coupon. Should always be draft, published, or pending review",
                "type": "string"
              },
              "usage_limit": {
                "description": "How many times the coupon can be used in total.",
                "type": "integer"
              },
              "usage_limit_per_user": {
                "description": "How many times the coupon can be used per customer.",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "amount": {
                "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                "type": "string"
              },
              "code": {
                "description": "Coupon code.",
                "type": "string"
              },
              "date_expires": {
                "description": "The date the coupon expires, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_expires_gmt": {
                "description": "The date the coupon expires, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "description": {
                "description": "Coupon description.",
                "type": "string"
              },
              "discount_type": {
                "description": "Determines the type of discount that will be applied.",
                "enum": [
                  "percent",
                  "fixed_cart",
                  "fixed_product"
                ],
                "type": "string"
              },
              "email_restrictions": {
                "description": "List of email addresses that can use this coupon.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "exclude_sale_items": {
                "description": "If true, this coupon will not be applied to items that have sale prices.",
                "type": "boolean"
              },
              "excluded_product_categories": {
                "description": "List of category IDs the coupon does not apply to.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "excluded_product_ids": {
                "description": "List of product IDs the coupon cannot be used on.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "free_shipping": {
                "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                "type": "boolean"
              },
              "id": {
                "type": "integer"
              },
              "individual_use": {
                "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                "type": "boolean"
              },
              "limit_usage_to_x_items": {
                "description": "Max number of items in the cart the coupon can be applied to.",
                "type": "integer"
              },
              "maximum_amount": {
                "description": "Maximum order amount allowed when using the coupon.",
                "type": "string"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "minimum_amount": {
                "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                "type": "string"
              },
              "product_categories": {
                "description": "List of category IDs the coupon applies to.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "product_ids": {
                "description": "List of product IDs the coupon can be used on.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "status": {
                "description": "The status of the coupon. Should always be draft, published, or pending review",
                "type": "string"
              },
              "usage_limit": {
                "description": "How many times the coupon can be used in total.",
                "type": "integer"
              },
              "usage_limit_per_user": {
                "description": "How many times the coupon can be used per customer.",
                "type": "integer"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_batch_put_custom",
    "title": "Coupons Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /coupons/batch.",
    "operationKey": "COUPONS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/coupons/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "amount": {
          "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
          "type": "string"
        },
        "code": {
          "description": "Coupon code.",
          "type": "string"
        },
        "date_expires": {
          "description": "The date the coupon expires, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_expires_gmt": {
          "description": "The date the coupon expires, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Coupon description.",
          "type": "string"
        },
        "discount_type": {
          "description": "Determines the type of discount that will be applied.",
          "enum": [
            "percent",
            "fixed_cart",
            "fixed_product"
          ],
          "type": "string"
        },
        "email_restrictions": {
          "description": "List of email addresses that can use this coupon.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_sale_items": {
          "description": "If true, this coupon will not be applied to items that have sale prices.",
          "type": "boolean"
        },
        "excluded_product_categories": {
          "description": "List of category IDs the coupon does not apply to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "excluded_product_ids": {
          "description": "List of product IDs the coupon cannot be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "free_shipping": {
          "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
          "type": "boolean"
        },
        "individual_use": {
          "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
          "type": "boolean"
        },
        "limit_usage_to_x_items": {
          "description": "Max number of items in the cart the coupon can be applied to.",
          "type": "integer"
        },
        "maximum_amount": {
          "description": "Maximum order amount allowed when using the coupon.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "minimum_amount": {
          "description": "Minimum order amount that needs to be in the cart before coupon applies.",
          "type": "string"
        },
        "product_categories": {
          "description": "List of category IDs the coupon applies to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "product_ids": {
          "description": "List of product IDs the coupon can be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "status": {
          "description": "The status of the coupon. Should always be draft, published, or pending review",
          "type": "string"
        },
        "usage_limit": {
          "description": "How many times the coupon can be used in total.",
          "type": "integer"
        },
        "usage_limit_per_user": {
          "description": "How many times the coupon can be used per customer.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_create",
    "title": "Coupons Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /coupons.",
    "operationKey": "COUPONS_CREATE",
    "method": "POST",
    "routeTemplate": "/coupons",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "amount": {
          "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
          "type": "string"
        },
        "code": {
          "description": "Coupon code.",
          "type": "string"
        },
        "date_expires": {
          "description": "The date the coupon expires, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_expires_gmt": {
          "description": "The date the coupon expires, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Coupon description.",
          "type": "string"
        },
        "discount_type": {
          "default": "fixed_cart",
          "description": "Determines the type of discount that will be applied.",
          "enum": [
            "percent",
            "fixed_cart",
            "fixed_product"
          ],
          "type": "string"
        },
        "email_restrictions": {
          "description": "List of email addresses that can use this coupon.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_sale_items": {
          "default": false,
          "description": "If true, this coupon will not be applied to items that have sale prices.",
          "type": "boolean"
        },
        "excluded_product_categories": {
          "description": "List of category IDs the coupon does not apply to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "excluded_product_ids": {
          "description": "List of product IDs the coupon cannot be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "free_shipping": {
          "default": false,
          "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
          "type": "boolean"
        },
        "individual_use": {
          "default": false,
          "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
          "type": "boolean"
        },
        "limit_usage_to_x_items": {
          "description": "Max number of items in the cart the coupon can be applied to.",
          "type": "integer"
        },
        "maximum_amount": {
          "description": "Maximum order amount allowed when using the coupon.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "minimum_amount": {
          "description": "Minimum order amount that needs to be in the cart before coupon applies.",
          "type": "string"
        },
        "product_categories": {
          "description": "List of category IDs the coupon applies to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "product_ids": {
          "description": "List of product IDs the coupon can be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "status": {
          "description": "The status of the coupon. Should always be draft, published, or pending review",
          "type": "string"
        },
        "usage_limit": {
          "description": "How many times the coupon can be used in total.",
          "type": "integer"
        },
        "usage_limit_per_user": {
          "description": "How many times the coupon can be used per customer.",
          "type": "integer"
        }
      },
      "required": [
        "code"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_delete",
    "title": "Coupons Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /coupons/{id}.",
    "operationKey": "COUPONS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/coupons/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_id_post_custom",
    "title": "Coupons Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /coupons/{id}.",
    "operationKey": "COUPONS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/coupons/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "amount": {
          "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
          "type": "string"
        },
        "code": {
          "description": "Coupon code.",
          "type": "string"
        },
        "date_expires": {
          "description": "The date the coupon expires, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_expires_gmt": {
          "description": "The date the coupon expires, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Coupon description.",
          "type": "string"
        },
        "discount_type": {
          "description": "Determines the type of discount that will be applied.",
          "enum": [
            "percent",
            "fixed_cart",
            "fixed_product"
          ],
          "type": "string"
        },
        "email_restrictions": {
          "description": "List of email addresses that can use this coupon.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_sale_items": {
          "description": "If true, this coupon will not be applied to items that have sale prices.",
          "type": "boolean"
        },
        "excluded_product_categories": {
          "description": "List of category IDs the coupon does not apply to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "excluded_product_ids": {
          "description": "List of product IDs the coupon cannot be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "free_shipping": {
          "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
          "type": "boolean"
        },
        "individual_use": {
          "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
          "type": "boolean"
        },
        "limit_usage_to_x_items": {
          "description": "Max number of items in the cart the coupon can be applied to.",
          "type": "integer"
        },
        "maximum_amount": {
          "description": "Maximum order amount allowed when using the coupon.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "minimum_amount": {
          "description": "Minimum order amount that needs to be in the cart before coupon applies.",
          "type": "string"
        },
        "product_categories": {
          "description": "List of category IDs the coupon applies to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "product_ids": {
          "description": "List of product IDs the coupon can be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "status": {
          "description": "The status of the coupon. Should always be draft, published, or pending review",
          "type": "string"
        },
        "usage_limit": {
          "description": "How many times the coupon can be used in total.",
          "type": "integer"
        },
        "usage_limit_per_user": {
          "description": "How many times the coupon can be used per customer.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_list",
    "title": "Coupons List",
    "description": "Generated WooCommerce wc.v3 operation for GET /coupons.",
    "operationKey": "COUPONS_LIST",
    "method": "GET",
    "routeTemplate": "/coupons",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "code": {
          "description": "Limit result set to resources with a specific code.",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_read",
    "title": "Coupons Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /coupons/{id}.",
    "operationKey": "COUPONS_READ",
    "method": "GET",
    "routeTemplate": "/coupons/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.coupons_update",
    "title": "Coupons Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /coupons/{id}.",
    "operationKey": "COUPONS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/coupons/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "amount": {
          "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
          "type": "string"
        },
        "code": {
          "description": "Coupon code.",
          "type": "string"
        },
        "date_expires": {
          "description": "The date the coupon expires, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_expires_gmt": {
          "description": "The date the coupon expires, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Coupon description.",
          "type": "string"
        },
        "discount_type": {
          "description": "Determines the type of discount that will be applied.",
          "enum": [
            "percent",
            "fixed_cart",
            "fixed_product"
          ],
          "type": "string"
        },
        "email_restrictions": {
          "description": "List of email addresses that can use this coupon.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_sale_items": {
          "description": "If true, this coupon will not be applied to items that have sale prices.",
          "type": "boolean"
        },
        "excluded_product_categories": {
          "description": "List of category IDs the coupon does not apply to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "excluded_product_ids": {
          "description": "List of product IDs the coupon cannot be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "free_shipping": {
          "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
          "type": "boolean"
        },
        "individual_use": {
          "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
          "type": "boolean"
        },
        "limit_usage_to_x_items": {
          "description": "Max number of items in the cart the coupon can be applied to.",
          "type": "integer"
        },
        "maximum_amount": {
          "description": "Maximum order amount allowed when using the coupon.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "minimum_amount": {
          "description": "Minimum order amount that needs to be in the cart before coupon applies.",
          "type": "string"
        },
        "product_categories": {
          "description": "List of category IDs the coupon applies to.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "product_ids": {
          "description": "List of product IDs the coupon can be used on.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "status": {
          "description": "The status of the coupon. Should always be draft, published, or pending review",
          "type": "string"
        },
        "usage_limit": {
          "description": "How many times the coupon can be used in total.",
          "type": "integer"
        },
        "usage_limit_per_user": {
          "description": "How many times the coupon can be used per customer.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.customers_batch",
    "title": "Customers Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /customers/batch.",
    "operationKey": "CUSTOMERS_BATCH",
    "method": "POST",
    "routeTemplate": "/customers/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "billing": {
                "description": "List of billing address data.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code of the country.",
                    "type": "string"
                  },
                  "email": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Email address.",
                    "format": "email",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "email": {
                "description": "The email address for the customer.",
                "format": "email",
                "type": "string"
              },
              "first_name": {
                "description": "Customer first name.",
                "type": "string"
              },
              "last_name": {
                "description": "Customer last name.",
                "type": "string"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "password": {
                "description": "Customer password.",
                "type": "string"
              },
              "shipping": {
                "description": "List of shipping address data.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code of the country.",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "username": {
                "description": "Customer login name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "billing": {
                "description": "List of billing address data.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code of the country.",
                    "type": "string"
                  },
                  "email": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Email address.",
                    "format": "email",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "email": {
                "description": "The email address for the customer.",
                "format": "email",
                "type": "string"
              },
              "first_name": {
                "description": "Customer first name.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "last_name": {
                "description": "Customer last name.",
                "type": "string"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "password": {
                "description": "Customer password.",
                "type": "string"
              },
              "shipping": {
                "description": "List of shipping address data.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code of the country.",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "username": {
                "description": "Customer login name.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "password"
    ]
  },
  {
    "toolName": "wc.v3.customers_batch_put_custom",
    "title": "Customers Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /customers/batch.",
    "operationKey": "CUSTOMERS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/customers/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "List of billing address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "email": {
          "description": "The email address for the customer.",
          "format": "email",
          "type": "string"
        },
        "first_name": {
          "description": "Customer first name.",
          "type": "string"
        },
        "last_name": {
          "description": "Customer last name.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "password": {
          "description": "Customer password.",
          "type": "string"
        },
        "shipping": {
          "description": "List of shipping address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "username": {
          "description": "Customer login name.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "password"
    ]
  },
  {
    "toolName": "wc.v3.customers_create",
    "title": "Customers Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /customers.",
    "operationKey": "CUSTOMERS_CREATE",
    "method": "POST",
    "routeTemplate": "/customers",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "List of billing address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "email": {
          "description": "New user email address.",
          "type": "string"
        },
        "first_name": {
          "description": "Customer first name.",
          "type": "string"
        },
        "last_name": {
          "description": "Customer last name.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "password": {
          "description": "New user password.",
          "type": "string"
        },
        "shipping": {
          "description": "List of shipping address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "username": {
          "description": "New user username.",
          "type": "string"
        }
      },
      "required": [
        "email"
      ],
      "type": "object"
    },
    "sensitiveFields": [
      "password"
    ]
  },
  {
    "toolName": "wc.v3.customers_delete",
    "title": "Customers Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /customers/{id}.",
    "operationKey": "CUSTOMERS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/customers/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        },
        "reassign": {
          "default": 0,
          "description": "ID to reassign posts to.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.customers_downloads_list",
    "title": "Customers Downloads List",
    "description": "Generated WooCommerce wc.v3 operation for GET /customers/{customer_id}/downloads.",
    "operationKey": "CUSTOMERS_DOWNLOADS_LIST",
    "method": "GET",
    "routeTemplate": "/customers/{customer_id}/downloads",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "customer_id": {
          "type": "integer"
        }
      },
      "required": [
        "customer_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.customers_id_post_custom",
    "title": "Customers Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /customers/{id}.",
    "operationKey": "CUSTOMERS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/customers/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "List of billing address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "email": {
          "description": "The email address for the customer.",
          "format": "email",
          "type": "string"
        },
        "first_name": {
          "description": "Customer first name.",
          "type": "string"
        },
        "last_name": {
          "description": "Customer last name.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "password": {
          "description": "Customer password.",
          "type": "string"
        },
        "shipping": {
          "description": "List of shipping address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "username": {
          "description": "Customer login name.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "password"
    ]
  },
  {
    "toolName": "wc.v3.customers_list",
    "title": "Customers List",
    "description": "Generated WooCommerce wc.v3 operation for GET /customers.",
    "operationKey": "CUSTOMERS_LIST",
    "method": "GET",
    "routeTemplate": "/customers",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "email": {
          "description": "Limit result set to resources with a specific email.",
          "format": "email",
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by object attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "registered_date"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "role": {
          "default": "customer",
          "description": "Limit result set to resources with a specific role.",
          "enum": [
            "all",
            "administrator",
            "editor",
            "author",
            "contributor",
            "subscriber",
            "customer",
            "shop_manager"
          ],
          "type": "string"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.customers_read",
    "title": "Customers Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /customers/{id}.",
    "operationKey": "CUSTOMERS_READ",
    "method": "GET",
    "routeTemplate": "/customers/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.customers_update",
    "title": "Customers Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /customers/{id}.",
    "operationKey": "CUSTOMERS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/customers/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "List of billing address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "email": {
          "description": "The email address for the customer.",
          "format": "email",
          "type": "string"
        },
        "first_name": {
          "description": "Customer first name.",
          "type": "string"
        },
        "last_name": {
          "description": "Customer last name.",
          "type": "string"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "password": {
          "description": "Customer password.",
          "type": "string"
        },
        "shipping": {
          "description": "List of shipping address data.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code of the country.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "username": {
          "description": "Customer login name.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "password"
    ]
  },
  {
    "toolName": "wc.v3.data_continents_list",
    "title": "Data Continents List",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/continents.",
    "operationKey": "DATA_CONTINENTS_LIST",
    "method": "GET",
    "routeTemplate": "/data/continents"
  },
  {
    "toolName": "wc.v3.data_continents_read",
    "title": "Data Continents Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/continents/{location}.",
    "operationKey": "DATA_CONTINENTS_READ",
    "method": "GET",
    "routeTemplate": "/data/continents/{location}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "location": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "location"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "continent": {
          "description": "2 character continent code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.data_countries_list",
    "title": "Data Countries List",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/countries.",
    "operationKey": "DATA_COUNTRIES_LIST",
    "method": "GET",
    "routeTemplate": "/data/countries"
  },
  {
    "toolName": "wc.v3.data_countries_read",
    "title": "Data Countries Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/countries/{location}.",
    "operationKey": "DATA_COUNTRIES_READ",
    "method": "GET",
    "routeTemplate": "/data/countries/{location}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "location": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "location"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.data_currencies_current_list",
    "title": "Data Currencies Current List",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/currencies/current.",
    "operationKey": "DATA_CURRENCIES_CURRENT_LIST",
    "method": "GET",
    "routeTemplate": "/data/currencies/current"
  },
  {
    "toolName": "wc.v3.data_currencies_list",
    "title": "Data Currencies List",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/currencies.",
    "operationKey": "DATA_CURRENCIES_LIST",
    "method": "GET",
    "routeTemplate": "/data/currencies"
  },
  {
    "toolName": "wc.v3.data_currencies_read",
    "title": "Data Currencies Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /data/currencies/{currency}.",
    "operationKey": "DATA_CURRENCIES_READ",
    "method": "GET",
    "routeTemplate": "/data/currencies/{currency}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "currency": {
          "pattern": "^[\\w-]{3}$",
          "type": "string"
        }
      },
      "required": [
        "currency"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "location": {
          "description": "ISO4217 currency code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.data_list",
    "title": "Data List",
    "description": "Generated WooCommerce wc.v3 operation for GET /data.",
    "operationKey": "DATA_LIST",
    "method": "GET",
    "routeTemplate": "/data"
  },
  {
    "toolName": "wc.v3.layout-templates_list",
    "title": "Layout-templates List",
    "description": "Generated WooCommerce wc.v3 operation for GET /layout-templates.",
    "operationKey": "LAYOUT-TEMPLATES_LIST",
    "method": "GET",
    "routeTemplate": "/layout-templates",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "area": {
          "default": "",
          "description": "Area to get templates for.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.layout-templates_read",
    "title": "Layout-templates Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /layout-templates/{id}.",
    "operationKey": "LAYOUT-TEMPLATES_READ",
    "method": "GET",
    "routeTemplate": "/layout-templates/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^\\w[\\w\\s\\-]*$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_create-order_create",
    "title": "Marketplace Create-order Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/create-order.",
    "operationKey": "MARKETPLACE_CREATE-ORDER_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/create-order",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {}
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_featured_list",
    "title": "Marketplace Featured List",
    "description": "Generated WooCommerce wc.v3 operation for GET /marketplace/featured.",
    "operationKey": "MARKETPLACE_FEATURED_LIST",
    "method": "GET",
    "routeTemplate": "/marketplace/featured"
  },
  {
    "toolName": "wc.v3.marketplace_refresh_create",
    "title": "Marketplace Refresh Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/refresh.",
    "operationKey": "MARKETPLACE_REFRESH_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/refresh"
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_activate_create",
    "title": "Marketplace Subscriptions Activate Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/subscriptions/activate.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_ACTIVATE_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/subscriptions/activate",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_key": {
          "type": "string"
        }
      },
      "required": [
        "product_key"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_activate-plugin_create",
    "title": "Marketplace Subscriptions Activate-plugin Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/subscriptions/activate-plugin.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_ACTIVATE-PLUGIN_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/subscriptions/activate-plugin",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_key": {
          "type": "string"
        }
      },
      "required": [
        "product_key"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_connect_create",
    "title": "Marketplace Subscriptions Connect Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/subscriptions/connect.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_CONNECT_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/subscriptions/connect",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_key": {
          "type": "string"
        }
      },
      "required": [
        "product_key"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_disconnect_create",
    "title": "Marketplace Subscriptions Disconnect Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /marketplace/subscriptions/disconnect.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_DISCONNECT_CREATE",
    "method": "POST",
    "routeTemplate": "/marketplace/subscriptions/disconnect",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_key": {
          "type": "string"
        }
      },
      "required": [
        "product_key"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_install-url_list",
    "title": "Marketplace Subscriptions Install-url List",
    "description": "Generated WooCommerce wc.v3 operation for GET /marketplace/subscriptions/install-url.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_INSTALL-URL_LIST",
    "method": "GET",
    "routeTemplate": "/marketplace/subscriptions/install-url",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "product_key": {
          "type": "string"
        }
      },
      "required": [
        "product_key"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.marketplace_subscriptions_list",
    "title": "Marketplace Subscriptions List",
    "description": "Generated WooCommerce wc.v3 operation for GET /marketplace/subscriptions.",
    "operationKey": "MARKETPLACE_SUBSCRIPTIONS_LIST",
    "method": "GET",
    "routeTemplate": "/marketplace/subscriptions"
  },
  {
    "toolName": "wc.v3.orders_actions_email_templates_list",
    "title": "Orders Actions Email Templates List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{id}/actions/email_templates.",
    "operationKey": "ORDERS_ACTIONS_EMAIL_TEMPLATES_LIST",
    "method": "GET",
    "routeTemplate": "/orders/{id}/actions/email_templates",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_actions_send_email_create",
    "title": "Orders Actions Send Email Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{id}/actions/send_email.",
    "operationKey": "ORDERS_ACTIONS_SEND_EMAIL_CREATE",
    "method": "POST",
    "routeTemplate": "/orders/{id}/actions/send_email",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "email": {
          "description": "Email address to send the order details to.",
          "format": "email",
          "type": "string"
        },
        "force_email_update": {
          "description": "Whether to update the billing email of the order, even if it already has one.",
          "type": "boolean"
        },
        "template_id": {
          "description": "The ID of the template to use for sending the email.",
          "enum": [
            "new_order",
            "cancelled_order",
            "failed_order",
            "customer_failed_order",
            "customer_on_hold_order",
            "customer_processing_order",
            "customer_completed_order",
            "customer_refunded_order",
            "customer_invoice",
            "customer_note",
            "customer_reset_password",
            "customer_new_account"
          ],
          "type": "string"
        }
      },
      "required": [
        "template_id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_actions_send_order_details_create",
    "title": "Orders Actions Send Order Details Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{id}/actions/send_order_details.",
    "operationKey": "ORDERS_ACTIONS_SEND_ORDER_DETAILS_CREATE",
    "method": "POST",
    "routeTemplate": "/orders/{id}/actions/send_order_details",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "email": {
          "description": "Email address to send the order details to.",
          "format": "email",
          "type": "string"
        },
        "force_email_update": {
          "description": "Whether to update the billing email of the order, even if it already has one.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_batch",
    "title": "Orders Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/batch.",
    "operationKey": "ORDERS_BATCH",
    "method": "POST",
    "routeTemplate": "/orders/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "billing": {
                "description": "Billing address.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Country code in ISO 3166-1 alpha-2 format.",
                    "type": "string"
                  },
                  "email": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Email address.",
                    "format": "email",
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "coupon_lines": {
                "description": "Coupons line data.",
                "items": {
                  "properties": {
                    "code": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Coupon code.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "discount": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Discount total.",
                      "readonly": true,
                      "type": "string"
                    },
                    "discount_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Discount total tax.",
                      "readonly": true,
                      "type": "string"
                    },
                    "discount_type": {
                      "context": [
                        "view"
                      ],
                      "description": "Discount type.",
                      "readonly": true,
                      "type": "string"
                    },
                    "free_shipping": {
                      "context": [
                        "view"
                      ],
                      "description": "Whether the coupon grants free shipping or not.",
                      "readonly": true,
                      "type": "boolean"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "nominal_amount": {
                      "context": [
                        "view"
                      ],
                      "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                      "readonly": true,
                      "type": "number"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "created_via": {
                "description": "Shows where the order was created.",
                "type": "string"
              },
              "currency": {
                "description": "Currency the order was created with, in ISO format.",
                "enum": [
                  "AED",
                  "AFN",
                  "ALL",
                  "AMD",
                  "ANG",
                  "AOA",
                  "ARS",
                  "AUD",
                  "AWG",
                  "AZN",
                  "BAM",
                  "BBD",
                  "BDT",
                  "BGN",
                  "BHD",
                  "BIF",
                  "BMD",
                  "BND",
                  "BOB",
                  "BRL",
                  "BSD",
                  "BTC",
                  "BTN",
                  "BWP",
                  "BYR",
                  "BYN",
                  "BZD",
                  "CAD",
                  "CDF",
                  "CHF",
                  "CLP",
                  "CNY",
                  "COP",
                  "CRC",
                  "CUC",
                  "CUP",
                  "CVE",
                  "CZK",
                  "DJF",
                  "DKK",
                  "DOP",
                  "DZD",
                  "EGP",
                  "ERN",
                  "ETB",
                  "EUR",
                  "FJD",
                  "FKP",
                  "GBP",
                  "GEL",
                  "GGP",
                  "GHS",
                  "GIP",
                  "GMD",
                  "GNF",
                  "GTQ",
                  "GYD",
                  "HKD",
                  "HNL",
                  "HRK",
                  "HTG",
                  "HUF",
                  "IDR",
                  "ILS",
                  "IMP",
                  "INR",
                  "IQD",
                  "IRR",
                  "IRT",
                  "ISK",
                  "JEP",
                  "JMD",
                  "JOD",
                  "JPY",
                  "KES",
                  "KGS",
                  "KHR",
                  "KMF",
                  "KPW",
                  "KRW",
                  "KWD",
                  "KYD",
                  "KZT",
                  "LAK",
                  "LBP",
                  "LKR",
                  "LRD",
                  "LSL",
                  "LYD",
                  "MAD",
                  "MDL",
                  "MGA",
                  "MKD",
                  "MMK",
                  "MNT",
                  "MOP",
                  "MRU",
                  "MUR",
                  "MVR",
                  "MWK",
                  "MXN",
                  "MYR",
                  "MZN",
                  "NAD",
                  "NGN",
                  "NIO",
                  "NOK",
                  "NPR",
                  "NZD",
                  "OMR",
                  "PAB",
                  "PEN",
                  "PGK",
                  "PHP",
                  "PKR",
                  "PLN",
                  "PRB",
                  "PYG",
                  "QAR",
                  "RON",
                  "RSD",
                  "RUB",
                  "RWF",
                  "SAR",
                  "SBD",
                  "SCR",
                  "SDG",
                  "SEK",
                  "SGD",
                  "SHP",
                  "SLL",
                  "SOS",
                  "SRD",
                  "SSP",
                  "STN",
                  "SYP",
                  "SZL",
                  "THB",
                  "TJS",
                  "TMT",
                  "TND",
                  "TOP",
                  "TRY",
                  "TTD",
                  "TWD",
                  "TZS",
                  "UAH",
                  "UGX",
                  "USD",
                  "UYU",
                  "UZS",
                  "VEF",
                  "VES",
                  "VND",
                  "VUV",
                  "WST",
                  "XAF",
                  "XCD",
                  "XOF",
                  "XPF",
                  "YER",
                  "ZAR",
                  "ZMW"
                ],
                "type": "string"
              },
              "customer_id": {
                "description": "User ID who owns the order. 0 for guests.",
                "type": "integer"
              },
              "customer_note": {
                "description": "Note left by customer during checkout.",
                "type": "string"
              },
              "fee_lines": {
                "description": "Fee lines data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Fee name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "tax_class": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax class of fee.",
                      "type": "string"
                    },
                    "tax_status": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax status of fee.",
                      "enum": [
                        "taxable",
                        "none"
                      ],
                      "type": "string"
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "subtotal": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax subtotal.",
                            "readonly": true,
                            "type": "string"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "readonly": true,
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "line_items": {
                "description": "Line items data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "image": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Properties of the main product image.",
                      "properties": {
                        "id": {
                          "context": [
                            "view",
                            "edit"
                          ],
                          "description": "Image ID.",
                          "type": "integer"
                        },
                        "src": {
                          "context": [
                            "view",
                            "edit"
                          ],
                          "description": "Image URL.",
                          "format": "uri",
                          "type": "string"
                        }
                      },
                      "readonly": true,
                      "type": "object"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "display_key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key for UI display.",
                            "type": "string"
                          },
                          "display_value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value for UI display.",
                            "type": "string"
                          },
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "parent_name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Parent product name if the product is a variation.",
                      "type": "string"
                    },
                    "price": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product price.",
                      "readonly": true,
                      "type": "number"
                    },
                    "product_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product ID.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "quantity": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Quantity ordered.",
                      "type": "integer"
                    },
                    "sku": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product SKU.",
                      "readonly": true,
                      "type": "string"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line subtotal (before discounts).",
                      "type": "string"
                    },
                    "subtotal_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line subtotal tax (before discounts).",
                      "readonly": true,
                      "type": "string"
                    },
                    "tax_class": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax class of product.",
                      "type": "string"
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "type": "integer"
                          },
                          "subtotal": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax subtotal.",
                            "type": "string"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    },
                    "variation_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Variation ID, if applicable.",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "manual_update": {
                "description": "Set the action as manual so that the order note registers as \"added by user\".",
                "type": "boolean"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "parent_id": {
                "description": "Parent order ID.",
                "type": "integer"
              },
              "payment_method": {
                "description": "Payment method ID.",
                "type": "string"
              },
              "payment_method_title": {
                "description": "Payment method title.",
                "type": "string"
              },
              "set_paid": {
                "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                "type": "boolean"
              },
              "shipping": {
                "description": "Shipping address.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Country code in ISO 3166-1 alpha-2 format.",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "shipping_lines": {
                "description": "Shipping lines data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "instance_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping instance ID.",
                      "type": "string"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "method_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping method ID.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "method_title": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping method name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "readonly": true,
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "status": {
                "description": "Order status.",
                "enum": [
                  "auto-draft",
                  "pending",
                  "processing",
                  "on-hold",
                  "completed",
                  "cancelled",
                  "refunded",
                  "failed",
                  "checkout-draft"
                ],
                "type": "string"
              },
              "transaction_id": {
                "description": "Unique transaction ID.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "billing": {
                "description": "Billing address.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Country code in ISO 3166-1 alpha-2 format.",
                    "type": "string"
                  },
                  "email": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Email address.",
                    "format": "email",
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "phone": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Phone number.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "coupon_lines": {
                "description": "Coupons line data.",
                "items": {
                  "properties": {
                    "code": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Coupon code.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "discount": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Discount total.",
                      "readonly": true,
                      "type": "string"
                    },
                    "discount_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Discount total tax.",
                      "readonly": true,
                      "type": "string"
                    },
                    "discount_type": {
                      "context": [
                        "view"
                      ],
                      "description": "Discount type.",
                      "readonly": true,
                      "type": "string"
                    },
                    "free_shipping": {
                      "context": [
                        "view"
                      ],
                      "description": "Whether the coupon grants free shipping or not.",
                      "readonly": true,
                      "type": "boolean"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "nominal_amount": {
                      "context": [
                        "view"
                      ],
                      "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                      "readonly": true,
                      "type": "number"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "created_via": {
                "description": "Shows where the order was created.",
                "type": "string"
              },
              "currency": {
                "description": "Currency the order was created with, in ISO format.",
                "enum": [
                  "AED",
                  "AFN",
                  "ALL",
                  "AMD",
                  "ANG",
                  "AOA",
                  "ARS",
                  "AUD",
                  "AWG",
                  "AZN",
                  "BAM",
                  "BBD",
                  "BDT",
                  "BGN",
                  "BHD",
                  "BIF",
                  "BMD",
                  "BND",
                  "BOB",
                  "BRL",
                  "BSD",
                  "BTC",
                  "BTN",
                  "BWP",
                  "BYR",
                  "BYN",
                  "BZD",
                  "CAD",
                  "CDF",
                  "CHF",
                  "CLP",
                  "CNY",
                  "COP",
                  "CRC",
                  "CUC",
                  "CUP",
                  "CVE",
                  "CZK",
                  "DJF",
                  "DKK",
                  "DOP",
                  "DZD",
                  "EGP",
                  "ERN",
                  "ETB",
                  "EUR",
                  "FJD",
                  "FKP",
                  "GBP",
                  "GEL",
                  "GGP",
                  "GHS",
                  "GIP",
                  "GMD",
                  "GNF",
                  "GTQ",
                  "GYD",
                  "HKD",
                  "HNL",
                  "HRK",
                  "HTG",
                  "HUF",
                  "IDR",
                  "ILS",
                  "IMP",
                  "INR",
                  "IQD",
                  "IRR",
                  "IRT",
                  "ISK",
                  "JEP",
                  "JMD",
                  "JOD",
                  "JPY",
                  "KES",
                  "KGS",
                  "KHR",
                  "KMF",
                  "KPW",
                  "KRW",
                  "KWD",
                  "KYD",
                  "KZT",
                  "LAK",
                  "LBP",
                  "LKR",
                  "LRD",
                  "LSL",
                  "LYD",
                  "MAD",
                  "MDL",
                  "MGA",
                  "MKD",
                  "MMK",
                  "MNT",
                  "MOP",
                  "MRU",
                  "MUR",
                  "MVR",
                  "MWK",
                  "MXN",
                  "MYR",
                  "MZN",
                  "NAD",
                  "NGN",
                  "NIO",
                  "NOK",
                  "NPR",
                  "NZD",
                  "OMR",
                  "PAB",
                  "PEN",
                  "PGK",
                  "PHP",
                  "PKR",
                  "PLN",
                  "PRB",
                  "PYG",
                  "QAR",
                  "RON",
                  "RSD",
                  "RUB",
                  "RWF",
                  "SAR",
                  "SBD",
                  "SCR",
                  "SDG",
                  "SEK",
                  "SGD",
                  "SHP",
                  "SLL",
                  "SOS",
                  "SRD",
                  "SSP",
                  "STN",
                  "SYP",
                  "SZL",
                  "THB",
                  "TJS",
                  "TMT",
                  "TND",
                  "TOP",
                  "TRY",
                  "TTD",
                  "TWD",
                  "TZS",
                  "UAH",
                  "UGX",
                  "USD",
                  "UYU",
                  "UZS",
                  "VEF",
                  "VES",
                  "VND",
                  "VUV",
                  "WST",
                  "XAF",
                  "XCD",
                  "XOF",
                  "XPF",
                  "YER",
                  "ZAR",
                  "ZMW"
                ],
                "type": "string"
              },
              "customer_id": {
                "description": "User ID who owns the order. 0 for guests.",
                "type": "integer"
              },
              "customer_note": {
                "description": "Note left by customer during checkout.",
                "type": "string"
              },
              "fee_lines": {
                "description": "Fee lines data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Fee name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "tax_class": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax class of fee.",
                      "type": "string"
                    },
                    "tax_status": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax status of fee.",
                      "enum": [
                        "taxable",
                        "none"
                      ],
                      "type": "string"
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "subtotal": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax subtotal.",
                            "readonly": true,
                            "type": "string"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "readonly": true,
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "id": {
                "type": "integer"
              },
              "line_items": {
                "description": "Line items data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "image": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Properties of the main product image.",
                      "properties": {
                        "id": {
                          "context": [
                            "view",
                            "edit"
                          ],
                          "description": "Image ID.",
                          "type": "integer"
                        },
                        "src": {
                          "context": [
                            "view",
                            "edit"
                          ],
                          "description": "Image URL.",
                          "format": "uri",
                          "type": "string"
                        }
                      },
                      "readonly": true,
                      "type": "object"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "display_key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key for UI display.",
                            "type": "string"
                          },
                          "display_value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value for UI display.",
                            "type": "string"
                          },
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "parent_name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Parent product name if the product is a variation.",
                      "type": "string"
                    },
                    "price": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product price.",
                      "readonly": true,
                      "type": "number"
                    },
                    "product_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product ID.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "quantity": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Quantity ordered.",
                      "type": "integer"
                    },
                    "sku": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Product SKU.",
                      "readonly": true,
                      "type": "string"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line subtotal (before discounts).",
                      "type": "string"
                    },
                    "subtotal_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line subtotal tax (before discounts).",
                      "readonly": true,
                      "type": "string"
                    },
                    "tax_class": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax class of product.",
                      "type": "string"
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "type": "integer"
                          },
                          "subtotal": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax subtotal.",
                            "type": "string"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    },
                    "variation_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Variation ID, if applicable.",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "manual_update": {
                "description": "Set the action as manual so that the order note registers as \"added by user\".",
                "type": "boolean"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "parent_id": {
                "description": "Parent order ID.",
                "type": "integer"
              },
              "payment_method": {
                "description": "Payment method ID.",
                "type": "string"
              },
              "payment_method_title": {
                "description": "Payment method title.",
                "type": "string"
              },
              "set_paid": {
                "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                "type": "boolean"
              },
              "shipping": {
                "description": "Shipping address.",
                "properties": {
                  "address_1": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 1",
                    "type": "string"
                  },
                  "address_2": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Address line 2",
                    "type": "string"
                  },
                  "city": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "City name.",
                    "type": "string"
                  },
                  "company": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Company name.",
                    "type": "string"
                  },
                  "country": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Country code in ISO 3166-1 alpha-2 format.",
                    "type": "string"
                  },
                  "first_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "First name.",
                    "type": "string"
                  },
                  "last_name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Last name.",
                    "type": "string"
                  },
                  "postcode": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Postal code.",
                    "type": "string"
                  },
                  "state": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "ISO code or name of the state, province or district.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "shipping_lines": {
                "description": "Shipping lines data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Item ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "instance_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping instance ID.",
                      "type": "string"
                    },
                    "meta_data": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta data.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "key": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta key.",
                            "type": "string"
                          },
                          "value": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Meta value.",
                            "type": [
                              "null",
                              "object",
                              "string",
                              "number",
                              "boolean",
                              "integer",
                              "array"
                            ]
                          }
                        },
                        "type": "object"
                      },
                      "type": "array"
                    },
                    "method_id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping method ID.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "method_title": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Shipping method name.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    },
                    "taxes": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line taxes.",
                      "items": {
                        "properties": {
                          "id": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax rate ID.",
                            "readonly": true,
                            "type": "integer"
                          },
                          "total": {
                            "context": [
                              "view",
                              "edit"
                            ],
                            "description": "Tax total.",
                            "readonly": true,
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "readonly": true,
                      "type": "array"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total (after discounts).",
                      "type": "string"
                    },
                    "total_tax": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Line total tax (after discounts).",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "status": {
                "description": "Order status.",
                "enum": [
                  "auto-draft",
                  "pending",
                  "processing",
                  "on-hold",
                  "completed",
                  "cancelled",
                  "refunded",
                  "failed",
                  "checkout-draft"
                ],
                "type": "string"
              },
              "transaction_id": {
                "description": "Unique transaction ID.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_batch_put_custom",
    "title": "Orders Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /orders/batch.",
    "operationKey": "ORDERS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/orders/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "Billing address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": [
                "string",
                "null"
              ]
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "coupon_lines": {
          "description": "Coupons line data.",
          "items": {
            "properties": {
              "code": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Coupon code.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "discount": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total.",
                "readonly": true,
                "type": "string"
              },
              "discount_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total tax.",
                "readonly": true,
                "type": "string"
              },
              "discount_type": {
                "context": [
                  "view"
                ],
                "description": "Discount type.",
                "readonly": true,
                "type": "string"
              },
              "free_shipping": {
                "context": [
                  "view"
                ],
                "description": "Whether the coupon grants free shipping or not.",
                "readonly": true,
                "type": "boolean"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "nominal_amount": {
                "context": [
                  "view"
                ],
                "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                "readonly": true,
                "type": "number"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "created_via": {
          "description": "Shows where the order was created.",
          "type": "string"
        },
        "currency": {
          "description": "Currency the order was created with, in ISO format.",
          "enum": [
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BHD",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BTC",
            "BTN",
            "BWP",
            "BYR",
            "BYN",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CUC",
            "CUP",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ERN",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GGP",
            "GHS",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "IMP",
            "INR",
            "IQD",
            "IRR",
            "IRT",
            "ISK",
            "JEP",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KPW",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LYD",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MRU",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PRB",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "SSP",
            "STN",
            "SYP",
            "SZL",
            "THB",
            "TJS",
            "TMT",
            "TND",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VES",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW"
          ],
          "type": "string"
        },
        "customer_id": {
          "description": "User ID who owns the order. 0 for guests.",
          "type": "integer"
        },
        "customer_note": {
          "description": "Note left by customer during checkout.",
          "type": "string"
        },
        "fee_lines": {
          "description": "Fee lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Fee name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of fee.",
                "type": "string"
              },
              "tax_status": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax status of fee.",
                "enum": [
                  "taxable",
                  "none"
                ],
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "readonly": true,
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "line_items": {
          "description": "Line items data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "image": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Properties of the main product image.",
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "readonly": true,
                "type": "object"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "display_key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key for UI display.",
                      "type": "string"
                    },
                    "display_value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value for UI display.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "parent_name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Parent product name if the product is a variation.",
                "type": "string"
              },
              "price": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product price.",
                "readonly": true,
                "type": "number"
              },
              "product_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "quantity": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Quantity ordered.",
                "type": "integer"
              },
              "sku": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product SKU.",
                "readonly": true,
                "type": "string"
              },
              "subtotal": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal (before discounts).",
                "type": "string"
              },
              "subtotal_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal tax (before discounts).",
                "readonly": true,
                "type": "string"
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of product.",
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              },
              "variation_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Variation ID, if applicable.",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "manual_update": {
          "description": "Set the action as manual so that the order note registers as \"added by user\".",
          "type": "boolean"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "parent_id": {
          "description": "Parent order ID.",
          "type": "integer"
        },
        "payment_method": {
          "description": "Payment method ID.",
          "type": "string"
        },
        "payment_method_title": {
          "description": "Payment method title.",
          "type": "string"
        },
        "set_paid": {
          "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
          "type": "boolean"
        },
        "shipping": {
          "description": "Shipping address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "shipping_lines": {
          "description": "Shipping lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "instance_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping instance ID.",
                "type": "string"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "method_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "method_title": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "status": {
          "description": "Order status.",
          "enum": [
            "auto-draft",
            "pending",
            "processing",
            "on-hold",
            "completed",
            "cancelled",
            "refunded",
            "failed",
            "checkout-draft"
          ],
          "type": "string"
        },
        "transaction_id": {
          "description": "Unique transaction ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_create",
    "title": "Orders Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders.",
    "operationKey": "ORDERS_CREATE",
    "method": "POST",
    "routeTemplate": "/orders",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "Billing address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": [
                "string",
                "null"
              ]
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "coupon_lines": {
          "description": "Coupons line data.",
          "items": {
            "properties": {
              "code": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Coupon code.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "discount": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total.",
                "readonly": true,
                "type": "string"
              },
              "discount_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total tax.",
                "readonly": true,
                "type": "string"
              },
              "discount_type": {
                "context": [
                  "view"
                ],
                "description": "Discount type.",
                "readonly": true,
                "type": "string"
              },
              "free_shipping": {
                "context": [
                  "view"
                ],
                "description": "Whether the coupon grants free shipping or not.",
                "readonly": true,
                "type": "boolean"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "nominal_amount": {
                "context": [
                  "view"
                ],
                "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                "readonly": true,
                "type": "number"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "created_via": {
          "description": "Shows where the order was created.",
          "type": "string"
        },
        "currency": {
          "default": "USD",
          "description": "Currency the order was created with, in ISO format.",
          "enum": [
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BHD",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BTC",
            "BTN",
            "BWP",
            "BYR",
            "BYN",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CUC",
            "CUP",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ERN",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GGP",
            "GHS",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "IMP",
            "INR",
            "IQD",
            "IRR",
            "IRT",
            "ISK",
            "JEP",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KPW",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LYD",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MRU",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PRB",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "SSP",
            "STN",
            "SYP",
            "SZL",
            "THB",
            "TJS",
            "TMT",
            "TND",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VES",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW"
          ],
          "type": "string"
        },
        "customer_id": {
          "default": 0,
          "description": "User ID who owns the order. 0 for guests.",
          "type": "integer"
        },
        "customer_note": {
          "description": "Note left by customer during checkout.",
          "type": "string"
        },
        "fee_lines": {
          "description": "Fee lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Fee name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of fee.",
                "type": "string"
              },
              "tax_status": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax status of fee.",
                "enum": [
                  "taxable",
                  "none"
                ],
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "readonly": true,
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "line_items": {
          "description": "Line items data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "image": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Properties of the main product image.",
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "readonly": true,
                "type": "object"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "display_key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key for UI display.",
                      "type": "string"
                    },
                    "display_value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value for UI display.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "parent_name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Parent product name if the product is a variation.",
                "type": "string"
              },
              "price": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product price.",
                "readonly": true,
                "type": "number"
              },
              "product_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "quantity": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Quantity ordered.",
                "type": "integer"
              },
              "sku": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product SKU.",
                "readonly": true,
                "type": "string"
              },
              "subtotal": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal (before discounts).",
                "type": "string"
              },
              "subtotal_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal tax (before discounts).",
                "readonly": true,
                "type": "string"
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of product.",
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              },
              "variation_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Variation ID, if applicable.",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "manual_update": {
          "default": false,
          "description": "Set the action as manual so that the order note registers as \"added by user\".",
          "type": "boolean"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "parent_id": {
          "description": "Parent order ID.",
          "type": "integer"
        },
        "payment_method": {
          "description": "Payment method ID.",
          "type": "string"
        },
        "payment_method_title": {
          "description": "Payment method title.",
          "type": "string"
        },
        "set_paid": {
          "default": false,
          "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
          "type": "boolean"
        },
        "shipping": {
          "description": "Shipping address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "shipping_lines": {
          "description": "Shipping lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "instance_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping instance ID.",
                "type": "string"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "method_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "method_title": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "status": {
          "default": "pending",
          "description": "Order status.",
          "enum": [
            "auto-draft",
            "pending",
            "processing",
            "on-hold",
            "completed",
            "cancelled",
            "refunded",
            "failed",
            "checkout-draft"
          ],
          "type": "string"
        },
        "transaction_id": {
          "description": "Unique transaction ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_delete",
    "title": "Orders Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /orders/{id}.",
    "operationKey": "ORDERS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/orders/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_id_post_custom",
    "title": "Orders Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{id}.",
    "operationKey": "ORDERS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/orders/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "Billing address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": [
                "string",
                "null"
              ]
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "coupon_lines": {
          "description": "Coupons line data.",
          "items": {
            "properties": {
              "code": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Coupon code.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "discount": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total.",
                "readonly": true,
                "type": "string"
              },
              "discount_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total tax.",
                "readonly": true,
                "type": "string"
              },
              "discount_type": {
                "context": [
                  "view"
                ],
                "description": "Discount type.",
                "readonly": true,
                "type": "string"
              },
              "free_shipping": {
                "context": [
                  "view"
                ],
                "description": "Whether the coupon grants free shipping or not.",
                "readonly": true,
                "type": "boolean"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "nominal_amount": {
                "context": [
                  "view"
                ],
                "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                "readonly": true,
                "type": "number"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "created_via": {
          "description": "Shows where the order was created.",
          "type": "string"
        },
        "currency": {
          "description": "Currency the order was created with, in ISO format.",
          "enum": [
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BHD",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BTC",
            "BTN",
            "BWP",
            "BYR",
            "BYN",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CUC",
            "CUP",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ERN",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GGP",
            "GHS",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "IMP",
            "INR",
            "IQD",
            "IRR",
            "IRT",
            "ISK",
            "JEP",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KPW",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LYD",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MRU",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PRB",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "SSP",
            "STN",
            "SYP",
            "SZL",
            "THB",
            "TJS",
            "TMT",
            "TND",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VES",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW"
          ],
          "type": "string"
        },
        "customer_id": {
          "description": "User ID who owns the order. 0 for guests.",
          "type": "integer"
        },
        "customer_note": {
          "description": "Note left by customer during checkout.",
          "type": "string"
        },
        "fee_lines": {
          "description": "Fee lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Fee name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of fee.",
                "type": "string"
              },
              "tax_status": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax status of fee.",
                "enum": [
                  "taxable",
                  "none"
                ],
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "readonly": true,
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "line_items": {
          "description": "Line items data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "image": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Properties of the main product image.",
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "readonly": true,
                "type": "object"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "display_key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key for UI display.",
                      "type": "string"
                    },
                    "display_value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value for UI display.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "parent_name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Parent product name if the product is a variation.",
                "type": "string"
              },
              "price": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product price.",
                "readonly": true,
                "type": "number"
              },
              "product_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "quantity": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Quantity ordered.",
                "type": "integer"
              },
              "sku": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product SKU.",
                "readonly": true,
                "type": "string"
              },
              "subtotal": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal (before discounts).",
                "type": "string"
              },
              "subtotal_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal tax (before discounts).",
                "readonly": true,
                "type": "string"
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of product.",
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              },
              "variation_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Variation ID, if applicable.",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "manual_update": {
          "description": "Set the action as manual so that the order note registers as \"added by user\".",
          "type": "boolean"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "parent_id": {
          "description": "Parent order ID.",
          "type": "integer"
        },
        "payment_method": {
          "description": "Payment method ID.",
          "type": "string"
        },
        "payment_method_title": {
          "description": "Payment method title.",
          "type": "string"
        },
        "set_paid": {
          "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
          "type": "boolean"
        },
        "shipping": {
          "description": "Shipping address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "shipping_lines": {
          "description": "Shipping lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "instance_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping instance ID.",
                "type": "string"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "method_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "method_title": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "status": {
          "description": "Order status.",
          "enum": [
            "auto-draft",
            "pending",
            "processing",
            "on-hold",
            "completed",
            "cancelled",
            "refunded",
            "failed",
            "checkout-draft"
          ],
          "type": "string"
        },
        "transaction_id": {
          "description": "Unique transaction ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_list",
    "title": "Orders List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders.",
    "operationKey": "ORDERS_LIST",
    "method": "GET",
    "routeTemplate": "/orders",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "created_via": {
          "description": "Limit result set to orders created via specific sources (e.g. checkout, admin).",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "customer": {
          "description": "Limit result set to orders assigned a specific customer.",
          "type": "integer"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "dp": {
          "default": 2,
          "description": "Number of decimal points to use in each resource.",
          "type": "integer"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "order_item_display_meta": {
          "default": false,
          "description": "Only show meta which is meant to be displayed for an order.",
          "type": "boolean"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "description": "Limit result set to orders assigned a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "status": {
          "default": "any",
          "description": "Limit result set to orders which have specific statuses.",
          "items": {
            "enum": [
              "any",
              "trash",
              "auto-draft",
              "pending",
              "processing",
              "on-hold",
              "completed",
              "cancelled",
              "refunded",
              "failed",
              "checkout-draft"
            ],
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_notes_create",
    "title": "Orders Notes Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{order_id}/notes.",
    "operationKey": "ORDERS_NOTES_CREATE",
    "method": "POST",
    "routeTemplate": "/orders/{order_id}/notes",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "added_by_user": {
          "default": false,
          "description": "If true, this note will be attributed to the current user. If false, the note will be attributed to the system.",
          "type": "boolean"
        },
        "customer_note": {
          "default": false,
          "description": "If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only.",
          "type": "boolean"
        },
        "note": {
          "description": "Order note content.",
          "type": "string"
        }
      },
      "required": [
        "note"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_notes_delete",
    "title": "Orders Notes Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /orders/{order_id}/notes/{id}.",
    "operationKey": "ORDERS_NOTES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/orders/{order_id}/notes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_notes_list",
    "title": "Orders Notes List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{order_id}/notes.",
    "operationKey": "ORDERS_NOTES_LIST",
    "method": "GET",
    "routeTemplate": "/orders/{order_id}/notes",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "type": {
          "default": "any",
          "description": "Limit result to customers or internal notes.",
          "enum": [
            "any",
            "customer",
            "internal"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_notes_read",
    "title": "Orders Notes Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{order_id}/notes/{id}.",
    "operationKey": "ORDERS_NOTES_READ",
    "method": "GET",
    "routeTemplate": "/orders/{order_id}/notes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_read",
    "title": "Orders Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{id}.",
    "operationKey": "ORDERS_READ",
    "method": "GET",
    "routeTemplate": "/orders/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_receipt_create",
    "title": "Orders Receipt Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{id}/receipt.",
    "operationKey": "ORDERS_RECEIPT_CREATE",
    "method": "POST",
    "routeTemplate": "/orders/{id}/receipt",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "expiration_date": {
          "default": null,
          "description": "Expiration date formatted as yyyy-mm-dd.",
          "type": "string"
        },
        "expiration_days": {
          "default": 1,
          "description": "Number of days to be added to the current date to get the expiration date.",
          "type": "integer"
        },
        "force_new": {
          "default": false,
          "description": "True to force the creation of a new receipt even if one already exists and has not expired yet.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_receipt_list",
    "title": "Orders Receipt List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{id}/receipt.",
    "operationKey": "ORDERS_RECEIPT_LIST",
    "method": "GET",
    "routeTemplate": "/orders/{id}/receipt",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_refunds_create",
    "title": "Orders Refunds Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /orders/{order_id}/refunds.",
    "operationKey": "ORDERS_REFUNDS_CREATE",
    "method": "POST",
    "routeTemplate": "/orders/{order_id}/refunds",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "amount": {
          "description": "Refund amount.",
          "type": "string"
        },
        "api_refund": {
          "default": true,
          "description": "When true, the payment gateway API is used to generate the refund.",
          "type": "boolean"
        },
        "api_restock": {
          "default": true,
          "description": "When true, refunded items are restocked.",
          "type": "boolean"
        },
        "fee_lines": {
          "description": "Fee lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Fee name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of fee.",
                "type": "string"
              },
              "tax_status": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax status of fee.",
                "enum": [
                  "taxable",
                  "none"
                ],
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "readonly": true,
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "reason": {
          "description": "Reason for refund.",
          "type": "string"
        },
        "refunded_by": {
          "description": "User ID of user who created the refund.",
          "type": "integer"
        },
        "shipping_lines": {
          "description": "Shipping lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "instance_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping instance ID.",
                "type": "string"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "method_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "method_title": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_refunds_delete",
    "title": "Orders Refunds Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /orders/{order_id}/refunds/{id}.",
    "operationKey": "ORDERS_REFUNDS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/orders/{order_id}/refunds/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": true,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_refunds_list",
    "title": "Orders Refunds List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{order_id}/refunds.",
    "operationKey": "ORDERS_REFUNDS_LIST",
    "method": "GET",
    "routeTemplate": "/orders/{order_id}/refunds",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "dp": {
          "default": 2,
          "description": "Number of decimal points to use in each resource.",
          "type": "integer"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "order_item_display_meta": {
          "default": false,
          "description": "Only show meta which is meant to be displayed for an order.",
          "type": "boolean"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_refunds_read",
    "title": "Orders Refunds Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/{order_id}/refunds/{id}.",
    "operationKey": "ORDERS_REFUNDS_READ",
    "method": "GET",
    "routeTemplate": "/orders/{order_id}/refunds/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "order_id": {
          "type": "integer"
        }
      },
      "required": [
        "order_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.orders_statuses_list",
    "title": "Orders Statuses List",
    "description": "Generated WooCommerce wc.v3 operation for GET /orders/statuses.",
    "operationKey": "ORDERS_STATUSES_LIST",
    "method": "GET",
    "routeTemplate": "/orders/statuses"
  },
  {
    "toolName": "wc.v3.orders_update",
    "title": "Orders Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /orders/{id}.",
    "operationKey": "ORDERS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/orders/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "billing": {
          "description": "Billing address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "email": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Email address.",
              "format": "email",
              "type": [
                "string",
                "null"
              ]
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "phone": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Phone number.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "coupon_lines": {
          "description": "Coupons line data.",
          "items": {
            "properties": {
              "code": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Coupon code.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "discount": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total.",
                "readonly": true,
                "type": "string"
              },
              "discount_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Discount total tax.",
                "readonly": true,
                "type": "string"
              },
              "discount_type": {
                "context": [
                  "view"
                ],
                "description": "Discount type.",
                "readonly": true,
                "type": "string"
              },
              "free_shipping": {
                "context": [
                  "view"
                ],
                "description": "Whether the coupon grants free shipping or not.",
                "readonly": true,
                "type": "boolean"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "nominal_amount": {
                "context": [
                  "view"
                ],
                "description": "Discount amount as defined in the coupon (absolute value or a percent, depending on the discount type).",
                "readonly": true,
                "type": "number"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "created_via": {
          "description": "Shows where the order was created.",
          "type": "string"
        },
        "currency": {
          "description": "Currency the order was created with, in ISO format.",
          "enum": [
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BHD",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BTC",
            "BTN",
            "BWP",
            "BYR",
            "BYN",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CUC",
            "CUP",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ERN",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GGP",
            "GHS",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "IMP",
            "INR",
            "IQD",
            "IRR",
            "IRT",
            "ISK",
            "JEP",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KPW",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LYD",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MRU",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PRB",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "SSP",
            "STN",
            "SYP",
            "SZL",
            "THB",
            "TJS",
            "TMT",
            "TND",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VES",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW"
          ],
          "type": "string"
        },
        "customer_id": {
          "description": "User ID who owns the order. 0 for guests.",
          "type": "integer"
        },
        "customer_note": {
          "description": "Note left by customer during checkout.",
          "type": "string"
        },
        "fee_lines": {
          "description": "Fee lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Fee name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of fee.",
                "type": "string"
              },
              "tax_status": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax status of fee.",
                "enum": [
                  "taxable",
                  "none"
                ],
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "readonly": true,
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "line_items": {
          "description": "Line items data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "image": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Properties of the main product image.",
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "readonly": true,
                "type": "object"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "display_key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key for UI display.",
                      "type": "string"
                    },
                    "display_value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value for UI display.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "parent_name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Parent product name if the product is a variation.",
                "type": "string"
              },
              "price": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product price.",
                "readonly": true,
                "type": "number"
              },
              "product_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "quantity": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Quantity ordered.",
                "type": "integer"
              },
              "sku": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Product SKU.",
                "readonly": true,
                "type": "string"
              },
              "subtotal": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal (before discounts).",
                "type": "string"
              },
              "subtotal_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line subtotal tax (before discounts).",
                "readonly": true,
                "type": "string"
              },
              "tax_class": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tax class of product.",
                "type": "string"
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "type": "integer"
                    },
                    "subtotal": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax subtotal.",
                      "type": "string"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              },
              "variation_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Variation ID, if applicable.",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "manual_update": {
          "description": "Set the action as manual so that the order note registers as \"added by user\".",
          "type": "boolean"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "parent_id": {
          "description": "Parent order ID.",
          "type": "integer"
        },
        "payment_method": {
          "description": "Payment method ID.",
          "type": "string"
        },
        "payment_method_title": {
          "description": "Payment method title.",
          "type": "string"
        },
        "set_paid": {
          "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
          "type": "boolean"
        },
        "shipping": {
          "description": "Shipping address.",
          "properties": {
            "address_1": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 1",
              "type": "string"
            },
            "address_2": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Address line 2",
              "type": "string"
            },
            "city": {
              "context": [
                "view",
                "edit"
              ],
              "description": "City name.",
              "type": "string"
            },
            "company": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Company name.",
              "type": "string"
            },
            "country": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Country code in ISO 3166-1 alpha-2 format.",
              "type": "string"
            },
            "first_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "First name.",
              "type": "string"
            },
            "last_name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Last name.",
              "type": "string"
            },
            "postcode": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Postal code.",
              "type": "string"
            },
            "state": {
              "context": [
                "view",
                "edit"
              ],
              "description": "ISO code or name of the state, province or district.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "shipping_lines": {
          "description": "Shipping lines data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Item ID.",
                "readonly": true,
                "type": "integer"
              },
              "instance_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping instance ID.",
                "type": "string"
              },
              "meta_data": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "method_id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method ID.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "method_title": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Shipping method name.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              },
              "taxes": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line taxes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax rate ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "total": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tax total.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "readonly": true,
                "type": "array"
              },
              "total": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total (after discounts).",
                "type": "string"
              },
              "total_tax": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Line total tax (after discounts).",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "status": {
          "description": "Order status.",
          "enum": [
            "auto-draft",
            "pending",
            "processing",
            "on-hold",
            "completed",
            "cancelled",
            "refunded",
            "failed",
            "checkout-draft"
          ],
          "type": "string"
        },
        "transaction_id": {
          "description": "Unique transaction ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.payment_gateways_id_post_custom",
    "title": "Payment Gateways Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /payment_gateways/{id}.",
    "operationKey": "PAYMENT_GATEWAYS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/payment_gateways/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "Payment gateway description on checkout.",
          "type": "string"
        },
        "enabled": {
          "description": "Payment gateway enabled status.",
          "type": "boolean"
        },
        "order": {
          "description": "Payment gateway sort order.",
          "type": "integer"
        },
        "settings": {
          "description": "Payment gateway settings.",
          "properties": {
            "default": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Default value for the setting.",
              "readonly": true,
              "type": "string"
            },
            "description": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable description for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A unique identifier for the setting.",
              "readonly": true,
              "type": "string"
            },
            "label": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable label for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "placeholder": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Placeholder text to be displayed in text inputs.",
              "readonly": true,
              "type": "string"
            },
            "tip": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Additional help text shown to the user about the setting.",
              "readonly": true,
              "type": "string"
            },
            "type": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Type of setting.",
              "enum": [
                "text",
                "email",
                "number",
                "color",
                "password",
                "textarea",
                "select",
                "multiselect",
                "radio",
                "image_width",
                "checkbox"
              ],
              "readonly": true,
              "type": "string"
            },
            "value": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Setting value.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "title": {
          "description": "Payment gateway title on checkout.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.payment_gateways_list",
    "title": "Payment Gateways List",
    "description": "Generated WooCommerce wc.v3 operation for GET /payment_gateways.",
    "operationKey": "PAYMENT_GATEWAYS_LIST",
    "method": "GET",
    "routeTemplate": "/payment_gateways",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.payment_gateways_read",
    "title": "Payment Gateways Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /payment_gateways/{id}.",
    "operationKey": "PAYMENT_GATEWAYS_READ",
    "method": "GET",
    "routeTemplate": "/payment_gateways/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.payment_gateways_update",
    "title": "Payment Gateways Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /payment_gateways/{id}.",
    "operationKey": "PAYMENT_GATEWAYS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/payment_gateways/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "Payment gateway description on checkout.",
          "type": "string"
        },
        "enabled": {
          "description": "Payment gateway enabled status.",
          "type": "boolean"
        },
        "order": {
          "description": "Payment gateway sort order.",
          "type": "integer"
        },
        "settings": {
          "description": "Payment gateway settings.",
          "properties": {
            "default": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Default value for the setting.",
              "readonly": true,
              "type": "string"
            },
            "description": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable description for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A unique identifier for the setting.",
              "readonly": true,
              "type": "string"
            },
            "label": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable label for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "placeholder": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Placeholder text to be displayed in text inputs.",
              "readonly": true,
              "type": "string"
            },
            "tip": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Additional help text shown to the user about the setting.",
              "readonly": true,
              "type": "string"
            },
            "type": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Type of setting.",
              "enum": [
                "text",
                "email",
                "number",
                "color",
                "password",
                "textarea",
                "select",
                "multiselect",
                "radio",
                "image_width",
                "checkbox"
              ],
              "readonly": true,
              "type": "string"
            },
            "value": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Setting value.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "title": {
          "description": "Payment gateway title on checkout.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_attribute_id_terms_batch_put_custom",
    "title": "Products Attributes Attribute Id Terms Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/attributes/{attribute_id}/terms/batch.",
    "operationKey": "PRODUCTS_ATTRIBUTES_ATTRIBUTE_ID_TERMS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Term name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_attribute_id_terms_id_post_custom",
    "title": "Products Attributes Attribute Id Terms Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes/{attribute_id}/terms/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_ATTRIBUTE_ID_TERMS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        },
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Term name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_batch",
    "title": "Products Attributes Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes/batch.",
    "operationKey": "PRODUCTS_ATTRIBUTES_BATCH",
    "method": "POST",
    "routeTemplate": "/products/attributes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "has_archives": {
                "description": "Enable/Disable attribute archives.",
                "type": "boolean"
              },
              "name": {
                "description": "Attribute name.",
                "type": "string"
              },
              "order_by": {
                "description": "Default sort order.",
                "enum": [
                  "menu_order",
                  "name",
                  "name_num",
                  "id"
                ],
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              },
              "type": {
                "description": "Type of attribute.",
                "enum": [
                  "select"
                ],
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "has_archives": {
                "description": "Enable/Disable attribute archives.",
                "type": "boolean"
              },
              "id": {
                "type": "integer"
              },
              "name": {
                "description": "Attribute name.",
                "type": "string"
              },
              "order_by": {
                "description": "Default sort order.",
                "enum": [
                  "menu_order",
                  "name",
                  "name_num",
                  "id"
                ],
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              },
              "type": {
                "description": "Type of attribute.",
                "enum": [
                  "select"
                ],
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_batch_put_custom",
    "title": "Products Attributes Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/attributes/batch.",
    "operationKey": "PRODUCTS_ATTRIBUTES_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/attributes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "has_archives": {
          "description": "Enable/Disable attribute archives.",
          "type": "boolean"
        },
        "name": {
          "description": "Attribute name.",
          "type": "string"
        },
        "order_by": {
          "description": "Default sort order.",
          "enum": [
            "menu_order",
            "name",
            "name_num",
            "id"
          ],
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        },
        "type": {
          "description": "Type of attribute.",
          "enum": [
            "select"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_create",
    "title": "Products Attributes Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes.",
    "operationKey": "PRODUCTS_ATTRIBUTES_CREATE",
    "method": "POST",
    "routeTemplate": "/products/attributes",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "has_archives": {
          "default": false,
          "description": "Enable/Disable attribute archives.",
          "type": "boolean"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "order_by": {
          "default": "menu_order",
          "description": "Default sort order.",
          "enum": [
            "menu_order",
            "name",
            "name_num",
            "id"
          ],
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        },
        "type": {
          "default": "select",
          "description": "Type of attribute.",
          "enum": [
            "select"
          ],
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_delete",
    "title": "Products Attributes Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/attributes/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/attributes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": true,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_id_post_custom",
    "title": "Products Attributes Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/attributes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "has_archives": {
          "description": "Enable/Disable attribute archives.",
          "type": "boolean"
        },
        "name": {
          "description": "Attribute name.",
          "type": "string"
        },
        "order_by": {
          "description": "Default sort order.",
          "enum": [
            "menu_order",
            "name",
            "name_num",
            "id"
          ],
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        },
        "type": {
          "description": "Type of attribute.",
          "enum": [
            "select"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_list",
    "title": "Products Attributes List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/attributes.",
    "operationKey": "PRODUCTS_ATTRIBUTES_LIST",
    "method": "GET",
    "routeTemplate": "/products/attributes",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_read",
    "title": "Products Attributes Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/attributes/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_READ",
    "method": "GET",
    "routeTemplate": "/products/attributes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_batch",
    "title": "Products Attributes Terms Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes/{attribute_id}/terms/batch.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Term name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Term name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_create",
    "title": "Products Attributes Terms Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/attributes/{attribute_id}/terms.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_CREATE",
    "method": "POST",
    "routeTemplate": "/products/attributes/{attribute_id}/terms",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_delete",
    "title": "Products Attributes Terms Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/attributes/{attribute_id}/terms/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        },
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_list",
    "title": "Products Attributes Terms List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/attributes/{attribute_id}/terms.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_LIST",
    "method": "GET",
    "routeTemplate": "/products/attributes/{attribute_id}/terms",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "hide_empty": {
          "default": false,
          "description": "Whether to hide resources not assigned to any products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by resource attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "slug",
            "term_group",
            "description",
            "count"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "description": "Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": null,
          "description": "Limit result set to resources assigned to a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to resources with a specific slug.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_read",
    "title": "Products Attributes Terms Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/attributes/{attribute_id}/terms/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_READ",
    "method": "GET",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        },
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_terms_update",
    "title": "Products Attributes Terms Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/attributes/{attribute_id}/terms/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_TERMS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/attributes/{attribute_id}/terms/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "attribute_id": {
          "type": "integer"
        },
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "attribute_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Term name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_attributes_update",
    "title": "Products Attributes Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/attributes/{id}.",
    "operationKey": "PRODUCTS_ATTRIBUTES_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/attributes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "has_archives": {
          "description": "Enable/Disable attribute archives.",
          "type": "boolean"
        },
        "name": {
          "description": "Attribute name.",
          "type": "string"
        },
        "order_by": {
          "description": "Default sort order.",
          "enum": [
            "menu_order",
            "name",
            "name_num",
            "id"
          ],
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        },
        "type": {
          "description": "Type of attribute.",
          "enum": [
            "select"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_batch",
    "title": "Products Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/batch.",
    "operationKey": "PRODUCTS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "attributes": {
                "description": "List of attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "options": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "List of available term names of the attribute.",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    },
                    "position": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute position.",
                      "type": "integer"
                    },
                    "variation": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "default": false,
                      "description": "Define if the attribute can be used as variation.",
                      "type": "boolean"
                    },
                    "visible": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "default": false,
                      "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                      "type": "boolean"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "backorders": {
                "description": "If managing stock, this controls if backorders are allowed.",
                "enum": [
                  "no",
                  "notify",
                  "yes"
                ],
                "type": "string"
              },
              "brands": {
                "description": "List of brands.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "button_text": {
                "description": "Product external button text. Only for external products.",
                "type": "string"
              },
              "catalog_visibility": {
                "description": "Catalog visibility.",
                "enum": [
                  "visible",
                  "catalog",
                  "search",
                  "hidden"
                ],
                "type": "string"
              },
              "categories": {
                "description": "List of categories.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "cross_sell_ids": {
                "description": "List of cross-sell products IDs.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "date_created": {
                "description": "The date the product was created, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "description": "The date the product was created, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from": {
                "description": "Start date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from_gmt": {
                "description": "Start date of sale price, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to_gmt": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "default_attributes": {
                "description": "Defaults variation attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "option": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Selected attribute term name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "description": {
                "description": "Product description.",
                "type": "string"
              },
              "dimensions": {
                "description": "Product dimensions.",
                "properties": {
                  "height": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product height (in).",
                    "type": "string"
                  },
                  "length": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product length (in).",
                    "type": "string"
                  },
                  "width": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product width (in).",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "download_expiry": {
                "description": "Number of days until access to downloadable files expires.",
                "type": "integer"
              },
              "download_limit": {
                "description": "Number of times downloadable files can be downloaded after purchase.",
                "type": "integer"
              },
              "downloadable": {
                "description": "If the product is downloadable.",
                "type": "boolean"
              },
              "downloads": {
                "description": "List of downloadable files.",
                "items": {
                  "properties": {
                    "file": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File URL.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File ID.",
                      "type": "string"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "external_url": {
                "description": "Product external URL. Only for external products.",
                "format": "uri",
                "type": "string"
              },
              "featured": {
                "description": "Featured product.",
                "type": "boolean"
              },
              "global_unique_id": {
                "description": "GTIN, UPC, EAN or ISBN.",
                "type": "string"
              },
              "images": {
                "description": "List of images.",
                "items": {
                  "properties": {
                    "alt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image alternative text.",
                      "type": "string"
                    },
                    "date_created": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was created, in the site's timezone.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_created_gmt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was created, as GMT.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_modified": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was last modified, in the site's timezone.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_modified_gmt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was last modified, as GMT.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image name.",
                      "type": "string"
                    },
                    "src": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image URL.",
                      "format": "uri",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "low_stock_amount": {
                "description": "Low Stock amount for the product.",
                "type": [
                  "integer",
                  "null"
                ]
              },
              "manage_stock": {
                "description": "Stock management at product level.",
                "type": "boolean"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort products.",
                "type": "integer"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "description": "Product name.",
                "type": "string"
              },
              "parent_id": {
                "description": "Product parent ID.",
                "type": "integer"
              },
              "post_password": {
                "description": "Post password.",
                "type": "string"
              },
              "purchase_note": {
                "description": "Optional note to send the customer after purchase.",
                "type": "string"
              },
              "regular_price": {
                "description": "Product regular price.",
                "type": "string"
              },
              "reviews_allowed": {
                "description": "Allow reviews.",
                "type": "boolean"
              },
              "sale_price": {
                "description": "Product sale price.",
                "type": "string"
              },
              "shipping_class": {
                "description": "Shipping class slug.",
                "type": "string"
              },
              "short_description": {
                "description": "Product short description.",
                "type": "string"
              },
              "sku": {
                "description": "Stock Keeping Unit.",
                "type": "string"
              },
              "slug": {
                "description": "Product slug.",
                "type": "string"
              },
              "sold_individually": {
                "description": "Allow one item to be bought in a single order.",
                "type": "boolean"
              },
              "status": {
                "description": "Product status (post status).",
                "enum": [
                  "draft",
                  "pending",
                  "private",
                  "publish",
                  "future",
                  "auto-draft",
                  "trash"
                ],
                "type": "string"
              },
              "stock_quantity": {
                "description": "Stock quantity.",
                "type": "integer"
              },
              "stock_status": {
                "description": "Controls the stock status of the product.",
                "enum": [
                  "instock",
                  "outofstock",
                  "onbackorder"
                ],
                "type": "string"
              },
              "tags": {
                "description": "List of tags.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "tax_class": {
                "description": "Tax class.",
                "type": "string"
              },
              "tax_status": {
                "description": "Tax status.",
                "enum": [
                  "taxable",
                  "shipping",
                  "none"
                ],
                "type": "string"
              },
              "type": {
                "description": "Product type.",
                "enum": [
                  "simple",
                  "grouped",
                  "external",
                  "variable"
                ],
                "type": "string"
              },
              "upsell_ids": {
                "description": "List of up-sell products IDs.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "virtual": {
                "description": "If the product is virtual.",
                "type": "boolean"
              },
              "weight": {
                "description": "Product weight (lbs).",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "attributes": {
                "description": "List of attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "options": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "List of available term names of the attribute.",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    },
                    "position": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute position.",
                      "type": "integer"
                    },
                    "variation": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "default": false,
                      "description": "Define if the attribute can be used as variation.",
                      "type": "boolean"
                    },
                    "visible": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "default": false,
                      "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                      "type": "boolean"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "backorders": {
                "description": "If managing stock, this controls if backorders are allowed.",
                "enum": [
                  "no",
                  "notify",
                  "yes"
                ],
                "type": "string"
              },
              "brands": {
                "description": "List of brands.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Brand slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "button_text": {
                "description": "Product external button text. Only for external products.",
                "type": "string"
              },
              "catalog_visibility": {
                "description": "Catalog visibility.",
                "enum": [
                  "visible",
                  "catalog",
                  "search",
                  "hidden"
                ],
                "type": "string"
              },
              "categories": {
                "description": "List of categories.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Category slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "cross_sell_ids": {
                "description": "List of cross-sell products IDs.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "date_created": {
                "description": "The date the product was created, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "description": "The date the product was created, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from": {
                "description": "Start date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from_gmt": {
                "description": "Start date of sale price, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to_gmt": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "default_attributes": {
                "description": "Defaults variation attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "option": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Selected attribute term name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "description": {
                "description": "Product description.",
                "type": "string"
              },
              "dimensions": {
                "description": "Product dimensions.",
                "properties": {
                  "height": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product height (in).",
                    "type": "string"
                  },
                  "length": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product length (in).",
                    "type": "string"
                  },
                  "width": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Product width (in).",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "download_expiry": {
                "description": "Number of days until access to downloadable files expires.",
                "type": "integer"
              },
              "download_limit": {
                "description": "Number of times downloadable files can be downloaded after purchase.",
                "type": "integer"
              },
              "downloadable": {
                "description": "If the product is downloadable.",
                "type": "boolean"
              },
              "downloads": {
                "description": "List of downloadable files.",
                "items": {
                  "properties": {
                    "file": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File URL.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File ID.",
                      "type": "string"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "external_url": {
                "description": "Product external URL. Only for external products.",
                "format": "uri",
                "type": "string"
              },
              "featured": {
                "description": "Featured product.",
                "type": "boolean"
              },
              "global_unique_id": {
                "description": "GTIN, UPC, EAN or ISBN.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "images": {
                "description": "List of images.",
                "items": {
                  "properties": {
                    "alt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image alternative text.",
                      "type": "string"
                    },
                    "date_created": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was created, in the site's timezone.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_created_gmt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was created, as GMT.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_modified": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was last modified, in the site's timezone.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "date_modified_gmt": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "The date the image was last modified, as GMT.",
                      "readonly": true,
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image name.",
                      "type": "string"
                    },
                    "src": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Image URL.",
                      "format": "uri",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "low_stock_amount": {
                "description": "Low Stock amount for the product.",
                "type": [
                  "integer",
                  "null"
                ]
              },
              "manage_stock": {
                "description": "Stock management at product level.",
                "type": "boolean"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort products.",
                "type": "integer"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "name": {
                "description": "Product name.",
                "type": "string"
              },
              "parent_id": {
                "description": "Product parent ID.",
                "type": "integer"
              },
              "post_password": {
                "description": "Post password.",
                "type": "string"
              },
              "purchase_note": {
                "description": "Optional note to send the customer after purchase.",
                "type": "string"
              },
              "regular_price": {
                "description": "Product regular price.",
                "type": "string"
              },
              "reviews_allowed": {
                "description": "Allow reviews.",
                "type": "boolean"
              },
              "sale_price": {
                "description": "Product sale price.",
                "type": "string"
              },
              "shipping_class": {
                "description": "Shipping class slug.",
                "type": "string"
              },
              "short_description": {
                "description": "Product short description.",
                "type": "string"
              },
              "sku": {
                "description": "Stock Keeping Unit.",
                "type": "string"
              },
              "slug": {
                "description": "Product slug.",
                "type": "string"
              },
              "sold_individually": {
                "description": "Allow one item to be bought in a single order.",
                "type": "boolean"
              },
              "status": {
                "description": "Product status (post status).",
                "enum": [
                  "draft",
                  "pending",
                  "private",
                  "publish",
                  "future",
                  "auto-draft",
                  "trash"
                ],
                "type": "string"
              },
              "stock_quantity": {
                "description": "Stock quantity.",
                "type": "integer"
              },
              "stock_status": {
                "description": "Controls the stock status of the product.",
                "enum": [
                  "instock",
                  "outofstock",
                  "onbackorder"
                ],
                "type": "string"
              },
              "tags": {
                "description": "List of tags.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag name.",
                      "readonly": true,
                      "type": "string"
                    },
                    "slug": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Tag slug.",
                      "readonly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "tax_class": {
                "description": "Tax class.",
                "type": "string"
              },
              "tax_status": {
                "description": "Tax status.",
                "enum": [
                  "taxable",
                  "shipping",
                  "none"
                ],
                "type": "string"
              },
              "type": {
                "description": "Product type.",
                "enum": [
                  "simple",
                  "grouped",
                  "external",
                  "variable"
                ],
                "type": "string"
              },
              "upsell_ids": {
                "description": "List of up-sell products IDs.",
                "items": {
                  "type": "integer"
                },
                "type": "array"
              },
              "virtual": {
                "description": "If the product is virtual.",
                "type": "boolean"
              },
              "weight": {
                "description": "Product weight (lbs).",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_batch_put_custom",
    "title": "Products Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/batch.",
    "operationKey": "PRODUCTS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "options": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "List of available term names of the attribute.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "position": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute position.",
                "type": "integer"
              },
              "variation": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute can be used as variation.",
                "type": "boolean"
              },
              "visible": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "brands": {
          "description": "List of brands.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "button_text": {
          "description": "Product external button text. Only for external products.",
          "type": "string"
        },
        "catalog_visibility": {
          "description": "Catalog visibility.",
          "enum": [
            "visible",
            "catalog",
            "search",
            "hidden"
          ],
          "type": "string"
        },
        "categories": {
          "description": "List of categories.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "cross_sell_ids": {
          "description": "List of cross-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "date_created": {
          "description": "The date the product was created, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_created_gmt": {
          "description": "The date the product was created, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_attributes": {
          "description": "Defaults variation attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "description": {
          "description": "Product description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Product dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the product is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "external_url": {
          "description": "Product external URL. Only for external products.",
          "format": "uri",
          "type": "string"
        },
        "featured": {
          "description": "Featured product.",
          "type": "boolean"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "images": {
          "description": "List of images.",
          "items": {
            "properties": {
              "alt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image alternative text.",
                "type": "string"
              },
              "date_created": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image name.",
                "type": "string"
              },
              "src": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image URL.",
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the product.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at product level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "name": {
          "description": "Product name.",
          "type": "string"
        },
        "parent_id": {
          "description": "Product parent ID.",
          "type": "integer"
        },
        "post_password": {
          "description": "Post password.",
          "type": "string"
        },
        "purchase_note": {
          "description": "Optional note to send the customer after purchase.",
          "type": "string"
        },
        "regular_price": {
          "description": "Product regular price.",
          "type": "string"
        },
        "reviews_allowed": {
          "description": "Allow reviews.",
          "type": "boolean"
        },
        "sale_price": {
          "description": "Product sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "short_description": {
          "description": "Product short description.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "slug": {
          "description": "Product slug.",
          "type": "string"
        },
        "sold_individually": {
          "description": "Allow one item to be bought in a single order.",
          "type": "boolean"
        },
        "status": {
          "description": "Product status (post status).",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish",
            "future",
            "auto-draft",
            "trash"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tags": {
          "description": "List of tags.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "type": {
          "description": "Product type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "upsell_ids": {
          "description": "List of up-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "virtual": {
          "description": "If the product is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Product weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_brands_batch",
    "title": "Products Brands Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/brands/batch.",
    "operationKey": "PRODUCTS_BRANDS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/brands/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "display": {
                "description": "Category archive display type.",
                "enum": [
                  "default",
                  "products",
                  "subcategories",
                  "both"
                ],
                "type": "string"
              },
              "image": {
                "description": "Image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Category name.",
                "type": "string"
              },
              "parent": {
                "description": "The ID for the parent of the resource.",
                "type": "integer"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "display": {
                "description": "Category archive display type.",
                "enum": [
                  "default",
                  "products",
                  "subcategories",
                  "both"
                ],
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "image": {
                "description": "Image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Category name.",
                "type": "string"
              },
              "parent": {
                "description": "The ID for the parent of the resource.",
                "type": "integer"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_batch_put_custom",
    "title": "Products Brands Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/brands/batch.",
    "operationKey": "PRODUCTS_BRANDS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/brands/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_create",
    "title": "Products Brands Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/brands.",
    "operationKey": "PRODUCTS_BRANDS_CREATE",
    "method": "POST",
    "routeTemplate": "/products/brands",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "default": "default",
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_delete",
    "title": "Products Brands Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/brands/{id}.",
    "operationKey": "PRODUCTS_BRANDS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/brands/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_id_post_custom",
    "title": "Products Brands Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/brands/{id}.",
    "operationKey": "PRODUCTS_BRANDS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/brands/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_list",
    "title": "Products Brands List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/brands.",
    "operationKey": "PRODUCTS_BRANDS_LIST",
    "method": "GET",
    "routeTemplate": "/products/brands",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "hide_empty": {
          "default": false,
          "description": "Whether to hide resources not assigned to any products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by resource attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "slug",
            "term_group",
            "description",
            "count"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "description": "Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": null,
          "description": "Limit result set to resources assigned to a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to resources with a specific slug.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_read",
    "title": "Products Brands Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/brands/{id}.",
    "operationKey": "PRODUCTS_BRANDS_READ",
    "method": "GET",
    "routeTemplate": "/products/brands/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_brands_update",
    "title": "Products Brands Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/brands/{id}.",
    "operationKey": "PRODUCTS_BRANDS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/brands/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_batch",
    "title": "Products Categories Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/categories/batch.",
    "operationKey": "PRODUCTS_CATEGORIES_BATCH",
    "method": "POST",
    "routeTemplate": "/products/categories/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "display": {
                "description": "Category archive display type.",
                "enum": [
                  "default",
                  "products",
                  "subcategories",
                  "both"
                ],
                "type": "string"
              },
              "image": {
                "description": "Image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Category name.",
                "type": "string"
              },
              "parent": {
                "description": "The ID for the parent of the resource.",
                "type": "integer"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "display": {
                "description": "Category archive display type.",
                "enum": [
                  "default",
                  "products",
                  "subcategories",
                  "both"
                ],
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "image": {
                "description": "Image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort the resource.",
                "type": "integer"
              },
              "name": {
                "description": "Category name.",
                "type": "string"
              },
              "parent": {
                "description": "The ID for the parent of the resource.",
                "type": "integer"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_batch_put_custom",
    "title": "Products Categories Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/categories/batch.",
    "operationKey": "PRODUCTS_CATEGORIES_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/categories/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_create",
    "title": "Products Categories Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/categories.",
    "operationKey": "PRODUCTS_CATEGORIES_CREATE",
    "method": "POST",
    "routeTemplate": "/products/categories",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "default": "default",
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_delete",
    "title": "Products Categories Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/categories/{id}.",
    "operationKey": "PRODUCTS_CATEGORIES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/categories/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_id_post_custom",
    "title": "Products Categories Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/categories/{id}.",
    "operationKey": "PRODUCTS_CATEGORIES_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/categories/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_list",
    "title": "Products Categories List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/categories.",
    "operationKey": "PRODUCTS_CATEGORIES_LIST",
    "method": "GET",
    "routeTemplate": "/products/categories",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "hide_empty": {
          "default": false,
          "description": "Whether to hide resources not assigned to any products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by resource attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "slug",
            "term_group",
            "description",
            "count"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "description": "Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": null,
          "description": "Limit result set to resources assigned to a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to resources with a specific slug.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_read",
    "title": "Products Categories Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/categories/{id}.",
    "operationKey": "PRODUCTS_CATEGORIES_READ",
    "method": "GET",
    "routeTemplate": "/products/categories/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_categories_update",
    "title": "Products Categories Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/categories/{id}.",
    "operationKey": "PRODUCTS_CATEGORIES_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/categories/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "display": {
          "description": "Category archive display type.",
          "enum": [
            "default",
            "products",
            "subcategories",
            "both"
          ],
          "type": "string"
        },
        "image": {
          "description": "Image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort the resource.",
          "type": "integer"
        },
        "name": {
          "description": "Category name.",
          "type": "string"
        },
        "parent": {
          "description": "The ID for the parent of the resource.",
          "type": "integer"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_create",
    "title": "Products Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products.",
    "operationKey": "PRODUCTS_CREATE",
    "method": "POST",
    "routeTemplate": "/products",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "options": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "List of available term names of the attribute.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "position": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute position.",
                "type": "integer"
              },
              "variation": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute can be used as variation.",
                "type": "boolean"
              },
              "visible": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "default": "no",
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "brands": {
          "description": "List of brands.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "button_text": {
          "description": "Product external button text. Only for external products.",
          "type": "string"
        },
        "catalog_visibility": {
          "default": "visible",
          "description": "Catalog visibility.",
          "enum": [
            "visible",
            "catalog",
            "search",
            "hidden"
          ],
          "type": "string"
        },
        "categories": {
          "description": "List of categories.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "cross_sell_ids": {
          "description": "List of cross-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "date_created": {
          "description": "The date the product was created, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_created_gmt": {
          "description": "The date the product was created, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_attributes": {
          "description": "Defaults variation attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "description": {
          "description": "Product description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Product dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "default": -1,
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "default": -1,
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "default": false,
          "description": "If the product is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "external_url": {
          "description": "Product external URL. Only for external products.",
          "format": "uri",
          "type": "string"
        },
        "featured": {
          "default": false,
          "description": "Featured product.",
          "type": "boolean"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "images": {
          "description": "List of images.",
          "items": {
            "properties": {
              "alt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image alternative text.",
                "type": "string"
              },
              "date_created": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image name.",
                "type": "string"
              },
              "src": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image URL.",
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the product.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "default": false,
          "description": "Stock management at product level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "name": {
          "description": "Product name.",
          "type": "string"
        },
        "parent_id": {
          "description": "Product parent ID.",
          "type": "integer"
        },
        "post_password": {
          "description": "Post password.",
          "type": "string"
        },
        "purchase_note": {
          "description": "Optional note to send the customer after purchase.",
          "type": "string"
        },
        "regular_price": {
          "description": "Product regular price.",
          "type": "string"
        },
        "reviews_allowed": {
          "default": true,
          "description": "Allow reviews.",
          "type": "boolean"
        },
        "sale_price": {
          "description": "Product sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "short_description": {
          "description": "Product short description.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "slug": {
          "description": "Product slug.",
          "type": "string"
        },
        "sold_individually": {
          "default": false,
          "description": "Allow one item to be bought in a single order.",
          "type": "boolean"
        },
        "status": {
          "default": "publish",
          "description": "Product status (post status).",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish",
            "future",
            "auto-draft",
            "trash"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "default": "instock",
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tags": {
          "description": "List of tags.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "default": "taxable",
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "type": {
          "default": "simple",
          "description": "Product type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "upsell_ids": {
          "description": "List of up-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "virtual": {
          "default": false,
          "description": "If the product is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Product weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_custom-fields_names_list",
    "title": "Products Custom-fields Names List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/custom-fields/names.",
    "operationKey": "PRODUCTS_CUSTOM-FIELDS_NAMES_LIST",
    "method": "GET",
    "routeTemplate": "/products/custom-fields/names",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "description": "Scope under which the request is made; determines fields present in response.",
          "type": "string"
        },
        "order": {
          "default": "asc",
          "description": "Order sort items ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_delete",
    "title": "Products Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/{id}.",
    "operationKey": "PRODUCTS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_duplicate_create",
    "title": "Products Duplicate Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{id}/duplicate.",
    "operationKey": "PRODUCTS_DUPLICATE_CREATE",
    "method": "POST",
    "routeTemplate": "/products/{id}/duplicate",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "options": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "List of available term names of the attribute.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "position": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute position.",
                "type": "integer"
              },
              "variation": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute can be used as variation.",
                "type": "boolean"
              },
              "visible": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "brands": {
          "description": "List of brands.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "button_text": {
          "description": "Product external button text. Only for external products.",
          "type": "string"
        },
        "catalog_visibility": {
          "description": "Catalog visibility.",
          "enum": [
            "visible",
            "catalog",
            "search",
            "hidden"
          ],
          "type": "string"
        },
        "categories": {
          "description": "List of categories.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "cross_sell_ids": {
          "description": "List of cross-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "date_created": {
          "description": "The date the product was created, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_created_gmt": {
          "description": "The date the product was created, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_attributes": {
          "description": "Defaults variation attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "description": {
          "description": "Product description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Product dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the product is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "external_url": {
          "description": "Product external URL. Only for external products.",
          "format": "uri",
          "type": "string"
        },
        "featured": {
          "description": "Featured product.",
          "type": "boolean"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "images": {
          "description": "List of images.",
          "items": {
            "properties": {
              "alt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image alternative text.",
                "type": "string"
              },
              "date_created": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image name.",
                "type": "string"
              },
              "src": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image URL.",
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the product.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at product level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "name": {
          "description": "Product name.",
          "type": "string"
        },
        "parent_id": {
          "description": "Product parent ID.",
          "type": "integer"
        },
        "post_password": {
          "description": "Post password.",
          "type": "string"
        },
        "purchase_note": {
          "description": "Optional note to send the customer after purchase.",
          "type": "string"
        },
        "regular_price": {
          "description": "Product regular price.",
          "type": "string"
        },
        "reviews_allowed": {
          "description": "Allow reviews.",
          "type": "boolean"
        },
        "sale_price": {
          "description": "Product sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "short_description": {
          "description": "Product short description.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "slug": {
          "description": "Product slug.",
          "type": "string"
        },
        "sold_individually": {
          "description": "Allow one item to be bought in a single order.",
          "type": "boolean"
        },
        "status": {
          "description": "Product status (post status).",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish",
            "future",
            "auto-draft",
            "trash"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tags": {
          "description": "List of tags.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "type": {
          "description": "Product type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "upsell_ids": {
          "description": "List of up-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "virtual": {
          "description": "If the product is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Product weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_id_post_custom",
    "title": "Products Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{id}.",
    "operationKey": "PRODUCTS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "options": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "List of available term names of the attribute.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "position": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute position.",
                "type": "integer"
              },
              "variation": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute can be used as variation.",
                "type": "boolean"
              },
              "visible": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "brands": {
          "description": "List of brands.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "button_text": {
          "description": "Product external button text. Only for external products.",
          "type": "string"
        },
        "catalog_visibility": {
          "description": "Catalog visibility.",
          "enum": [
            "visible",
            "catalog",
            "search",
            "hidden"
          ],
          "type": "string"
        },
        "categories": {
          "description": "List of categories.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "cross_sell_ids": {
          "description": "List of cross-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "date_created": {
          "description": "The date the product was created, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_created_gmt": {
          "description": "The date the product was created, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_attributes": {
          "description": "Defaults variation attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "description": {
          "description": "Product description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Product dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the product is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "external_url": {
          "description": "Product external URL. Only for external products.",
          "format": "uri",
          "type": "string"
        },
        "featured": {
          "description": "Featured product.",
          "type": "boolean"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "images": {
          "description": "List of images.",
          "items": {
            "properties": {
              "alt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image alternative text.",
                "type": "string"
              },
              "date_created": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image name.",
                "type": "string"
              },
              "src": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image URL.",
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the product.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at product level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "name": {
          "description": "Product name.",
          "type": "string"
        },
        "parent_id": {
          "description": "Product parent ID.",
          "type": "integer"
        },
        "post_password": {
          "description": "Post password.",
          "type": "string"
        },
        "purchase_note": {
          "description": "Optional note to send the customer after purchase.",
          "type": "string"
        },
        "regular_price": {
          "description": "Product regular price.",
          "type": "string"
        },
        "reviews_allowed": {
          "description": "Allow reviews.",
          "type": "boolean"
        },
        "sale_price": {
          "description": "Product sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "short_description": {
          "description": "Product short description.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "slug": {
          "description": "Product slug.",
          "type": "string"
        },
        "sold_individually": {
          "description": "Allow one item to be bought in a single order.",
          "type": "boolean"
        },
        "status": {
          "description": "Product status (post status).",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish",
            "future",
            "auto-draft",
            "trash"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tags": {
          "description": "List of tags.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "type": {
          "description": "Product type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "upsell_ids": {
          "description": "List of up-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "virtual": {
          "description": "If the product is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Product weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_list",
    "title": "Products List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products.",
    "operationKey": "PRODUCTS_LIST",
    "method": "GET",
    "routeTemplate": "/products",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "attribute": {
          "description": "Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug.",
          "type": "string"
        },
        "attribute_term": {
          "description": "Limit result set to products with a specific attribute term ID (required an assigned attribute).",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "brand": {
          "description": "Limit result set to products assigned a specific brand ID.",
          "type": "string"
        },
        "category": {
          "description": "Limit result set to products assigned a specific category ID.",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "downloadable": {
          "description": "Limit result set to downloadable products.",
          "type": "boolean"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_status": {
          "description": "Exclude products with any of the statuses from result set.",
          "items": {
            "enum": [
              "future",
              "trash",
              "draft",
              "pending",
              "private",
              "publish"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "exclude_types": {
          "description": "Exclude products with any of the types from result set.",
          "items": {
            "enum": [
              "simple",
              "grouped",
              "external",
              "variable"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "featured": {
          "description": "Limit result set to featured products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "include_status": {
          "description": "Limit result set to products with any of the statuses.",
          "items": {
            "enum": [
              "any",
              "future",
              "trash",
              "draft",
              "pending",
              "private",
              "publish"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "include_types": {
          "description": "Limit result set to products with any of the types.",
          "items": {
            "enum": [
              "simple",
              "grouped",
              "external",
              "variable"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "max_price": {
          "description": "Limit result set to products based on a maximum price.",
          "type": "string"
        },
        "min_price": {
          "description": "Limit result set to products based on a minimum price.",
          "type": "string"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "on_sale": {
          "description": "Limit result set to products on sale.",
          "type": "boolean"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified",
            "popularity",
            "rating",
            "post__in",
            "price",
            "sales",
            "menu_order",
            "random",
            "popularity",
            "rating",
            "menu_order",
            "price",
            "popularity",
            "rating"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "search_name_or_sku": {
          "description": "Limit results to those with a name or SKU that partial matches a string. This argument takes precedence over 'search', 'sku' and 'search_sku'.",
          "type": "string"
        },
        "search_sku": {
          "description": "Limit results to those with a SKU that partial matches a string. This argument takes precedence over 'sku'.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Limit result set to products assigned a specific shipping class ID.",
          "type": "string"
        },
        "sku": {
          "description": "Limit result set to products with specific SKU(s). Use commas to separate.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to products with a specific slug.",
          "type": "string"
        },
        "status": {
          "default": "any",
          "description": "Limit result set to products assigned a specific status.",
          "enum": [
            "any",
            "future",
            "trash",
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_status": {
          "description": "Limit result set to products with specified stock status.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tag": {
          "description": "Limit result set to products assigned a specific tag ID.",
          "type": "string"
        },
        "type": {
          "description": "Limit result set to products assigned a specific type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "virtual": {
          "description": "Limit result set to virtual products.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_product_id_variations_batch_put_custom",
    "title": "Products Product Id Variations Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/{product_id}/variations/batch.",
    "operationKey": "PRODUCTS_PRODUCT_ID_VARIATIONS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/{product_id}/variations/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Variation description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Variation dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the variation is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "image": {
          "description": "Variation image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the variation.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at variation level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "regular_price": {
          "description": "Variation regular price.",
          "type": "string"
        },
        "sale_price": {
          "description": "Variation sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "status": {
          "description": "Variation status.",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "virtual": {
          "description": "If the variation is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Variation weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_product_id_variations_id_post_custom",
    "title": "Products Product Id Variations Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{product_id}/variations/{id}.",
    "operationKey": "PRODUCTS_PRODUCT_ID_VARIATIONS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/{product_id}/variations/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Variation description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Variation dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the variation is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "image": {
          "description": "Variation image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the variation.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at variation level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "regular_price": {
          "description": "Variation regular price.",
          "type": "string"
        },
        "sale_price": {
          "description": "Variation sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "status": {
          "description": "Variation status.",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "virtual": {
          "description": "If the variation is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Variation weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_read",
    "title": "Products Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/{id}.",
    "operationKey": "PRODUCTS_READ",
    "method": "GET",
    "routeTemplate": "/products/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_batch",
    "title": "Products Reviews Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/reviews/batch.",
    "operationKey": "PRODUCTS_REVIEWS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/reviews/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "product_id": {
                "description": "Unique identifier for the product that the review belongs to.",
                "type": "integer"
              },
              "product_name": {
                "description": "Product name.",
                "type": "string"
              },
              "rating": {
                "description": "Review rating (0 to 5).",
                "type": "integer"
              },
              "review": {
                "description": "The content of the review.",
                "type": "string"
              },
              "reviewer": {
                "description": "Reviewer name.",
                "type": "string"
              },
              "reviewer_email": {
                "description": "Reviewer email.",
                "format": "email",
                "type": "string"
              },
              "status": {
                "description": "Status of the review.",
                "enum": [
                  "approved",
                  "hold",
                  "spam",
                  "unspam",
                  "trash",
                  "untrash"
                ],
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "integer"
              },
              "product_id": {
                "description": "Unique identifier for the product that the review belongs to.",
                "type": "integer"
              },
              "product_name": {
                "description": "Product name.",
                "type": "string"
              },
              "rating": {
                "description": "Review rating (0 to 5).",
                "type": "integer"
              },
              "review": {
                "description": "The content of the review.",
                "type": "string"
              },
              "reviewer": {
                "description": "Reviewer name.",
                "type": "string"
              },
              "reviewer_email": {
                "description": "Reviewer email.",
                "format": "email",
                "type": "string"
              },
              "status": {
                "description": "Status of the review.",
                "enum": [
                  "approved",
                  "hold",
                  "spam",
                  "unspam",
                  "trash",
                  "untrash"
                ],
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_batch_put_custom",
    "title": "Products Reviews Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/reviews/batch.",
    "operationKey": "PRODUCTS_REVIEWS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/reviews/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "description": "Unique identifier for the product that the review belongs to.",
          "type": "integer"
        },
        "product_name": {
          "description": "Product name.",
          "type": "string"
        },
        "rating": {
          "description": "Review rating (0 to 5).",
          "type": "integer"
        },
        "review": {
          "description": "The content of the review.",
          "type": "string"
        },
        "reviewer": {
          "description": "Reviewer name.",
          "type": "string"
        },
        "reviewer_email": {
          "description": "Reviewer email.",
          "format": "email",
          "type": "string"
        },
        "status": {
          "description": "Status of the review.",
          "enum": [
            "approved",
            "hold",
            "spam",
            "unspam",
            "trash",
            "untrash"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_create",
    "title": "Products Reviews Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/reviews.",
    "operationKey": "PRODUCTS_REVIEWS_CREATE",
    "method": "POST",
    "routeTemplate": "/products/reviews",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "description": "Unique identifier for the product.",
          "type": "integer"
        },
        "product_name": {
          "description": "Product name.",
          "type": "string"
        },
        "rating": {
          "description": "Review rating (0 to 5).",
          "type": "integer"
        },
        "review": {
          "description": "Review content.",
          "type": "string"
        },
        "reviewer": {
          "description": "Name of the reviewer.",
          "type": "string"
        },
        "reviewer_email": {
          "description": "Email of the reviewer.",
          "type": "string"
        },
        "status": {
          "default": "approved",
          "description": "Status of the review.",
          "enum": [
            "approved",
            "hold",
            "spam",
            "unspam",
            "trash",
            "untrash"
          ],
          "type": "string"
        }
      },
      "required": [
        "product_id",
        "review",
        "reviewer",
        "reviewer_email"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_delete",
    "title": "Products Reviews Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/reviews/{id}.",
    "operationKey": "PRODUCTS_REVIEWS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/reviews/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_id_post_custom",
    "title": "Products Reviews Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/reviews/{id}.",
    "operationKey": "PRODUCTS_REVIEWS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/reviews/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "description": "Unique identifier for the product that the review belongs to.",
          "type": "integer"
        },
        "product_name": {
          "description": "Product name.",
          "type": "string"
        },
        "rating": {
          "description": "Review rating (0 to 5).",
          "type": "integer"
        },
        "review": {
          "description": "The content of the review.",
          "type": "string"
        },
        "reviewer": {
          "description": "Reviewer name.",
          "type": "string"
        },
        "reviewer_email": {
          "description": "Reviewer email.",
          "format": "email",
          "type": "string"
        },
        "status": {
          "description": "Status of the review.",
          "enum": [
            "approved",
            "hold",
            "spam",
            "unspam",
            "trash",
            "untrash"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_list",
    "title": "Products Reviews List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/reviews.",
    "operationKey": "PRODUCTS_REVIEWS_LIST",
    "method": "GET",
    "routeTemplate": "/products/reviews",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to reviews published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date_gmt",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "date_gmt",
            "id",
            "include",
            "product"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": [],
          "description": "Limit result set to reviews assigned to specific product IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "reviewer": {
          "description": "Limit result set to reviews assigned to specific user IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "reviewer_email": {
          "default": null,
          "description": "Limit result set to that from a specific author email.",
          "format": "email",
          "type": "string"
        },
        "reviewer_exclude": {
          "description": "Ensure result set excludes reviews assigned to specific user IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "status": {
          "default": "approved",
          "description": "Limit result set to reviews assigned a specific status.",
          "enum": [
            "all",
            "hold",
            "approved",
            "spam",
            "trash"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_read",
    "title": "Products Reviews Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/reviews/{id}.",
    "operationKey": "PRODUCTS_REVIEWS_READ",
    "method": "GET",
    "routeTemplate": "/products/reviews/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_reviews_update",
    "title": "Products Reviews Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/reviews/{id}.",
    "operationKey": "PRODUCTS_REVIEWS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/reviews/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "description": "Unique identifier for the product that the review belongs to.",
          "type": "integer"
        },
        "product_name": {
          "description": "Product name.",
          "type": "string"
        },
        "rating": {
          "description": "Review rating (0 to 5).",
          "type": "integer"
        },
        "review": {
          "description": "The content of the review.",
          "type": "string"
        },
        "reviewer": {
          "description": "Reviewer name.",
          "type": "string"
        },
        "reviewer_email": {
          "description": "Reviewer email.",
          "format": "email",
          "type": "string"
        },
        "status": {
          "description": "Status of the review.",
          "enum": [
            "approved",
            "hold",
            "spam",
            "unspam",
            "trash",
            "untrash"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_batch",
    "title": "Products Shipping Classes Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/shipping_classes/batch.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_BATCH",
    "method": "POST",
    "routeTemplate": "/products/shipping_classes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "name": {
                "description": "Shipping class name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "name": {
                "description": "Shipping class name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_batch_put_custom",
    "title": "Products Shipping Classes Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/shipping_classes/batch.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/shipping_classes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Shipping class name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_create",
    "title": "Products Shipping Classes Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/shipping_classes.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_CREATE",
    "method": "POST",
    "routeTemplate": "/products/shipping_classes",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_delete",
    "title": "Products Shipping Classes Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/shipping_classes/{id}.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/shipping_classes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_id_post_custom",
    "title": "Products Shipping Classes Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/shipping_classes/{id}.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/shipping_classes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Shipping class name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_list",
    "title": "Products Shipping Classes List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/shipping_classes.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_LIST",
    "method": "GET",
    "routeTemplate": "/products/shipping_classes",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "hide_empty": {
          "default": false,
          "description": "Whether to hide resources not assigned to any products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by resource attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "slug",
            "term_group",
            "description",
            "count"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "description": "Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": null,
          "description": "Limit result set to resources assigned to a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to resources with a specific slug.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_read",
    "title": "Products Shipping Classes Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/shipping_classes/{id}.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_READ",
    "method": "GET",
    "routeTemplate": "/products/shipping_classes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_slug-suggestion_list",
    "title": "Products Shipping Classes Slug-suggestion List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/shipping_classes/slug-suggestion.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_SLUG-SUGGESTION_LIST",
    "method": "GET",
    "routeTemplate": "/products/shipping_classes/slug-suggestion",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Shipping class name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_shipping_classes_update",
    "title": "Products Shipping Classes Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/shipping_classes/{id}.",
    "operationKey": "PRODUCTS_SHIPPING_CLASSES_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/shipping_classes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Shipping class name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_suggested-products_list",
    "title": "Products Suggested-products List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/suggested-products.",
    "operationKey": "PRODUCTS_SUGGESTED-PRODUCTS_LIST",
    "method": "GET",
    "routeTemplate": "/products/suggested-products",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "attribute": {
          "description": "Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug.",
          "type": "string"
        },
        "attribute_term": {
          "description": "Limit result set to products with a specific attribute term ID (required an assigned attribute).",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "brand": {
          "description": "Limit result set to products assigned a specific brand ID.",
          "type": "string"
        },
        "categories": {
          "default": [],
          "description": "Limit result set to specific product categorie ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "category": {
          "description": "Limit result set to products assigned a specific category ID.",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "featured": {
          "description": "Limit result set to featured products.",
          "type": "boolean"
        },
        "in_stock": {
          "description": "Limit result set to products in stock or out of stock.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "limit": {
          "default": 5,
          "description": "Limit result set to specific amount of suggested products.",
          "type": "integer"
        },
        "max_price": {
          "description": "Limit result set to products based on a maximum price.",
          "type": "string"
        },
        "min_price": {
          "description": "Limit result set to products based on a minimum price.",
          "type": "string"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "on_sale": {
          "description": "Limit result set to products on sale.",
          "type": "boolean"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified",
            "popularity",
            "rating",
            "post__in",
            "price",
            "sales",
            "menu_order",
            "random",
            "popularity",
            "rating",
            "menu_order"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Limit result set to products assigned a specific shipping class ID.",
          "type": "string"
        },
        "sku": {
          "description": "Limit result set to products with specific SKU(s). Use commas to separate.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to products with a specific slug.",
          "type": "string"
        },
        "status": {
          "default": "any",
          "description": "Limit result set to products assigned a specific status.",
          "enum": [
            "any",
            "future",
            "trash",
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "tag": {
          "description": "Limit result set to products assigned a specific tag ID.",
          "type": "string"
        },
        "tags": {
          "default": [],
          "description": "Limit result set to specific product tag ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "type": {
          "description": "Limit result set to products assigned a specific type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_batch",
    "title": "Products Tags Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/tags/batch.",
    "operationKey": "PRODUCTS_TAGS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/tags/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "name": {
                "description": "Tag name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "description": {
                "description": "HTML description of the resource.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "name": {
                "description": "Tag name.",
                "type": "string"
              },
              "slug": {
                "description": "An alphanumeric identifier for the resource unique to its type.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_batch_put_custom",
    "title": "Products Tags Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/tags/batch.",
    "operationKey": "PRODUCTS_TAGS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/products/tags/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Tag name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_create",
    "title": "Products Tags Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/tags.",
    "operationKey": "PRODUCTS_TAGS_CREATE",
    "method": "POST",
    "routeTemplate": "/products/tags",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Name for the resource.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_delete",
    "title": "Products Tags Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/tags/{id}.",
    "operationKey": "PRODUCTS_TAGS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/tags/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_id_post_custom",
    "title": "Products Tags Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/tags/{id}.",
    "operationKey": "PRODUCTS_TAGS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/products/tags/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Tag name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_list",
    "title": "Products Tags List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/tags.",
    "operationKey": "PRODUCTS_TAGS_LIST",
    "method": "GET",
    "routeTemplate": "/products/tags",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "hide_empty": {
          "default": false,
          "description": "Whether to hide resources not assigned to any products.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "name",
          "description": "Sort collection by resource attribute.",
          "enum": [
            "id",
            "include",
            "name",
            "slug",
            "term_group",
            "description",
            "count"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "description": "Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.",
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "product": {
          "default": null,
          "description": "Limit result set to resources assigned to a specific product.",
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to resources with a specific slug.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_read",
    "title": "Products Tags Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/tags/{id}.",
    "operationKey": "PRODUCTS_TAGS_READ",
    "method": "GET",
    "routeTemplate": "/products/tags/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_tags_update",
    "title": "Products Tags Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/tags/{id}.",
    "operationKey": "PRODUCTS_TAGS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/tags/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "description": "HTML description of the resource.",
          "type": "string"
        },
        "name": {
          "description": "Tag name.",
          "type": "string"
        },
        "slug": {
          "description": "An alphanumeric identifier for the resource unique to its type.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_update",
    "title": "Products Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/{id}.",
    "operationKey": "PRODUCTS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "options": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "List of available term names of the attribute.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "position": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute position.",
                "type": "integer"
              },
              "variation": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute can be used as variation.",
                "type": "boolean"
              },
              "visible": {
                "context": [
                  "view",
                  "edit"
                ],
                "default": false,
                "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "brands": {
          "description": "List of brands.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Brand slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "button_text": {
          "description": "Product external button text. Only for external products.",
          "type": "string"
        },
        "catalog_visibility": {
          "description": "Catalog visibility.",
          "enum": [
            "visible",
            "catalog",
            "search",
            "hidden"
          ],
          "type": "string"
        },
        "categories": {
          "description": "List of categories.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Category slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "cross_sell_ids": {
          "description": "List of cross-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "date_created": {
          "description": "The date the product was created, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_created_gmt": {
          "description": "The date the product was created, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_attributes": {
          "description": "Defaults variation attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "description": {
          "description": "Product description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Product dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Product width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the product is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "external_url": {
          "description": "Product external URL. Only for external products.",
          "format": "uri",
          "type": "string"
        },
        "featured": {
          "description": "Featured product.",
          "type": "boolean"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "images": {
          "description": "List of images.",
          "items": {
            "properties": {
              "alt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image alternative text.",
                "type": "string"
              },
              "date_created": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_created_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was created, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, in the site's timezone.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_modified_gmt": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "The date the image was last modified, as GMT.",
                "readonly": true,
                "type": [
                  "null",
                  "string"
                ]
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image name.",
                "type": "string"
              },
              "src": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Image URL.",
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the product.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at product level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "name": {
          "description": "Product name.",
          "type": "string"
        },
        "parent_id": {
          "description": "Product parent ID.",
          "type": "integer"
        },
        "post_password": {
          "description": "Post password.",
          "type": "string"
        },
        "purchase_note": {
          "description": "Optional note to send the customer after purchase.",
          "type": "string"
        },
        "regular_price": {
          "description": "Product regular price.",
          "type": "string"
        },
        "reviews_allowed": {
          "description": "Allow reviews.",
          "type": "boolean"
        },
        "sale_price": {
          "description": "Product sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "short_description": {
          "description": "Product short description.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "slug": {
          "description": "Product slug.",
          "type": "string"
        },
        "sold_individually": {
          "description": "Allow one item to be bought in a single order.",
          "type": "boolean"
        },
        "status": {
          "description": "Product status (post status).",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish",
            "future",
            "auto-draft",
            "trash"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tags": {
          "description": "List of tags.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag name.",
                "readonly": true,
                "type": "string"
              },
              "slug": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Tag slug.",
                "readonly": true,
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "type": {
          "description": "Product type.",
          "enum": [
            "simple",
            "grouped",
            "external",
            "variable"
          ],
          "type": "string"
        },
        "upsell_ids": {
          "description": "List of up-sell products IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "virtual": {
          "description": "If the product is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Product weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "post_password"
    ]
  },
  {
    "toolName": "wc.v3.products_variations_batch",
    "title": "Products Variations Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{product_id}/variations/batch.",
    "operationKey": "PRODUCTS_VARIATIONS_BATCH",
    "method": "POST",
    "routeTemplate": "/products/{product_id}/variations/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "attributes": {
                "description": "List of attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "option": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Selected attribute term name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "backorders": {
                "description": "If managing stock, this controls if backorders are allowed.",
                "enum": [
                  "no",
                  "notify",
                  "yes"
                ],
                "type": "string"
              },
              "date_on_sale_from": {
                "description": "Start date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from_gmt": {
                "description": "Start date of sale price, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to_gmt": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "description": {
                "description": "Variation description.",
                "type": "string"
              },
              "dimensions": {
                "description": "Variation dimensions.",
                "properties": {
                  "height": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation height (in).",
                    "type": "string"
                  },
                  "length": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation length (in).",
                    "type": "string"
                  },
                  "width": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation width (in).",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "download_expiry": {
                "description": "Number of days until access to downloadable files expires.",
                "type": "integer"
              },
              "download_limit": {
                "description": "Number of times downloadable files can be downloaded after purchase.",
                "type": "integer"
              },
              "downloadable": {
                "description": "If the variation is downloadable.",
                "type": "boolean"
              },
              "downloads": {
                "description": "List of downloadable files.",
                "items": {
                  "properties": {
                    "file": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File URL.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File ID.",
                      "type": "string"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "global_unique_id": {
                "description": "GTIN, UPC, EAN or ISBN.",
                "type": "string"
              },
              "image": {
                "description": "Variation image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "low_stock_amount": {
                "description": "Low Stock amount for the variation.",
                "type": [
                  "integer",
                  "null"
                ]
              },
              "manage_stock": {
                "description": "Stock management at variation level.",
                "type": "boolean"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort products.",
                "type": "integer"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "regular_price": {
                "description": "Variation regular price.",
                "type": "string"
              },
              "sale_price": {
                "description": "Variation sale price.",
                "type": "string"
              },
              "shipping_class": {
                "description": "Shipping class slug.",
                "type": "string"
              },
              "sku": {
                "description": "Stock Keeping Unit.",
                "type": "string"
              },
              "status": {
                "description": "Variation status.",
                "enum": [
                  "draft",
                  "pending",
                  "private",
                  "publish"
                ],
                "type": "string"
              },
              "stock_quantity": {
                "description": "Stock quantity.",
                "type": "integer"
              },
              "stock_status": {
                "description": "Controls the stock status of the product.",
                "enum": [
                  "instock",
                  "outofstock",
                  "onbackorder"
                ],
                "type": "string"
              },
              "tax_class": {
                "description": "Tax class.",
                "type": "string"
              },
              "tax_status": {
                "description": "Tax status.",
                "enum": [
                  "taxable",
                  "shipping",
                  "none"
                ],
                "type": "string"
              },
              "virtual": {
                "description": "If the variation is virtual.",
                "type": "boolean"
              },
              "weight": {
                "description": "Variation weight (lbs).",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "attributes": {
                "description": "List of attributes.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute ID.",
                      "type": "integer"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Attribute name.",
                      "type": "string"
                    },
                    "option": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Selected attribute term name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "backorders": {
                "description": "If managing stock, this controls if backorders are allowed.",
                "enum": [
                  "no",
                  "notify",
                  "yes"
                ],
                "type": "string"
              },
              "date_on_sale_from": {
                "description": "Start date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_from_gmt": {
                "description": "Start date of sale price, as GMT.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "date_on_sale_to_gmt": {
                "description": "End date of sale price, in the site's timezone.",
                "type": [
                  "null",
                  "string"
                ]
              },
              "description": {
                "description": "Variation description.",
                "type": "string"
              },
              "dimensions": {
                "description": "Variation dimensions.",
                "properties": {
                  "height": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation height (in).",
                    "type": "string"
                  },
                  "length": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation length (in).",
                    "type": "string"
                  },
                  "width": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Variation width (in).",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "download_expiry": {
                "description": "Number of days until access to downloadable files expires.",
                "type": "integer"
              },
              "download_limit": {
                "description": "Number of times downloadable files can be downloaded after purchase.",
                "type": "integer"
              },
              "downloadable": {
                "description": "If the variation is downloadable.",
                "type": "boolean"
              },
              "downloads": {
                "description": "List of downloadable files.",
                "items": {
                  "properties": {
                    "file": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File URL.",
                      "type": "string"
                    },
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File ID.",
                      "type": "string"
                    },
                    "name": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "File name.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "global_unique_id": {
                "description": "GTIN, UPC, EAN or ISBN.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "image": {
                "description": "Variation image data.",
                "properties": {
                  "alt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image alternative text.",
                    "type": "string"
                  },
                  "date_created": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_created_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was created, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, in the site's timezone.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "date_modified_gmt": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "The date the image was last modified, as GMT.",
                    "readonly": true,
                    "type": [
                      "null",
                      "string"
                    ]
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image name.",
                    "type": "string"
                  },
                  "src": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Image URL.",
                    "format": "uri",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "low_stock_amount": {
                "description": "Low Stock amount for the variation.",
                "type": [
                  "integer",
                  "null"
                ]
              },
              "manage_stock": {
                "description": "Stock management at variation level.",
                "type": "boolean"
              },
              "menu_order": {
                "description": "Menu order, used to custom sort products.",
                "type": "integer"
              },
              "meta_data": {
                "description": "Meta data.",
                "items": {
                  "properties": {
                    "id": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta ID.",
                      "readonly": true,
                      "type": "integer"
                    },
                    "key": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta key.",
                      "type": "string"
                    },
                    "value": {
                      "context": [
                        "view",
                        "edit"
                      ],
                      "description": "Meta value.",
                      "type": [
                        "null",
                        "object",
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                      ]
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "regular_price": {
                "description": "Variation regular price.",
                "type": "string"
              },
              "sale_price": {
                "description": "Variation sale price.",
                "type": "string"
              },
              "shipping_class": {
                "description": "Shipping class slug.",
                "type": "string"
              },
              "sku": {
                "description": "Stock Keeping Unit.",
                "type": "string"
              },
              "status": {
                "description": "Variation status.",
                "enum": [
                  "draft",
                  "pending",
                  "private",
                  "publish"
                ],
                "type": "string"
              },
              "stock_quantity": {
                "description": "Stock quantity.",
                "type": "integer"
              },
              "stock_status": {
                "description": "Controls the stock status of the product.",
                "enum": [
                  "instock",
                  "outofstock",
                  "onbackorder"
                ],
                "type": "string"
              },
              "tax_class": {
                "description": "Tax class.",
                "type": "string"
              },
              "tax_status": {
                "description": "Tax status.",
                "enum": [
                  "taxable",
                  "shipping",
                  "none"
                ],
                "type": "string"
              },
              "virtual": {
                "description": "If the variation is virtual.",
                "type": "boolean"
              },
              "weight": {
                "description": "Variation weight (lbs).",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_create",
    "title": "Products Variations Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{product_id}/variations.",
    "operationKey": "PRODUCTS_VARIATIONS_CREATE",
    "method": "POST",
    "routeTemplate": "/products/{product_id}/variations",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "default": "no",
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Variation description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Variation dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "default": -1,
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "default": -1,
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "default": false,
          "description": "If the variation is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "image": {
          "description": "Variation image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the variation.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "default": false,
          "description": "Stock management at variation level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "regular_price": {
          "description": "Variation regular price.",
          "type": "string"
        },
        "sale_price": {
          "description": "Variation sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "status": {
          "default": "publish",
          "description": "Variation status.",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "default": "instock",
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "default": "taxable",
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "virtual": {
          "default": false,
          "description": "If the variation is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Variation weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_delete",
    "title": "Products Variations Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /products/{product_id}/variations/{id}.",
    "operationKey": "PRODUCTS_VARIATIONS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/products/{product_id}/variations/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_generate_create",
    "title": "Products Variations Generate Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /products/{product_id}/variations/generate.",
    "operationKey": "PRODUCTS_VARIATIONS_GENERATE_CREATE",
    "method": "POST",
    "routeTemplate": "/products/{product_id}/variations/generate",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "default": "no",
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "default_values": {
          "description": "Default values for generated variations.",
          "properties": {
            "attributes": {
              "description": "List of attributes.",
              "items": {
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Attribute ID.",
                    "type": "integer"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Attribute name.",
                    "type": "string"
                  },
                  "option": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Selected attribute term name.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "array",
              "validate_callback": "rest_validate_request_arg"
            },
            "backorders": {
              "description": "If managing stock, this controls if backorders are allowed.",
              "enum": [
                "no",
                "notify",
                "yes"
              ],
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "date_on_sale_from": {
              "description": "Start date of sale price, in the site's timezone.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": [
                "null",
                "string"
              ],
              "validate_callback": "rest_validate_request_arg"
            },
            "date_on_sale_from_gmt": {
              "description": "Start date of sale price, as GMT.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": [
                "null",
                "string"
              ],
              "validate_callback": "rest_validate_request_arg"
            },
            "date_on_sale_to": {
              "description": "End date of sale price, in the site's timezone.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": [
                "null",
                "string"
              ],
              "validate_callback": "rest_validate_request_arg"
            },
            "date_on_sale_to_gmt": {
              "description": "End date of sale price, in the site's timezone.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": [
                "null",
                "string"
              ],
              "validate_callback": "rest_validate_request_arg"
            },
            "description": {
              "description": "Variation description.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "dimensions": {
              "description": "Variation dimensions.",
              "properties": {
                "height": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Variation height (in).",
                  "type": "string"
                },
                "length": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Variation length (in).",
                  "type": "string"
                },
                "width": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Variation width (in).",
                  "type": "string"
                }
              },
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "object",
              "validate_callback": "rest_validate_request_arg"
            },
            "download_expiry": {
              "description": "Number of days until access to downloadable files expires.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "integer",
              "validate_callback": "rest_validate_request_arg"
            },
            "download_limit": {
              "description": "Number of times downloadable files can be downloaded after purchase.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "integer",
              "validate_callback": "rest_validate_request_arg"
            },
            "downloadable": {
              "description": "If the variation is downloadable.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "boolean",
              "validate_callback": "rest_validate_request_arg"
            },
            "downloads": {
              "description": "List of downloadable files.",
              "items": {
                "properties": {
                  "file": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "File URL.",
                    "type": "string"
                  },
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "File ID.",
                    "type": "string"
                  },
                  "name": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "File name.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "array",
              "validate_callback": "rest_validate_request_arg"
            },
            "global_unique_id": {
              "description": "GTIN, UPC, EAN or ISBN.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "image": {
              "description": "Variation image data.",
              "properties": {
                "alt": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Image alternative text.",
                  "type": "string"
                },
                "date_created": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "The date the image was created, in the site's timezone.",
                  "readonly": true,
                  "type": [
                    "null",
                    "string"
                  ]
                },
                "date_created_gmt": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "The date the image was created, as GMT.",
                  "readonly": true,
                  "type": [
                    "null",
                    "string"
                  ]
                },
                "date_modified": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "The date the image was last modified, in the site's timezone.",
                  "readonly": true,
                  "type": [
                    "null",
                    "string"
                  ]
                },
                "date_modified_gmt": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "The date the image was last modified, as GMT.",
                  "readonly": true,
                  "type": [
                    "null",
                    "string"
                  ]
                },
                "id": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Image ID.",
                  "type": "integer"
                },
                "name": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Image name.",
                  "type": "string"
                },
                "src": {
                  "context": [
                    "view",
                    "edit"
                  ],
                  "description": "Image URL.",
                  "format": "uri",
                  "type": "string"
                }
              },
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "object",
              "validate_callback": "rest_validate_request_arg"
            },
            "low_stock_amount": {
              "description": "Low Stock amount for the variation.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": [
                "integer",
                "null"
              ],
              "validate_callback": "rest_validate_request_arg"
            },
            "manage_stock": {
              "description": "Stock management at variation level.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "boolean",
              "validate_callback": "rest_validate_request_arg"
            },
            "menu_order": {
              "description": "Menu order, used to custom sort products.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "integer",
              "validate_callback": "rest_validate_request_arg"
            },
            "meta_data": {
              "description": "Meta data.",
              "items": {
                "properties": {
                  "id": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Meta ID.",
                    "readonly": true,
                    "type": "integer"
                  },
                  "key": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Meta key.",
                    "type": "string"
                  },
                  "value": {
                    "context": [
                      "view",
                      "edit"
                    ],
                    "description": "Meta value.",
                    "type": [
                      "null",
                      "object",
                      "string",
                      "number",
                      "boolean",
                      "integer",
                      "array"
                    ]
                  }
                },
                "type": "object"
              },
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "array",
              "validate_callback": "rest_validate_request_arg"
            },
            "regular_price": {
              "description": "Variation regular price.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "sale_price": {
              "description": "Variation sale price.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "shipping_class": {
              "description": "Shipping class slug.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "sku": {
              "description": "Stock Keeping Unit.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "status": {
              "description": "Variation status.",
              "enum": [
                "draft",
                "pending",
                "private",
                "publish"
              ],
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "stock_quantity": {
              "description": "Stock quantity.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "integer",
              "validate_callback": "rest_validate_request_arg"
            },
            "stock_status": {
              "description": "Controls the stock status of the product.",
              "enum": [
                "instock",
                "outofstock",
                "onbackorder"
              ],
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "tax_class": {
              "description": "Tax class.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "tax_status": {
              "description": "Tax status.",
              "enum": [
                "taxable",
                "shipping",
                "none"
              ],
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            },
            "virtual": {
              "description": "If the variation is virtual.",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "boolean",
              "validate_callback": "rest_validate_request_arg"
            },
            "weight": {
              "description": "Variation weight (lbs).",
              "sanitize_callback": "rest_sanitize_request_arg",
              "type": "string",
              "validate_callback": "rest_validate_request_arg"
            }
          },
          "type": "object"
        },
        "delete": {
          "description": "Deletes unused variations.",
          "type": "boolean"
        },
        "description": {
          "description": "Variation description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Variation dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "default": -1,
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "default": -1,
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "default": false,
          "description": "If the variation is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "image": {
          "description": "Variation image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the variation.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "default": false,
          "description": "Stock management at variation level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "regular_price": {
          "description": "Variation regular price.",
          "type": "string"
        },
        "sale_price": {
          "description": "Variation sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "status": {
          "default": "publish",
          "description": "Variation status.",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "default": "instock",
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "default": "taxable",
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "virtual": {
          "default": false,
          "description": "If the variation is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Variation weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_list",
    "title": "Products Variations List",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/{product_id}/variations.",
    "operationKey": "PRODUCTS_VARIATIONS_LIST",
    "method": "GET",
    "routeTemplate": "/products/{product_id}/variations",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "attributes": {
          "description": "Limit result set to products with specified attributes.",
          "items": {
            "properties": {
              "attribute": {
                "description": "Attribute slug.",
                "type": "string"
              },
              "term": {
                "description": "Attribute term.",
                "type": "string"
              },
              "terms": {
                "description": "Attribute terms.",
                "type": "array"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "downloadable": {
          "description": "Limit result set to downloadable product variations.",
          "type": "boolean"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "exclude_status": {
          "description": "Exclude product variations with any of the statuses from result set.",
          "items": {
            "enum": [
              "future",
              "trash",
              "draft",
              "pending",
              "private",
              "publish"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "has_price": {
          "description": "Limit result set to products with or without price.",
          "type": "boolean"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "include_status": {
          "description": "Limit result set to product variations with any of the statuses.",
          "items": {
            "enum": [
              "any",
              "future",
              "trash",
              "draft",
              "pending",
              "private",
              "publish"
            ],
            "type": "string"
          },
          "type": "array"
        },
        "max_price": {
          "description": "Limit result set to products based on a maximum price.",
          "type": "string"
        },
        "min_price": {
          "description": "Limit result set to products based on a minimum price.",
          "type": "string"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "on_sale": {
          "description": "Limit result set to products on sale.",
          "type": "boolean"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified",
            "menu_order"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "sku": {
          "description": "Limit result set to products with specific SKU(s). Use commas to separate.",
          "type": "string"
        },
        "slug": {
          "description": "Limit result set to products with a specific slug.",
          "type": "string"
        },
        "status": {
          "default": "any",
          "description": "Limit result set to products assigned a specific status.",
          "enum": [
            "any",
            "future",
            "trash",
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_status": {
          "description": "Limit result set to products with specified stock status.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "virtual": {
          "description": "Limit result set to virtual product variations.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_read",
    "title": "Products Variations Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /products/{product_id}/variations/{id}.",
    "operationKey": "PRODUCTS_VARIATIONS_READ",
    "method": "GET",
    "routeTemplate": "/products/{product_id}/variations/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.products_variations_update",
    "title": "Products Variations Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /products/{product_id}/variations/{id}.",
    "operationKey": "PRODUCTS_VARIATIONS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/products/{product_id}/variations/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        },
        "product_id": {
          "type": "integer"
        }
      },
      "required": [
        "product_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "description": "List of attributes.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute ID.",
                "type": "integer"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Attribute name.",
                "type": "string"
              },
              "option": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Selected attribute term name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "backorders": {
          "description": "If managing stock, this controls if backorders are allowed.",
          "enum": [
            "no",
            "notify",
            "yes"
          ],
          "type": "string"
        },
        "date_on_sale_from": {
          "description": "Start date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_from_gmt": {
          "description": "Start date of sale price, as GMT.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "date_on_sale_to_gmt": {
          "description": "End date of sale price, in the site's timezone.",
          "type": [
            "null",
            "string"
          ]
        },
        "description": {
          "description": "Variation description.",
          "type": "string"
        },
        "dimensions": {
          "description": "Variation dimensions.",
          "properties": {
            "height": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation height (in).",
              "type": "string"
            },
            "length": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation length (in).",
              "type": "string"
            },
            "width": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Variation width (in).",
              "type": "string"
            }
          },
          "type": "object"
        },
        "download_expiry": {
          "description": "Number of days until access to downloadable files expires.",
          "type": "integer"
        },
        "download_limit": {
          "description": "Number of times downloadable files can be downloaded after purchase.",
          "type": "integer"
        },
        "downloadable": {
          "description": "If the variation is downloadable.",
          "type": "boolean"
        },
        "downloads": {
          "description": "List of downloadable files.",
          "items": {
            "properties": {
              "file": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File URL.",
                "type": "string"
              },
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File ID.",
                "type": "string"
              },
              "name": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "File name.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "global_unique_id": {
          "description": "GTIN, UPC, EAN or ISBN.",
          "type": "string"
        },
        "image": {
          "description": "Variation image data.",
          "properties": {
            "alt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image alternative text.",
              "type": "string"
            },
            "date_created": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_created_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was created, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, in the site's timezone.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "date_modified_gmt": {
              "context": [
                "view",
                "edit"
              ],
              "description": "The date the image was last modified, as GMT.",
              "readonly": true,
              "type": [
                "null",
                "string"
              ]
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image ID.",
              "type": "integer"
            },
            "name": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image name.",
              "type": "string"
            },
            "src": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Image URL.",
              "format": "uri",
              "type": "string"
            }
          },
          "type": "object"
        },
        "low_stock_amount": {
          "description": "Low Stock amount for the variation.",
          "type": [
            "integer",
            "null"
          ]
        },
        "manage_stock": {
          "description": "Stock management at variation level.",
          "type": "boolean"
        },
        "menu_order": {
          "description": "Menu order, used to custom sort products.",
          "type": "integer"
        },
        "meta_data": {
          "description": "Meta data.",
          "items": {
            "properties": {
              "id": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta ID.",
                "readonly": true,
                "type": "integer"
              },
              "key": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta key.",
                "type": "string"
              },
              "value": {
                "context": [
                  "view",
                  "edit"
                ],
                "description": "Meta value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "regular_price": {
          "description": "Variation regular price.",
          "type": "string"
        },
        "sale_price": {
          "description": "Variation sale price.",
          "type": "string"
        },
        "shipping_class": {
          "description": "Shipping class slug.",
          "type": "string"
        },
        "sku": {
          "description": "Stock Keeping Unit.",
          "type": "string"
        },
        "status": {
          "description": "Variation status.",
          "enum": [
            "draft",
            "pending",
            "private",
            "publish"
          ],
          "type": "string"
        },
        "stock_quantity": {
          "description": "Stock quantity.",
          "type": "integer"
        },
        "stock_status": {
          "description": "Controls the stock status of the product.",
          "enum": [
            "instock",
            "outofstock",
            "onbackorder"
          ],
          "type": "string"
        },
        "tax_class": {
          "description": "Tax class.",
          "type": "string"
        },
        "tax_status": {
          "description": "Tax status.",
          "enum": [
            "taxable",
            "shipping",
            "none"
          ],
          "type": "string"
        },
        "virtual": {
          "description": "If the variation is virtual.",
          "type": "boolean"
        },
        "weight": {
          "description": "Variation weight (lbs).",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.refunds_list",
    "title": "Refunds List",
    "description": "Generated WooCommerce wc.v3 operation for GET /refunds.",
    "operationKey": "REFUNDS_LIST",
    "method": "GET",
    "routeTemplate": "/refunds",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "dates_are_gmt": {
          "default": false,
          "description": "Whether to consider GMT post dates when limiting response by published or modified date.",
          "type": "boolean"
        },
        "dp": {
          "default": 2,
          "description": "Number of decimal points to use in each resource.",
          "type": "integer"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "exclude_meta": {
          "default": [],
          "description": "Ensure meta_data excludes specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include_meta": {
          "default": [],
          "description": "Limit meta_data to specific keys.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "modified_after": {
          "description": "Limit response to resources modified after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "modified_before": {
          "description": "Limit response to resources modified before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "order_item_display_meta": {
          "default": false,
          "description": "Only show meta which is meant to be displayed for an order.",
          "type": "boolean"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "include",
            "title",
            "slug",
            "modified"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "parent": {
          "default": [],
          "description": "Limit result set to those of particular parent IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "parent_exclude": {
          "default": [],
          "description": "Limit result set to all items except those of a particular parent ID.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_coupons_totals_list",
    "title": "Reports Coupons Totals List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/coupons/totals.",
    "operationKey": "REPORTS_COUPONS_TOTALS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/coupons/totals",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_customers_totals_list",
    "title": "Reports Customers Totals List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/customers/totals.",
    "operationKey": "REPORTS_CUSTOMERS_TOTALS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/customers/totals",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_list",
    "title": "Reports List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports.",
    "operationKey": "REPORTS_LIST",
    "method": "GET",
    "routeTemplate": "/reports",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_orders_totals_list",
    "title": "Reports Orders Totals List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/orders/totals.",
    "operationKey": "REPORTS_ORDERS_TOTALS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/orders/totals",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_products_totals_list",
    "title": "Reports Products Totals List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/products/totals.",
    "operationKey": "REPORTS_PRODUCTS_TOTALS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/products/totals",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_reviews_totals_list",
    "title": "Reports Reviews Totals List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/reviews/totals.",
    "operationKey": "REPORTS_REVIEWS_TOTALS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/reviews/totals",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_sales_list",
    "title": "Reports Sales List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/sales.",
    "operationKey": "REPORTS_SALES_LIST",
    "method": "GET",
    "routeTemplate": "/reports/sales",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        },
        "date_max": {
          "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
          "format": "date",
          "type": "string"
        },
        "date_min": {
          "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
          "format": "date",
          "type": "string"
        },
        "period": {
          "description": "Report period.",
          "enum": [
            "week",
            "month",
            "last_month",
            "year"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.reports_top_sellers_list",
    "title": "Reports Top Sellers List",
    "description": "Generated WooCommerce wc.v3 operation for GET /reports/top_sellers.",
    "operationKey": "REPORTS_TOP_SELLERS_LIST",
    "method": "GET",
    "routeTemplate": "/reports/top_sellers",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        },
        "date_max": {
          "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
          "format": "date",
          "type": "string"
        },
        "date_min": {
          "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
          "format": "date",
          "type": "string"
        },
        "period": {
          "description": "Report period.",
          "enum": [
            "week",
            "month",
            "last_month",
            "year"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_group_id_batch",
    "title": "Settings Group Id Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /settings/{group_id}/batch.",
    "operationKey": "SETTINGS_GROUP_ID_BATCH",
    "method": "POST",
    "routeTemplate": "/settings/{group_id}/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "group": {
                "description": "Settings group ID.",
                "type": "string"
              },
              "value": {
                "description": "Setting value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "group": {
                "description": "Settings group ID.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "value": {
                "description": "Setting value.",
                "type": [
                  "null",
                  "object",
                  "string",
                  "number",
                  "boolean",
                  "integer",
                  "array"
                ]
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_batch",
    "title": "Settings Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /settings/batch.",
    "operationKey": "SETTINGS_BATCH",
    "method": "POST",
    "routeTemplate": "/settings/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {},
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "integer"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_batch_put_custom",
    "title": "Settings Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /settings/batch.",
    "operationKey": "SETTINGS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/settings/batch"
  },
  {
    "toolName": "wc.v3.settings_group_id_batch_put_custom",
    "title": "Settings Group Id Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /settings/{group_id}/batch.",
    "operationKey": "SETTINGS_GROUP_ID_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/settings/{group_id}/batch",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "group": {
          "description": "Settings group ID.",
          "type": "string"
        },
        "value": {
          "description": "Setting value.",
          "type": [
            "null",
            "object",
            "string",
            "number",
            "boolean",
            "integer",
            "array"
          ]
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_group_id_id_post_custom",
    "title": "Settings Group Id Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /settings/{group_id}/{id}.",
    "operationKey": "SETTINGS_GROUP_ID_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/settings/{group_id}/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        },
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "group": {
          "description": "Settings group ID.",
          "type": "string"
        },
        "value": {
          "description": "Setting value.",
          "type": [
            "null",
            "object",
            "string",
            "number",
            "boolean",
            "integer",
            "array"
          ]
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_list",
    "title": "Settings List",
    "description": "Generated WooCommerce wc.v3 operation for GET /settings.",
    "operationKey": "SETTINGS_LIST",
    "method": "GET",
    "routeTemplate": "/settings"
  },
  {
    "toolName": "wc.v3.settings_group_id_read",
    "title": "Settings Group Id Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /settings/{group_id}.",
    "operationKey": "SETTINGS_GROUP_ID_READ",
    "method": "GET",
    "routeTemplate": "/settings/{group_id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "group": {
          "description": "Settings group ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_group_id_id_read",
    "title": "Settings Group Id Id Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /settings/{group_id}/{id}.",
    "operationKey": "SETTINGS_GROUP_ID_ID_READ",
    "method": "GET",
    "routeTemplate": "/settings/{group_id}/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        },
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id",
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "group": {
          "description": "Settings group ID.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.settings_update",
    "title": "Settings Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /settings/{group_id}/{id}.",
    "operationKey": "SETTINGS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/settings/{group_id}/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "group_id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        },
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "group_id",
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "group": {
          "description": "Settings group ID.",
          "type": "string"
        },
        "value": {
          "description": "Setting value.",
          "type": [
            "null",
            "object",
            "string",
            "number",
            "boolean",
            "integer",
            "array"
          ]
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_methods_list",
    "title": "Shipping Methods List",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping_methods.",
    "operationKey": "SHIPPING_METHODS_LIST",
    "method": "GET",
    "routeTemplate": "/shipping_methods",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_methods_read",
    "title": "Shipping Methods Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping_methods/{id}.",
    "operationKey": "SHIPPING_METHODS_READ",
    "method": "GET",
    "routeTemplate": "/shipping_methods/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_create",
    "title": "Shipping Zones Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /shipping/zones.",
    "operationKey": "SHIPPING_ZONES_CREATE",
    "method": "POST",
    "routeTemplate": "/shipping/zones",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "Shipping zone name.",
          "type": "string"
        },
        "order": {
          "description": "Shipping zone order.",
          "type": "integer"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_delete",
    "title": "Shipping Zones Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /shipping/zones/{id}.",
    "operationKey": "SHIPPING_ZONES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/shipping/zones/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_id_locations_put_custom",
    "title": "Shipping Zones Id Locations Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /shipping/zones/{id}/locations.",
    "operationKey": "SHIPPING_ZONES_ID_LOCATIONS_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/shipping/zones/{id}/locations",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "code": {
          "description": "Shipping zone location code.",
          "type": "string"
        },
        "type": {
          "description": "Shipping zone location type.",
          "enum": [
            "postcode",
            "state",
            "country",
            "continent"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_id_post_custom",
    "title": "Shipping Zones Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /shipping/zones/{id}.",
    "operationKey": "SHIPPING_ZONES_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/shipping/zones/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "Shipping zone name.",
          "type": "string"
        },
        "order": {
          "description": "Shipping zone order.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_list",
    "title": "Shipping Zones List",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping/zones.",
    "operationKey": "SHIPPING_ZONES_LIST",
    "method": "GET",
    "routeTemplate": "/shipping/zones"
  },
  {
    "toolName": "wc.v3.shipping_zones_locations_create",
    "title": "Shipping Zones Locations Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /shipping/zones/{id}/locations.",
    "operationKey": "SHIPPING_ZONES_LOCATIONS_CREATE",
    "method": "POST",
    "routeTemplate": "/shipping/zones/{id}/locations",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "code": {
          "description": "Shipping zone location code.",
          "type": "string"
        },
        "type": {
          "description": "Shipping zone location type.",
          "enum": [
            "postcode",
            "state",
            "country",
            "continent"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_locations_list",
    "title": "Shipping Zones Locations List",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping/zones/{id}/locations.",
    "operationKey": "SHIPPING_ZONES_LOCATIONS_LIST",
    "method": "GET",
    "routeTemplate": "/shipping/zones/{id}/locations",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_methods_create",
    "title": "Shipping Zones Methods Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /shipping/zones/{zone_id}/methods.",
    "operationKey": "SHIPPING_ZONES_METHODS_CREATE",
    "method": "POST",
    "routeTemplate": "/shipping/zones/{zone_id}/methods",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "enabled": {
          "description": "Shipping method enabled status.",
          "type": "boolean"
        },
        "method_id": {
          "description": "Shipping method ID."
        },
        "order": {
          "description": "Shipping method sort order.",
          "type": "integer"
        },
        "settings": {
          "description": "Shipping method settings.",
          "properties": {
            "default": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Default value for the setting.",
              "readonly": true,
              "type": "string"
            },
            "description": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable description for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A unique identifier for the setting.",
              "readonly": true,
              "type": "string"
            },
            "label": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable label for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "placeholder": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Placeholder text to be displayed in text inputs.",
              "readonly": true,
              "type": "string"
            },
            "tip": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Additional help text shown to the user about the setting.",
              "readonly": true,
              "type": "string"
            },
            "type": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Type of setting.",
              "enum": [
                "text",
                "email",
                "number",
                "color",
                "password",
                "textarea",
                "select",
                "multiselect",
                "radio",
                "image_width",
                "checkbox",
                "class",
                "order"
              ],
              "readonly": true,
              "type": "string"
            },
            "value": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Setting value.",
              "type": "string"
            }
          },
          "type": "object"
        }
      },
      "required": [
        "method_id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_methods_delete",
    "title": "Shipping Zones Methods Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /shipping/zones/{zone_id}/methods/{instance_id}.",
    "operationKey": "SHIPPING_ZONES_METHODS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/shipping/zones/{zone_id}/methods/{instance_id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "instance_id": {
          "type": "integer"
        },
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id",
        "instance_id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Whether to bypass trash and force deletion.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_methods_list",
    "title": "Shipping Zones Methods List",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping/zones/{zone_id}/methods.",
    "operationKey": "SHIPPING_ZONES_METHODS_LIST",
    "method": "GET",
    "routeTemplate": "/shipping/zones/{zone_id}/methods",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_methods_read",
    "title": "Shipping Zones Methods Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping/zones/{zone_id}/methods/{instance_id}.",
    "operationKey": "SHIPPING_ZONES_METHODS_READ",
    "method": "GET",
    "routeTemplate": "/shipping/zones/{zone_id}/methods/{instance_id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "instance_id": {
          "type": "integer"
        },
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id",
        "instance_id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_methods_update",
    "title": "Shipping Zones Methods Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /shipping/zones/{zone_id}/methods/{instance_id}.",
    "operationKey": "SHIPPING_ZONES_METHODS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/shipping/zones/{zone_id}/methods/{instance_id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "instance_id": {
          "type": "integer"
        },
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id",
        "instance_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "enabled": {
          "description": "Shipping method enabled status.",
          "type": "boolean"
        },
        "order": {
          "description": "Shipping method sort order.",
          "type": "integer"
        },
        "settings": {
          "description": "Shipping method settings.",
          "properties": {
            "default": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Default value for the setting.",
              "readonly": true,
              "type": "string"
            },
            "description": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable description for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A unique identifier for the setting.",
              "readonly": true,
              "type": "string"
            },
            "label": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable label for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "placeholder": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Placeholder text to be displayed in text inputs.",
              "readonly": true,
              "type": "string"
            },
            "tip": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Additional help text shown to the user about the setting.",
              "readonly": true,
              "type": "string"
            },
            "type": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Type of setting.",
              "enum": [
                "text",
                "email",
                "number",
                "color",
                "password",
                "textarea",
                "select",
                "multiselect",
                "radio",
                "image_width",
                "checkbox",
                "class",
                "order"
              ],
              "readonly": true,
              "type": "string"
            },
            "value": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Setting value.",
              "type": "string"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_read",
    "title": "Shipping Zones Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /shipping/zones/{id}.",
    "operationKey": "SHIPPING_ZONES_READ",
    "method": "GET",
    "routeTemplate": "/shipping/zones/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_update",
    "title": "Shipping Zones Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /shipping/zones/{id}.",
    "operationKey": "SHIPPING_ZONES_UPDATE",
    "method": "PUT",
    "routeTemplate": "/shipping/zones/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "Shipping zone name.",
          "type": "string"
        },
        "order": {
          "description": "Shipping zone order.",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.shipping_zones_zone_id_methods_instance_id_post_custom",
    "title": "Shipping Zones Zone Id Methods Instance Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /shipping/zones/{zone_id}/methods/{instance_id}.",
    "operationKey": "SHIPPING_ZONES_ZONE_ID_METHODS_INSTANCE_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/shipping/zones/{zone_id}/methods/{instance_id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "instance_id": {
          "type": "integer"
        },
        "zone_id": {
          "type": "integer"
        }
      },
      "required": [
        "zone_id",
        "instance_id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "enabled": {
          "description": "Shipping method enabled status.",
          "type": "boolean"
        },
        "order": {
          "description": "Shipping method sort order.",
          "type": "integer"
        },
        "settings": {
          "description": "Shipping method settings.",
          "properties": {
            "default": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Default value for the setting.",
              "readonly": true,
              "type": "string"
            },
            "description": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable description for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "id": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A unique identifier for the setting.",
              "readonly": true,
              "type": "string"
            },
            "label": {
              "context": [
                "view",
                "edit"
              ],
              "description": "A human readable label for the setting used in interfaces.",
              "readonly": true,
              "type": "string"
            },
            "placeholder": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Placeholder text to be displayed in text inputs.",
              "readonly": true,
              "type": "string"
            },
            "tip": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Additional help text shown to the user about the setting.",
              "readonly": true,
              "type": "string"
            },
            "type": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Type of setting.",
              "enum": [
                "text",
                "email",
                "number",
                "color",
                "password",
                "textarea",
                "select",
                "multiselect",
                "radio",
                "image_width",
                "checkbox",
                "class",
                "order"
              ],
              "readonly": true,
              "type": "string"
            },
            "value": {
              "context": [
                "view",
                "edit"
              ],
              "description": "Setting value.",
              "type": "string"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.system_status_list",
    "title": "System Status List",
    "description": "Generated WooCommerce wc.v3 operation for GET /system_status.",
    "operationKey": "SYSTEM_STATUS_LIST",
    "method": "GET",
    "routeTemplate": "/system_status",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.system_status_tools_id_post_custom",
    "title": "System Status Tools Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /system_status/tools/{id}.",
    "operationKey": "SYSTEM_STATUS_TOOLS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/system_status/tools/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "action": {
          "description": "What running the tool will do.",
          "type": "string"
        },
        "description": {
          "description": "Tool description.",
          "type": "string"
        },
        "message": {
          "description": "Tool return message.",
          "type": "string"
        },
        "name": {
          "description": "Tool name.",
          "type": "string"
        },
        "success": {
          "description": "Did the tool run successfully?",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.system_status_tools_list",
    "title": "System Status Tools List",
    "description": "Generated WooCommerce wc.v3 operation for GET /system_status/tools.",
    "operationKey": "SYSTEM_STATUS_TOOLS_LIST",
    "method": "GET",
    "routeTemplate": "/system_status/tools",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.system_status_tools_read",
    "title": "System Status Tools Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /system_status/tools/{id}.",
    "operationKey": "SYSTEM_STATUS_TOOLS_READ",
    "method": "GET",
    "routeTemplate": "/system_status/tools/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.system_status_tools_update",
    "title": "System Status Tools Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /system_status/tools/{id}.",
    "operationKey": "SYSTEM_STATUS_TOOLS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/system_status/tools/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "pattern": "^[\\w-]+$",
          "type": "string"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "action": {
          "description": "What running the tool will do.",
          "type": "string"
        },
        "description": {
          "description": "Tool description.",
          "type": "string"
        },
        "message": {
          "description": "Tool return message.",
          "type": "string"
        },
        "name": {
          "description": "Tool name.",
          "type": "string"
        },
        "success": {
          "description": "Did the tool run successfully?",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_batch",
    "title": "Taxes Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /taxes/batch.",
    "operationKey": "TAXES_BATCH",
    "method": "POST",
    "routeTemplate": "/taxes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "cities": {
                "description": "List of city names. Introduced in WooCommerce 5.3.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "city": {
                "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
                "type": "string"
              },
              "class": {
                "description": "Tax class.",
                "enum": [
                  "standard",
                  "reduced-rate",
                  "zero-rate"
                ],
                "type": "string"
              },
              "compound": {
                "description": "Whether or not this is a compound rate.",
                "type": "boolean"
              },
              "country": {
                "description": "Country ISO 3166 code.",
                "type": "string"
              },
              "name": {
                "description": "Tax rate name.",
                "type": "string"
              },
              "order": {
                "description": "Indicates the order that will appear in queries.",
                "type": "integer"
              },
              "postcode": {
                "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
                "type": "string"
              },
              "postcodes": {
                "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "priority": {
                "description": "Tax priority.",
                "type": "integer"
              },
              "rate": {
                "description": "Tax rate.",
                "type": "string"
              },
              "shipping": {
                "description": "Whether or not this tax rate also gets applied to shipping.",
                "type": "boolean"
              },
              "state": {
                "description": "State code.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "cities": {
                "description": "List of city names. Introduced in WooCommerce 5.3.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "city": {
                "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
                "type": "string"
              },
              "class": {
                "description": "Tax class.",
                "enum": [
                  "standard",
                  "reduced-rate",
                  "zero-rate"
                ],
                "type": "string"
              },
              "compound": {
                "description": "Whether or not this is a compound rate.",
                "type": "boolean"
              },
              "country": {
                "description": "Country ISO 3166 code.",
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "name": {
                "description": "Tax rate name.",
                "type": "string"
              },
              "order": {
                "description": "Indicates the order that will appear in queries.",
                "type": "integer"
              },
              "postcode": {
                "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
                "type": "string"
              },
              "postcodes": {
                "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "priority": {
                "description": "Tax priority.",
                "type": "integer"
              },
              "rate": {
                "description": "Tax rate.",
                "type": "string"
              },
              "shipping": {
                "description": "Whether or not this tax rate also gets applied to shipping.",
                "type": "boolean"
              },
              "state": {
                "description": "State code.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_batch_put_custom",
    "title": "Taxes Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /taxes/batch.",
    "operationKey": "TAXES_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/taxes/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "cities": {
          "description": "List of city names. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "city": {
          "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
          "type": "string"
        },
        "class": {
          "description": "Tax class.",
          "enum": [
            "standard",
            "reduced-rate",
            "zero-rate"
          ],
          "type": "string"
        },
        "compound": {
          "description": "Whether or not this is a compound rate.",
          "type": "boolean"
        },
        "country": {
          "description": "Country ISO 3166 code.",
          "type": "string"
        },
        "name": {
          "description": "Tax rate name.",
          "type": "string"
        },
        "order": {
          "description": "Indicates the order that will appear in queries.",
          "type": "integer"
        },
        "postcode": {
          "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
          "type": "string"
        },
        "postcodes": {
          "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "priority": {
          "description": "Tax priority.",
          "type": "integer"
        },
        "rate": {
          "description": "Tax rate.",
          "type": "string"
        },
        "shipping": {
          "description": "Whether or not this tax rate also gets applied to shipping.",
          "type": "boolean"
        },
        "state": {
          "description": "State code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_classes_create",
    "title": "Taxes Classes Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /taxes/classes.",
    "operationKey": "TAXES_CLASSES_CREATE",
    "method": "POST",
    "routeTemplate": "/taxes/classes",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "Tax class name.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_classes_delete",
    "title": "Taxes Classes Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /taxes/classes/{slug}.",
    "operationKey": "TAXES_CLASSES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/taxes/classes/{slug}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "slug": {
          "pattern": "^\\w[\\w\\s\\-]*$",
          "type": "string"
        }
      },
      "required": [
        "slug"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_classes_list",
    "title": "Taxes Classes List",
    "description": "Generated WooCommerce wc.v3 operation for GET /taxes/classes.",
    "operationKey": "TAXES_CLASSES_LIST",
    "method": "GET",
    "routeTemplate": "/taxes/classes",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_classes_read",
    "title": "Taxes Classes Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /taxes/classes/{slug}.",
    "operationKey": "TAXES_CLASSES_READ",
    "method": "GET",
    "routeTemplate": "/taxes/classes/{slug}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "slug": {
          "pattern": "^\\w[\\w\\s\\-]*$",
          "type": "string"
        }
      },
      "required": [
        "slug"
      ],
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_create",
    "title": "Taxes Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /taxes.",
    "operationKey": "TAXES_CREATE",
    "method": "POST",
    "routeTemplate": "/taxes",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "cities": {
          "description": "List of city names. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "city": {
          "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
          "type": "string"
        },
        "class": {
          "default": "standard",
          "description": "Tax class.",
          "enum": [
            "standard",
            "reduced-rate",
            "zero-rate"
          ],
          "type": "string"
        },
        "compound": {
          "default": false,
          "description": "Whether or not this is a compound rate.",
          "type": "boolean"
        },
        "country": {
          "description": "Country ISO 3166 code.",
          "type": "string"
        },
        "name": {
          "description": "Tax rate name.",
          "type": "string"
        },
        "order": {
          "description": "Indicates the order that will appear in queries.",
          "type": "integer"
        },
        "postcode": {
          "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
          "type": "string"
        },
        "postcodes": {
          "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "priority": {
          "default": 1,
          "description": "Tax priority.",
          "type": "integer"
        },
        "rate": {
          "description": "Tax rate.",
          "type": "string"
        },
        "shipping": {
          "default": true,
          "description": "Whether or not this tax rate also gets applied to shipping.",
          "type": "boolean"
        },
        "state": {
          "description": "State code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_delete",
    "title": "Taxes Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /taxes/{id}.",
    "operationKey": "TAXES_DELETE",
    "method": "DELETE",
    "routeTemplate": "/taxes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_id_post_custom",
    "title": "Taxes Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /taxes/{id}.",
    "operationKey": "TAXES_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/taxes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "cities": {
          "description": "List of city names. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "city": {
          "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
          "type": "string"
        },
        "class": {
          "description": "Tax class.",
          "enum": [
            "standard",
            "reduced-rate",
            "zero-rate"
          ],
          "type": "string"
        },
        "compound": {
          "description": "Whether or not this is a compound rate.",
          "type": "boolean"
        },
        "country": {
          "description": "Country ISO 3166 code.",
          "type": "string"
        },
        "name": {
          "description": "Tax rate name.",
          "type": "string"
        },
        "order": {
          "description": "Indicates the order that will appear in queries.",
          "type": "integer"
        },
        "postcode": {
          "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
          "type": "string"
        },
        "postcodes": {
          "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "priority": {
          "description": "Tax priority.",
          "type": "integer"
        },
        "rate": {
          "description": "Tax rate.",
          "type": "string"
        },
        "shipping": {
          "description": "Whether or not this tax rate also gets applied to shipping.",
          "type": "boolean"
        },
        "state": {
          "description": "State code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_list",
    "title": "Taxes List",
    "description": "Generated WooCommerce wc.v3 operation for GET /taxes.",
    "operationKey": "TAXES_LIST",
    "method": "GET",
    "routeTemplate": "/taxes",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "class": {
          "description": "Sort by tax class.",
          "enum": [
            "standard",
            "reduced-rate",
            "zero-rate"
          ],
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "asc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "order",
          "description": "Sort collection by object attribute.",
          "enum": [
            "id",
            "order",
            "priority"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_read",
    "title": "Taxes Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /taxes/{id}.",
    "operationKey": "TAXES_READ",
    "method": "GET",
    "routeTemplate": "/taxes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.taxes_update",
    "title": "Taxes Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /taxes/{id}.",
    "operationKey": "TAXES_UPDATE",
    "method": "PUT",
    "routeTemplate": "/taxes/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "cities": {
          "description": "List of city names. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "city": {
          "description": "City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.",
          "type": "string"
        },
        "class": {
          "description": "Tax class.",
          "enum": [
            "standard",
            "reduced-rate",
            "zero-rate"
          ],
          "type": "string"
        },
        "compound": {
          "description": "Whether or not this is a compound rate.",
          "type": "boolean"
        },
        "country": {
          "description": "Country ISO 3166 code.",
          "type": "string"
        },
        "name": {
          "description": "Tax rate name.",
          "type": "string"
        },
        "order": {
          "description": "Indicates the order that will appear in queries.",
          "type": "integer"
        },
        "postcode": {
          "description": "Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.",
          "type": "string"
        },
        "postcodes": {
          "description": "List of postcodes / ZIPs. Introduced in WooCommerce 5.3.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "priority": {
          "description": "Tax priority.",
          "type": "integer"
        },
        "rate": {
          "description": "Tax rate.",
          "type": "string"
        },
        "shipping": {
          "description": "Whether or not this tax rate also gets applied to shipping.",
          "type": "boolean"
        },
        "state": {
          "description": "State code.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.webhooks_batch",
    "title": "Webhooks Batch",
    "description": "Generated WooCommerce wc.v3 operation for POST /webhooks/batch.",
    "operationKey": "WEBHOOKS_BATCH",
    "method": "POST",
    "routeTemplate": "/webhooks/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "create": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "name": {
                "description": "A friendly name for the webhook.",
                "type": "string"
              },
              "secret": {
                "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                "type": "string"
              },
              "status": {
                "description": "Webhook status.",
                "enum": [
                  "active",
                  "paused",
                  "disabled"
                ],
                "type": "string"
              },
              "topic": {
                "description": "Webhook topic.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "delete": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "update": {
          "items": {
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "description": "A friendly name for the webhook.",
                "type": "string"
              },
              "secret": {
                "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                "type": "string"
              },
              "status": {
                "description": "Webhook status.",
                "enum": [
                  "active",
                  "paused",
                  "disabled"
                ],
                "type": "string"
              },
              "topic": {
                "description": "Webhook topic.",
                "type": "string"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "secret"
    ]
  },
  {
    "toolName": "wc.v3.webhooks_batch_put_custom",
    "title": "Webhooks Batch Put Custom",
    "description": "Generated WooCommerce wc.v3 operation for PUT /webhooks/batch.",
    "operationKey": "WEBHOOKS_BATCH_PUT_CUSTOM",
    "method": "PUT",
    "routeTemplate": "/webhooks/batch",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "A friendly name for the webhook.",
          "type": "string"
        },
        "secret": {
          "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
          "type": "string"
        },
        "status": {
          "description": "Webhook status.",
          "enum": [
            "active",
            "paused",
            "disabled"
          ],
          "type": "string"
        },
        "topic": {
          "description": "Webhook topic.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "secret"
    ]
  },
  {
    "toolName": "wc.v3.webhooks_create",
    "title": "Webhooks Create",
    "description": "Generated WooCommerce wc.v3 operation for POST /webhooks.",
    "operationKey": "WEBHOOKS_CREATE",
    "method": "POST",
    "routeTemplate": "/webhooks",
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "delivery_url": {
          "description": "Webhook delivery URL.",
          "type": "string"
        },
        "name": {
          "description": "A friendly name for the webhook.",
          "type": "string"
        },
        "secret": {
          "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
          "type": "string"
        },
        "status": {
          "default": "active",
          "description": "Webhook status.",
          "enum": [
            "active",
            "paused",
            "disabled"
          ],
          "type": "string"
        },
        "topic": {
          "description": "Webhook topic.",
          "type": "string"
        }
      },
      "required": [
        "delivery_url",
        "topic"
      ],
      "type": "object"
    },
    "sensitiveFields": [
      "secret"
    ]
  },
  {
    "toolName": "wc.v3.webhooks_delete",
    "title": "Webhooks Delete",
    "description": "Generated WooCommerce wc.v3 operation for DELETE /webhooks/{id}.",
    "operationKey": "WEBHOOKS_DELETE",
    "method": "DELETE",
    "routeTemplate": "/webhooks/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "force": {
          "default": false,
          "description": "Required to be true, as resource does not support trashing.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.webhooks_id_post_custom",
    "title": "Webhooks Id Post Custom",
    "description": "Generated WooCommerce wc.v3 operation for POST /webhooks/{id}.",
    "operationKey": "WEBHOOKS_ID_POST_CUSTOM",
    "method": "POST",
    "routeTemplate": "/webhooks/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "A friendly name for the webhook.",
          "type": "string"
        },
        "secret": {
          "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
          "type": "string"
        },
        "status": {
          "description": "Webhook status.",
          "enum": [
            "active",
            "paused",
            "disabled"
          ],
          "type": "string"
        },
        "topic": {
          "description": "Webhook topic.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "secret"
    ]
  },
  {
    "toolName": "wc.v3.webhooks_list",
    "title": "Webhooks List",
    "description": "Generated WooCommerce wc.v3 operation for GET /webhooks.",
    "operationKey": "WEBHOOKS_LIST",
    "method": "GET",
    "routeTemplate": "/webhooks",
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "after": {
          "description": "Limit response to resources published after a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "before": {
          "description": "Limit response to resources published before a given ISO8601 compliant date.",
          "format": "date-time",
          "type": "string"
        },
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        },
        "exclude": {
          "default": [],
          "description": "Ensure result set excludes specific IDs.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "include": {
          "default": [],
          "description": "Limit result set to specific ids.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "offset": {
          "description": "Offset the result set by a specific number of items.",
          "type": "integer"
        },
        "order": {
          "default": "desc",
          "description": "Order sort attribute ascending or descending.",
          "enum": [
            "asc",
            "desc"
          ],
          "type": "string"
        },
        "orderby": {
          "default": "date",
          "description": "Sort collection by object attribute.",
          "enum": [
            "date",
            "id",
            "title"
          ],
          "type": "string"
        },
        "page": {
          "default": 1,
          "description": "Current page of the collection.",
          "minimum": 1,
          "type": "integer"
        },
        "per_page": {
          "default": 10,
          "description": "Maximum number of items to be returned in result set.",
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        "search": {
          "description": "Limit results to those matching a string.",
          "type": "string"
        },
        "status": {
          "default": "all",
          "description": "Limit result set to webhooks assigned a specific status.",
          "enum": [
            "all",
            "active",
            "paused",
            "disabled"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.webhooks_read",
    "title": "Webhooks Read",
    "description": "Generated WooCommerce wc.v3 operation for GET /webhooks/{id}.",
    "operationKey": "WEBHOOKS_READ",
    "method": "GET",
    "routeTemplate": "/webhooks/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "querySchema": {
      "additionalProperties": false,
      "properties": {
        "context": {
          "default": "view",
          "description": "Scope under which the request is made; determines fields present in response.",
          "enum": [
            "view",
            "edit"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  {
    "toolName": "wc.v3.webhooks_update",
    "title": "Webhooks Update",
    "description": "Generated WooCommerce wc.v3 operation for PUT /webhooks/{id}.",
    "operationKey": "WEBHOOKS_UPDATE",
    "method": "PUT",
    "routeTemplate": "/webhooks/{id}",
    "pathParamsSchema": {
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "integer"
        }
      },
      "required": [
        "id"
      ],
      "type": "object"
    },
    "bodySchema": {
      "additionalProperties": false,
      "properties": {
        "name": {
          "description": "A friendly name for the webhook.",
          "type": "string"
        },
        "secret": {
          "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
          "type": "string"
        },
        "status": {
          "description": "Webhook status.",
          "enum": [
            "active",
            "paused",
            "disabled"
          ],
          "type": "string"
        },
        "topic": {
          "description": "Webhook topic.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sensitiveFields": [
      "secret"
    ]
  }
] as const satisfies readonly GeneratedRegistryOperationSpec[];

export const GENERATED_OPERATION_DEFINITIONS =
  buildGeneratedOperationDefinitions(GENERATED_OPERATION_SPECS);
