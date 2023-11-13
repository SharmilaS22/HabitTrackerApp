import React from "react";
import { Icon, PaperProvider } from "react-native-paper";
import { StyleSheet, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./src/screens/Home/Home";
import CreateHabit from "./src/screens/Home/CreateHabit";
import HabitProgress from "./src/screens/Home/HabitProgress";
import { darkTheme, lightTheme } from "./Theme";

const Tab = createBottomTabNavigator();

export default function App() {

	const colorScheme = useColorScheme();
	const theme =
		colorScheme === "dark"
			? darkTheme : lightTheme;

	console.log("theme", typeof theme);

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
		<SafeAreaProvider style={styles.container}>
			<PaperProvider theme={darkTheme}>
				{/* Pass theme here */}
				<NavigationContainer>
					{/* https://reactnavigation.org/docs/bottom-tab-navigator */}
					<Tab.Navigator
						initialRouteName="Home"
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
									backgroundColor: darkTheme.colors.background,
								},
								null
							],
							headerShown: false
						})}
					>
						<Tab.Screen name="Home" component={Home} />
						<Tab.Screen name="CreateHabit" component={CreateHabit} />
						<Tab.Screen name="HabitProgress" component={HabitProgress} />
					</Tab.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});