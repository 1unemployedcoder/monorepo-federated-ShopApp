module.exports = {
    extends: ["../../packages/build-config/.eslintrc.js", "plugin:storybook/recommended"],
    parserOptions: {
        tsconfigRootDir: __dirname
    }
}
