import { MD3DarkTheme as DefaultTheme, useTheme } from "react-native-paper";

import darkthemeColors from "./darkThemeColors.json";

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...darkthemeColors,
		primary: "#0F3460",
		secondary: "#E94560",
		darkSecondary: "#16213E",
		darkerSecondary: "#1A1A2E",
		dark: "#121212",
		gray: "#7F7384",
		white: "#E5DED3",
	},
};

export type AppTheme = typeof theme;
const useAppTheme = () => useTheme<AppTheme>();

export { useAppTheme, theme };