module.exports = {
  extends: [
    // plugin-vue的推荐配置
    'plugin:vue/vue3-recommended',
    // @zaeyee的基础配置
    '@zaeyee/eslint-config-base'
  ],
  rules: {
    // 关闭vue组件名称必须多单词的限制
    'vue/multi-word-component-names': 0
  }
}
