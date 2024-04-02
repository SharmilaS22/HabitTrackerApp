import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressCard from "./ProgressCard";
import Heading2 from "./Heading2";
import { ThisWeekProgress } from "../Schema/WeekProgress";

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
		elevation: 5,
		marginVertical: 20,
	},
	heading: {
		fontSize: 20,
		margin: 10,
		fontWeight: "bold",
		textAlign: "left",
	},
	habitDotContainer: {
		alignSelf: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	}
});

interface HabitContainerProps {
	thisWeekProgress: ThisWeekProgress,
	currentDay: string,
}

const HabitContainer = ({thisWeekProgress, currentDay }: HabitContainerProps) => {
	return (
		<View>
			<Heading2 text="Your Weekly Progress" />
			{thisWeekProgress.map(({taskName, progress}, index) => (
				<ProgressCard taskName={taskName} progress={progress} currentDay={currentDay} />
			))}
		</View>
	);
};

export default HabitContainer;