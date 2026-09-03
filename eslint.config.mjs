import js from '@eslint/js';
import globals from 'globals';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  // 1. Base recommended JavaScript rules
  js.configs.recommended,

  // 2. Define browser and Node.js globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 3. Next.js Core Web Vitals AND React Hooks rules
  {
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
];
