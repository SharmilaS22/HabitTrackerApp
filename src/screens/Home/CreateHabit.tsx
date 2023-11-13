import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DayCheckbox from "../../components/DayCheckBox";
import TimeOfDayCheckbox from "../../components/TimeOfDayCheckbox";
import CustomAppBar from "../../components/CustomAppBar";
import { useAppTheme } from "../../../Theme";
import { TimeOfDay } from "../../Schema/HtTypes";

interface CreateHabitProps {
	navigation: {
		navigate: (screenName: string) => void,
		goBack: () => void
	},
}

const CreateHabit = ({ navigation }: CreateHabitProps) => {

	const { colors } = useAppTheme();

	const [title, setTitle] = React.useState("");
	const [days, setDays] = React.useState([false, false, false, false, false, false, false]);
	const [timeOfDay, setTimeOfDay] = React.useState(TimeOfDay.MORNING);

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			height: "100%"
		},
		habitForm: {
			display: "flex",
			flexDirection: "column",
			marginTop: 10,
			marginHorizontal: 25,
			alignItems: "center"
		},
		input: {
			marginVertical: 20,
			marginHorizontal: 10,
			width: "100%"
		},
		checkboxContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			marginVertical: 20,
		},
		timeOfDayContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			marginVertical: 20,
		},
		createHabitButton: {
			marginTop: 30,
			borderRadius: 20,
		},
	});

	const handleCreateHabit = () => {
		const newHabit = {
			title,
			days,
			timeOfDay
		};
		console.log(newHabit);
	};

	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const timesOfDay: TimeOfDay[] = Object.values(TimeOfDay);

	return (
		<View style={styles.container}>
			<CustomAppBar goBack={navigation.goBack} />

			<View style={styles.habitForm}>

				<TextInput
					label="Habit Title"
					value={title} onChangeText={setTitle}
					style={styles.input}
					mode="outlined"
				/>

				<View style={styles.checkboxContainer}>
					{daysOfWeek.map((day, index) => (
						<View key={index}>
							<DayCheckbox day={day} checked={days[index]} onToggle={() => {
								const newDays = [...days];
								newDays[index] = !newDays[index];
								setDays(newDays);
							}} />
						</View>
					))}
				</View>

				<View style={styles.timeOfDayContainer}>
					{timesOfDay.map((time, index) => (
						<View key={index}>
							<TimeOfDayCheckbox
								timeOfDay={time}
								checked={timeOfDay === time}
								onToggle={() => setTimeOfDay(time)}
							/>
						</View>
					))}
				</View>

				<Button
					mode="contained"
					onPress={handleCreateHabit}
					style={styles.createHabitButton}
				>
					Create Habit
				</Button>

			</View>
		</View>
	);
};

export default CreateHabit;