module.exports = {
  extends: [
    // 使用 eslint-plugin-vue 推荐配置
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // 关闭vue组件名称必须多单词的限制
    'vue/multi-word-component-names': 0
  }
}
