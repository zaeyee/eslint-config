module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  extends: [
    // eslint 推荐规则
    'eslint:recommended',
    // eslint-config-prettier和eslint-plugin-prettier合并配置
    'plugin:prettier/recommended'
  ]
}
