import React from "react";
import HabitContainer from "../../components/HabitContainer";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { Button } from "react-native-paper";
import { CurrentWeekProgress } from "../../Schema/CurrentWeekProgress";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../../../Theme";

interface HomeProps {
	navigation: {
		navigate: (screenName: string) => void
	},
}

const Home = ({ navigation }: HomeProps) => {

	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.dark,
			height: "100%",
			justifyContent: "flex-start"
		}
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
				<HabitContainer heading="This week progress" currentWeekProgress={currentWeekProgress} />
				<Button
					mode="contained"
					onPress={() => navigation.navigate("CreateHabit")}
					textColor={colors.white}
					buttonColor={colors.secondary}
				>
					Create New Habit
				</Button>
				<Button
					mode="contained"
					onPress={() => navigation.navigate("HabitProgress")}
					textColor={colors.white}
					buttonColor={colors.secondary}
				>
					Calendar
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default Home;