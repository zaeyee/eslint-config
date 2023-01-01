# @zaeyee/eslint-config

Zaeyee's ESLint config.

## Usage

### Install

```bash
pnpm add eslint @zaeyee/eslint-config -D
```

### Config .eslintrc.js

```js
module.exports = {
  extends: '@zaeyee'
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
