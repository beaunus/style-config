module.exports = {
  env: { es6: true },
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
    "no-shadow": "warn",
    "sort-keys": "warn",
    "no-unused-vars": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    yoda: "error",
  },
};
