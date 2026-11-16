import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
    ignores: [
        'node_modules/**',
        'playwright-report/**',
        'test-results/**',
    ],

    files: ['**/*.{js,ts}'],

    extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
    ],
});
