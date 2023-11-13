import { MD3DarkTheme, MD3LightTheme, useTheme } from "react-native-paper";

// import darktheme from "./darkThemeColors.json";
// import lighttheme from "./lightThemeColors.json";

import mdtheme from "./theme.json";


const darkTheme = {
	...MD3DarkTheme,
	roundness: 2,
	colors: mdtheme.schemes.dark
};
const lightTheme = {
	...MD3LightTheme,
	roundness: 2,
	colors: mdtheme.schemes.light
};

export type AppTheme = typeof darkTheme;
const useAppTheme = () => useTheme<AppTheme>();

export { useAppTheme, darkTheme, lightTheme };


// const theme = {
// 	...MD3LightTheme,
// 	dark: true,
// 	roundness: 2,
// 	colors: {
// 		...darktheme.colors,
// 		// primary: "#E94560",
// 		// secondary: "#0F3460",
// 		// background: "#121212",
// 		// onBackground: "#FFFFFF",
// 		// darkSecondary: "#16213E",
// 		// darkerSecondary: "#1A1A2E",
// 		// gray: "#7F7384",
// 		// white: "#E5DED3",
// 	},
// };