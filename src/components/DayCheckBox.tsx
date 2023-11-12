import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	checkbox: {
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#000",
		marginRight: 10,
	},
	checkedCheckbox: {
		backgroundColor: "#000",
	},
	checkboxText: {
		fontSize: 12,
	},
	checkedCheckboxText: {
		color: "#fff",
	},
});

interface DayCheckboxProps {
  day: string,
  checked: boolean,
  onToggle: () => void
}

const DayCheckbox = ({ day, checked, onToggle }: DayCheckboxProps) => {
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