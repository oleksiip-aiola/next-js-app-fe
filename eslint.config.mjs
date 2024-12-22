import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  node: true,
  rules: {
    'no-console': 'warn',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'next/typescript',
  ],
  ignores: [
    'dist',
    'node_modules',
    'app/gen',
    'envConfig.ts',
    'app/utils/config.ts',
    'app/workers',
    'tailwind.config.ts',
  ],
})
