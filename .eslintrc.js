module.exports = {
    root: true,
    extends: "@react-native-community",
    plugins: ["simple-import-sort", "import"],
    rules: {
        semi: ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        quotes: ["error", "double", "avoid-escape"],
        "comma-dangle": ["error", "never"],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        indent: ["error", 4]
    }
}
