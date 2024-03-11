"use strict";

/**
 * regex inspired by https://github.com/syzygypl/stylelint-config-syzygy-bem/blob/2.1.0/index.js
 */
const IDENTIFIER = `[a-z][\\w\\d]*`;
const IDENTIFIER_FOLLOWING = `[\\w\\d]+`;
const IDENTIFIER_CAMEL_CASE = `[A-Z][\\w\\d]*`;
const VARIABLE_NAME = `#{\\$${IDENTIFIER}}`;
const ROOT_VARIABLE = "#{\\$root}";

const BLOCK_NAME = `(?:${IDENTIFIER_CAMEL_CASE})`;
const ELEMENT_NAME = `${IDENTIFIER_FOLLOWING}`;
const MODIFIER_NAME = `(?:${VARIABLE_NAME}(?:(?:${IDENTIFIER_CAMEL_CASE})?(?:${VARIABLE_NAME})?)*)|(?:${IDENTIFIER_FOLLOWING}(?:(?:${IDENTIFIER_CAMEL_CASE})?(?:${VARIABLE_NAME})?)*)`;
const SUFFIX = `(?:_${MODIFIER_NAME})?`;
const PREFIX = `(?:\\.|(?=%))`;

const FILE_NAME = `^%?${BLOCK_NAME}$`;
const INITIAL_SELECTOR = `^(${PREFIX}${BLOCK_NAME}(?:__${ELEMENT_NAME})?)${SUFFIX}(${SUFFIX})?$`;
const COMBINED_SELECTOR = `^(\\.${BLOCK_NAME}|${ROOT_VARIABLE})__${ELEMENT_NAME}${SUFFIX}$`;

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-selector-bem-pattern", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/at-mixin-pattern": [
      new RegExp(IDENTIFIER_FOLLOWING),
      { severity: "warning" },
    ],
    "selector-id-pattern": [
      new RegExp(IDENTIFIER_FOLLOWING),
      { severity: "warning" },
    ],
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "plugin/selector-bem-pattern": [
      {
        preset: "bem",
        implicitComponents: true,
        componentName: FILE_NAME,
        componentSelectors: {
          initial: INITIAL_SELECTOR,
          combined: COMBINED_SELECTOR,
        },
        ignoreSelectors: ["^(svg|img)$"],
      },
    ],
  },
};
