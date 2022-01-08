module.exports = {
    root: true,
    env: {
        es2021: true,
        "react-native/react-native": true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-native/all",
        "prettier",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    ignorePatterns: ["./src/graphql/models.tsx", "./codegen.yml"],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "function-declaration",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        "react/style-prop-object": 0,
        "react-native/no-raw-text": 0,
        "import/extensions": ["error", "never"],
        "import/no-unresolved": 0,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier", "react", "react-native"],
};
