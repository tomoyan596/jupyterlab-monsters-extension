import eslintPluginJsonSchemaValidator from "eslint-plugin-json-schema-validator";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginJsonSchemaValidator.configs["flat/recommended"],
  {
    rules: {
      // override/add rules settings here, such as:
      // 'json-schema-validator/no-invalid': 'warn'
    },
  },
];
