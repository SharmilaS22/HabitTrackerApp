import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAppTheme } from "../../Theme";

interface TaskCardProps {
  taskText: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ taskText }) => {
	const [isChecked, setIsChecked] = useState(false);

	const {colors} = useAppTheme();

	const styles = StyleSheet.create({
		card: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			padding: 16,
			marginVertical: 10,
			backgroundColor: colors.surfaceContainerHighest,
			width: "100%",
			borderRadius: 5,
		},
		checkedCard: {
			backgroundColor: colors.surfaceContainer,
		},
		taskText: {
			flex: 1,
			fontSize: 18,
			color: colors.onSurfaceVariant,
		},
		checkedTaskText: {
			color: colors.primary,
			textDecorationLine: "line-through",
			fontStyle: "italic",
		},
		checkbox: {
			marginLeft: 10,
			width: 26,
			height: 26,
			borderRadius: 20,
			borderWidth: 2,
			borderColor: colors.primary,
			backgroundColor: "transparent",
		},
		checkedCheckbox: {
			backgroundColor: colors.primary,
		},
	});


	const handleCheckboxToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<TouchableOpacity
			style={[
				styles.card,
				isChecked ? styles.checkedCard : null,
			]}
			onPress={handleCheckboxToggle}
		>
			<Text style={[styles.taskText, isChecked? styles.checkedTaskText: null]}>{taskText}</Text>
			<View style={[styles.checkbox, isChecked ? styles.checkedCheckbox : null]}></View>
		</TouchableOpacity>
	);
};

export default TaskCard;
