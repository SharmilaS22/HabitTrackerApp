import React, { useState } from "react";
import HabitContainer from "../../components/HabitContainer";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import { Button, Text } from "react-native-paper";
import { ThisWeekProgress, TaskStatus } from "../../Schema/WeekProgress";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../../../Theme";
import TaskCard from "../../components/TaskCard";

interface HomeProps {
	navigation: {
		navigate: (screenName: string) => void,
		goBack: () => void
	},
}

const thisWeekProgress: ThisWeekProgress = [
	{
		taskName: "Read for 10 minutes",
		progress: [
			{ date: "2021-07-01", status: TaskStatus.Completed },
			{ date: "2021-07-02", status: TaskStatus.Completed },
			{ date: "2021-07-03", status: TaskStatus.Completed },
			{ date: "2021-07-04", status: TaskStatus.NotCompleted },
			{ date: "2021-07-05", status: TaskStatus.Completed },
			{ date: "2021-07-06", status: TaskStatus.Pending },
			{ date: "2021-07-07", status: TaskStatus.Pending }
		]
	},
	{
		taskName: "Meditate/Mindful Walking",
		progress: [
			{ date: "2021-07-01", status: TaskStatus.Completed },
			{ date: "2021-07-02", status: TaskStatus.NotCompleted },
			{ date: "2021-07-03", status: TaskStatus.Completed },
			{ date: "2021-07-04", status: TaskStatus.Completed },
			{ date: "2021-07-05", status: TaskStatus.Completed },
			{ date: "2021-07-06", status: TaskStatus.Pending },
			{ date: "2021-07-07", status: TaskStatus.Pending }
		]
	},
	{
		taskName: "Learn Spanish 2 lessons",
		progress: [
			{ date: "2021-07-01", status: TaskStatus.Completed },
			{ date: "2021-07-02", status: TaskStatus.NotCompleted },
			{ date: "2021-07-03", status: TaskStatus.Completed },
			{ date: "2021-07-04", status: TaskStatus.NotCompleted },
			{ date: "2021-07-05", status: TaskStatus.NotCompleted },
			{ date: "2021-07-06", status: TaskStatus.Pending },
			{ date: "2021-07-07", status: TaskStatus.Pending }
		]
	}
];

const Home = ({ navigation }: HomeProps) => {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [habits, setHabits] = useState<string[]>([
		"Read for 10 minutes",
		"Meditate/Mindful Walking",
		"Learn Spanish 2 lessons"
	]);

	// useEffect(() => {
	// 	setHabits([
	// 		"Read for 10 minutes",
	// 		"Meditate/Mindful Walking",
	// 		"Learn Spanish 2 lessons"
	// 	])
	// }, [habits]);

	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			justifyContent: "flex-start",
		},
		mainContent: {
			marginHorizontal: 25
		},
		createHabitButton: {
			backgroundColor: colors.secondary,
			marginVertical: 20,
			padding: 0,
		},
		createHabitText: {
			color: colors.onSecondary,
			fontSize: 20,
			paddingVertical: 10,
			margin: 0
		},
		todaysGoals: {
			marginTop: 30,
			color: colors.onBackground,
		},
		todaysGoalsText: {
			marginVertical: 10,
			fontSize: 24,
		},
	});

	const greeting = "Good Morning!";
	const avatarURL = "https://i.pravatar.cc/150?img=32";
	const subGreeting = "Time to shine!";

	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={styles.container}>
				<Header greeting={greeting} subGreeting={subGreeting} avatarURL={avatarURL} />
				<View style={styles.mainContent}>
					<Button
						mode="contained"
						onPress={() => navigation.navigate("CreateHabit")}
						style={styles.createHabitButton}
					>
						<Text style={styles.createHabitText}>Create New Habit</Text>
					</Button>
					<Button
						mode="contained"
						onPress={() => navigation.navigate("HabitProgress")}
					// textColor={colors.white}
					// buttonColor={colors.secondary}
					>
						Calendar
					</Button>

					<View style={styles.todaysGoals}>
						<Text style={styles.todaysGoalsText}>Today&apos;s Goals</Text>
						<View>
							{habits.map((habitText, index) =>
								<TaskCard taskText={habitText} key={index} />
							)}
						</View>
						{/* <TaskCard taskText="Read for 10 minutes" />
						<TaskCard taskText="Meditate/Mindful walking" /> */}
					</View>

					<HabitContainer
						thisWeekProgress={thisWeekProgress}
						currentDay={"2021-07-05"}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;