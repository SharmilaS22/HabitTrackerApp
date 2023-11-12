import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	dot: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#ccc", //TODO Primary color
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	currentDayDot: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#000", //TODO Primary color
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	checkedDot: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#aaa", //TODO: Primary color
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	futureDot: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#eee", //TODO: Primary color
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
});
interface HabitDotProps {
    checked: boolean,
    currentDay: number,
    day: number,
}


const HabitDot = ({ checked, currentDay, day }: HabitDotProps) => {
	let styleForDot;
	if (day < currentDay) {
		styleForDot = checked ? styles.checkedDot : styles.dot;
	} else if (day === currentDay) {
		styleForDot = styles.currentDayDot;
	} else {
		styleForDot = styles.futureDot;
	}

	return <View style={styleForDot}>
		{checked && <Text style={{ color: "#fff" }}>✓</Text>}
	</View>;
};

export default HabitDot;