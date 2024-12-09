import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      'react/prop-types': 'off',
      semi: ['error', 'never'],
      indent: ['error', 2, { SwitchCase: 1 }],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]