import { extendTheme } from "native-base";

// Generated with http://mcg.mbitson.com/
const brown = {
    50: "#f9f3ed",
    100: "#f0e0d1",
    200: "#e6ccb3",
    300: "#dbb894",
    400: "#d4a87d",
    500: "#cc9966",
    600: "#c7915e",
    700: "#c08653",
    800: "#b97c49",
    900: "#ad6b38",
};

const red = {
    50: "#f9e7e7",
    100: "#f0c2c2",
    200: "#e69999",
    300: "#db7070",
    400: "#d45252",
    500: "#cc3333",
    600: "#c72e2e",
    700: "#c02727",
    800: "#b92020",
    900: "#ad1414",
};

const green = {
    50: "#edf3ed",
    100: "#d1e0d1",
    200: "#b3ccb3",
    300: "#94b894",
    400: "#7da87d",
    500: "#669966",
    600: "#5e915e",
    700: "#538653",
    800: "#497c49",
    900: "#386b38",
};

const yellow = {
    50: "#fff9e0",
    100: "#fff0b3",
    200: "#ffe680",
    300: "#ffdb4d",
    400: "#ffd426",
    500: "#ffcc00",
    600: "#ffc700",
    700: "#ffc000",
    800: "#ffb900",
    900: "#ffad00",
};

const theme = extendTheme({
    colors: { green, yellow, red, amber: brown },
    components: {
        Text: {
            baseStyle: {
                fontFamily: "Comfortaa400",
                fontSize: 16,
                color: "yellow.500",
            },
            // defaultProps: {
            //     maxFontSizeMultiplier: 1.15,
            // },
        },
    },
    fontConfig: {
        Comfortaa: {
            300: {
                normal: "Comfortaa300",
            },
            400: {
                normal: "Comfortaa400",
            },
            500: {
                normal: "Comfortaa500",
            },
            600: {
                normal: "Comfortaa600",
            },
            700: {
                normal: "Comfortaa700",
            },
        },
    },
    fonts: {
        heading: "Comfortaa",
        body: "Comfortaa",
        mono: "Comfortaa",
    },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
    type ICustomTheme = CustomThemeType;
}

export default theme;
