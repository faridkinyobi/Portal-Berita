module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    ignorePatterns: ['dist/**'], // Mengabaikan folder hasil kompilasi
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  };
  