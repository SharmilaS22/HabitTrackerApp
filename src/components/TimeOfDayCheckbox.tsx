import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppTheme } from "../../Theme";

interface TimeOfDayCheckboxProps {
	timeOfDay: string,
	checked: boolean,
	onToggle: () => void,
}

const TimeOfDayCheckbox = ({ timeOfDay, checked, onToggle }: TimeOfDayCheckboxProps) => {
	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		checkbox: {
			width: 90,
			height: 75,
			borderRadius: 10,
			justifyContent: "center",
			alignItems: "center",
			borderWidth: 1,
			borderColor: colors.onBackground,
			// marginRight: 10,
		},
		checkedCheckbox: {
			backgroundColor: colors.primaryContainer,
			borderColor: colors.primaryContainer
		},
		checkboxText: {
			fontSize: 15,
			color: colors.onBackground,
		},
		checkboxIcon: {
			color: colors.onBackground,
		},
		checkedCheckboxText: {
			color: colors.onBackground,
		},
	});

	const icons = {
		Morning: "weather-sunset-up",
		Afternoon: "weather-sunny",
		Evening: "weather-sunset-down",
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as { [key: string]: any };

	return (
		<TouchableOpacity
			style={[styles.checkbox, checked && styles.checkedCheckbox]}
			onPress={onToggle}
		>
			{/* TODO Create icons */}
			<MaterialCommunityIcons
				style={[styles.checkboxIcon, checked && styles.checkedCheckboxText]}
				name={icons[timeOfDay]}
				size={24}
			/>

			<Text style={[styles.checkboxText, checked && styles.checkedCheckboxText]}>
				{timeOfDay}
			</Text>
		</TouchableOpacity>
	);
};

export default TimeOfDayCheckbox;