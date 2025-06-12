import eslint from '@eslint/js'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintConfigUnoCSS from '@unocss/eslint-config/flat'

export default (options = {}, rules = {}) => {
  return typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
      extends: [
        eslint.configs.recommended,
        ...typescriptEslint.configs.recommended,
        ...eslintPluginVue.configs['flat/recommended']
      ],
      files: ['**/*.{ts,vue}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parserOptions: {
          parser: typescriptEslint.parser
        }
      },
      rules: {
        // 关闭vue组件名称必须多单词的限制
        'vue/multi-word-component-names': 'off',
        ...rules
      }
    },
    eslintConfigPrettier,
    eslintConfigUnoCSS
  )
}
