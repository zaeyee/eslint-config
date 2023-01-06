const fs = require('fs')
const { join } = require('path')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

const config = {
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
    // @typescript-eslint/eslint-plugin的推荐配置
    'plugin:@typescript-eslint/recommended',
    // config-prettier和plugin-prettier的合并配置，关闭所有不必要或可能与Prettier冲突的规则（注意：必须放在最后一项来覆盖其他配置）
    'plugin:prettier/recommended'
  ],
  overrides: []
}

if (fs.existsSync(join(process.cwd(), tsconfig))) {
  config.overrides.push({
    files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: process.cwd(),
      project: [tsconfig]
    },
    extends: [
      // @typescript-eslint/eslint-plugin的推荐配置（包含特别需要类型信息的规则）
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ]
  })
}

module.exports = config
