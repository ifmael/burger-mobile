module.exports = function (api) {
    api.cache(true);
    const plugins = [
        [
            "babel-plugin-module-resolver",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                root: ["./src"],
            },
        ],
    ];

    return {
        presets: ["babel-preset-expo"],
        plugins,
    };
};
