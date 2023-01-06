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
    // plugin-vue的推荐配置
    'plugin:vue/vue3-recommended',
    // config-prettier和plugin-prettier的合并配置，关闭所有不必要或可能与Prettier冲突的规则（注意：必须放在最后一项来覆盖其他配置）
    'plugin:prettier/recommended'
  ],
  rules: {
    // 关闭vue组件名称必须多单词的限制
    'vue/multi-word-component-names': 0
  }
}
