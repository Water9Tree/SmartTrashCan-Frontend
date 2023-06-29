import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    myOwnProperty: true,
    primary: "#34d399",
    accent: "#f1c40f",
    secondary: "#34d399",
    onSecondary: "#34d399",
    secondaryContainer: "#34d399",
    onSecondaryContainer: "black",
    outline: "white",

    middleGray: "#f1f5f9",
    error: "#f87171",
  },

  roundness: 2,
};
