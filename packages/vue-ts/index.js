module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  extends: [
    // @zaeyee的TypeScript配置
    '@zaeyee/eslint-config-ts',
    // @zaeyee的Vue配置
    '@zaeyee/eslint-config-vue',
  ]
}
