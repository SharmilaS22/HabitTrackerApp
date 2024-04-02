import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TaskStatus } from "../Schema/WeekProgress";
import { useAppTheme } from "../../Theme";

interface HabitDotProps {
	status: TaskStatus,
	currentDay: string,
	day: string,
}

const HabitDot = ({ status, currentDay, day }: HabitDotProps) => {

	const { colors } = useAppTheme();

	const commonDotStyles = {
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	};

	const styles = StyleSheet.create({
		dot: {
			width: 30,
			height: 30,
			backgroundColor: colors.outline,
			borderRadius: 15,
			justifyContent: "center",
			alignItems: "center",
			margin: 5,
		},
		currentDayDot: {
			width: 32,
			height: 32,
			backgroundColor: colors.inversePrimary,
			borderRadius: 15,
			justifyContent: "center",
			alignItems: "center",
			margin: 5,
			// borderStyle: "solid",
			// borderWidth: 2,
			// borderColor: colors.onBackground,
		},
		checkedDot: {
			width: 30,
			height: 30,
			backgroundColor: colors.primary,
			borderRadius: 15,
			justifyContent: "center",
			alignItems: "center",
			margin: 5,
		},
		futureDot: {
			width: 30,
			height: 30,
			backgroundColor: colors.onBackground,
			borderRadius: 15,
			justifyContent: "center",
			alignItems: "center",
			margin: 5,
		},
	});

	let styleForDot;

	if (currentDay === day) {
		styleForDot = styles.currentDayDot;
	} else if (status === TaskStatus.Completed) {
		styleForDot = styles.checkedDot;
	} else if (status === TaskStatus.Pending) {
		styleForDot = styles.futureDot;
	} else {
		styleForDot = styles.dot;
	}

	return <View style={styleForDot}>
		{status == TaskStatus.Completed && <Text style={{ color: "#fff" }}>✓</Text>}
	</View>;
};

export default HabitDot;