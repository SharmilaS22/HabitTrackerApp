import React, { useState } from "react";
import HabitContainer from "../../components/HabitContainer";
import { View, StyleSheet} from "react-native";
import Header from "../../components/Header";
import { Button, Text } from "react-native-paper";
import { CurrentWeekProgress } from "../../Schema/CurrentWeekProgress";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../../../Theme";
import TaskCard from "../../components/TaskCard";

interface HomeProps {
	navigation: {
		navigate: (screenName: string) => void,
		goBack: () => void
	},
}

const Home = ({ navigation }: HomeProps) => {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [habits, setHabits] = useState<string[]>([
		"Read for 10 minutes",
		"Meditate/Minful Walking",
		"Learn Spanish 2 lessons"
	]);

	// useEffect(() => {
	// 	setHabits([
	// 		"Read for 10 minutes",
	// 		"Meditate/Minful Walking",
	// 		"Learn Spanish 2 lessons"
	// 	])
	// }, [habits]);

	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			height: "100%",
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

	// TODO: Replace this with data from the API
	const currentWeekProgress: CurrentWeekProgress = {
		progress: [true, true, true, false, true, false, false],
		currentWeek: 1,
		currentDay: 4,
	};
	const greeting = "Good Morning!";
	const avatarURL = "https://i.pravatar.cc/150?img=32";
	const subGreeting = "Time to shine!";

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Header greeting={greeting} subGreeting={subGreeting} avatarURL={avatarURL} />
				<View style={styles.mainContent}>
					<HabitContainer heading="This week progress" currentWeekProgress={currentWeekProgress} />
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
						<TaskCard taskText="Meditate/Minful walking" /> */}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;