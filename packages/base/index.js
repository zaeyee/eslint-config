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
    // eslint的推荐配置
    'eslint:recommended',
    // config-prettier和plugin-prettier的合并配置，关闭所有不必要或可能与Prettier冲突的规则（注意：必须放在最后一项来覆盖其他配置）
    'plugin:prettier/recommended'
  ]
}
