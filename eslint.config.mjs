import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import sort from 'eslint-plugin-sort';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{mjs,ts,tsx}'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  sort.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  // importPlugin.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      'node_modules/*',
      '.next/*',
      '/pages/api/**/*.ts',
      'out/*',
      'jest.setup.js',
      'jest.config.js',
      '.eslintrc.js',
      '.prettierrc.js',
    ],
  },
  {
    rules: {
      // I suggest this setting for requiring return types on functions only where useful
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          allowExpressions: true,
        },
      ],

      // Why would you want unused vars?
      '@typescript-eslint/no-unused-vars': ['error'],

      // This rule is not compatible with Next.js's <Link /> components
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-onchange': 0,
      'no-console': ['error', { allow: ['warn', 'error'] }],

      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      // We will use TypeScript's types for component props instead
      'react/prop-types': 'off',
      // No need to import React when using Next.js
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      // 'import/order': [
      //   'error',
      //   {
      //     groups: ['builtin', 'external', 'internal'],
      //     pathGroups: [
      //       {
      //         pattern: 'react',
      //         group: 'external',
      //         position: 'before',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['react'],
      //     'newlines-between': 'always',
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true,
      //     },
      //   },
      // ],
    },
  },
];
