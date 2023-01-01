const fs = require('fs')
const { join } = require('path')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  extends: [
    // 使用 @typescript-eslint/eslint-plugin 推荐配置
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: fs.existsSync(join(process.cwd(), tsconfig))
    ? [
        {
          files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
          parser: '@typescript-eslint/parser',
          parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: [tsconfig]
          },
          extends: [
            // 使用 @typescript-eslint/eslint-plugin 推荐配置（包含特别需要类型信息的规则）
            'plugin:@typescript-eslint/recommended-requiring-type-checking'
          ]
        }
      ]
    : []
}
