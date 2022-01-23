# @beaunus/eslint-config

This is an eslint config that I use on multiple projects.

## Configuration

Install this package (and all peer dependencies) in the target project.

Add a `.eslintrc.js` in the target project.

```js
const beaunusStyleConfig = require("@beaunus123/style-config").eslint;

module.exports = {
  ...beaunusStyleConfig,
  extends: [
    ...beaunusStyleConfig.extends,
    // "some other extension",
  ],
};
```

## Deployment

```sh
npm login
npm version patch
npm publish
```
  