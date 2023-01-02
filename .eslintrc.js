module.exports = {
    root: true,
    extends: ['airbnb', 'eslint-config-react-app/base', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'better-styled-components',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-memo',
        'prettier',
        'jam3',
    ],
    globals: {
        JSX: true,
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-use-before-define': 0, // @TODO - think about disabling
        'class-methods-use-this': 0,
        'comma-dangle': [2, 'always-multiline'],
        'consistent-return': 0,
        'dot-notation': 0,
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-cycle': [1, { maxDepth: 1 }],
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 2,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        indent: 0, // @see https://github.com/prettier/prettier/issues/1271
        // indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/label-has-for': [
            2,
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/mouse-events-have-key-events': 2,
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'jsx-a11y/media-has-caption': 0,
        'max-len': 0,
        'newline-per-chained-call': 0,
        'no-else-return': 0,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-param-reassign': 0,
        // 'no-param-reassign': ['error', { props: false }],
        'no-plusplus': 0,
        // @TODO - think about apply rule for any object and key
        'no-restricted-properties': [
            2,
            {
                object: 'BACKEND_ROUTES',
                property: 'addNewRoute',
            },
        ],
        'no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'prefer-template': 2,
        'react/default-props-match-prop-types': 0, // restore when done https://github.com/yannickcr/eslint-plugin-react/issues/1674
        'react/display-name': 0,
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useThrottledEffect)',
            },
        ],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-fragments': 0,
        'react/jsx-no-target-blank': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/no-danger': 0,
        'jam3/no-sanitizer-with-danger': [
            2,
            {
                wrapperName: ['xss', 'purify', 'sanitize'],
            },
        ],
        'require-yield': 0,
        'react/prefer-stateless-function': 'error',
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['src', './src']],
                extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
