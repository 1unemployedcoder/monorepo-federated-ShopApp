module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        tsconfigRootDir: __dirname,
    },
    env: {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
    ],
    plugins: [
        "react",
        "jest"
    ],
    rules: {
        "@typescript-eslint/indent": ["error", 4],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        "@typescript-eslint/no-misused-promises": [2, {
            "checksVoidReturn": {
                "attributes": false
            }
        }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
    settings: {
        "react": {
            "version": "detect"
        }
    }
};
