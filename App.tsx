import React from "react";
import { MD2DarkTheme as DefaultTheme, Icon, PaperProvider } from "react-native-paper";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";

import Home from "./src/screens/Home/Home";
import CreateHabit from "./src/screens/Home/CreateHabit";
import HabitProgress from "./src/screens/Home/HabitProgress";

const Tab = createBottomTabNavigator();

export default function App() {

	const theme = {
		...DefaultTheme,
		roundness: 2,
		colors: {
			...DefaultTheme.colors,
			primary: "#0F3460",
			secondary: "#E94560",
			darkSecondary: "#16213E",
			darkerSecondary: "#1A1A2E",
			dark: "#121212",
			gray: "",
		},
	};

	const SECONDARY_COLOR_RGB = "233, 69, 96";

	function getIconName(route: RouteProp<ParamListBase, string>, focused: boolean) {
		let iconName;
		if (route.name === "Home") {
			iconName = focused ? "home" : "home";
		} else if (route.name === "Calendar") {
			iconName = focused ? "home" : "home";
		}
		return iconName;
	}

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				{/* https://reactnavigation.org/docs/bottom-tab-navigator */}
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							const iconName = getIconName(route, focused);
							return <Icon
								source={iconName}
								color={color}
								size={size}
							/>;
						},
						tabBarShowLabel: false,
						tabBarActiveTintColor: `rgba(${SECONDARY_COLOR_RGB}, 1)`,
						tabBarInactiveTintColor: `rgba(${SECONDARY_COLOR_RGB}, 0.5)`,
						// tabBarHideOnKeyboard: true,
						tabBarStyle: [
							{
								display: "flex",
								backgroundColor: theme.colors.dark,
							},
							null
						]
					})}
				>
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen name="CreateHabit" component={CreateHabit} />
					<Tab.Screen name="HabitProgress" component={HabitProgress} />
				</Tab.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);

}
