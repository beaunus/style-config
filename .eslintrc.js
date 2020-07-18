module.exports = {
  env: { es6: true, node: true },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2020 },
  plugins: ["@typescript-eslint", "import"],
  root: true,
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    "no-shadow": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error",
    "sort-keys": "warn",
    yoda: "error",
  },
};
