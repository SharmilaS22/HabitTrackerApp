import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useAppTheme } from "../../Theme";

interface DayCheckboxProps {
	day: string,
	checked: boolean,
	onToggle: () => void
}

const DayCheckbox = ({ day, checked, onToggle }: DayCheckboxProps) => {
	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		checkbox: {
			width: 40,
			height: 40,
			borderRadius: 500,
			justifyContent: "center",
			alignItems: "center",
			borderWidth: 1,
			borderColor: colors.primary,
		},
		checkedCheckbox: {
			backgroundColor: colors.primaryContainer,
			borderColor: colors.primaryContainer,
		},
		checkboxText: {
			fontSize: 12,
			color: colors.primary,
		},
		checkedCheckboxText: {
			color: colors.onSurface,
		},
	});


	return (
		<TouchableOpacity
			style={[styles.checkbox, checked && styles.checkedCheckbox]}
			onPress={onToggle}
		>
			<Text style={[styles.checkboxText, checked && styles.checkedCheckboxText]}>{day}</Text>
		</TouchableOpacity>
	);
};

export default DayCheckbox;