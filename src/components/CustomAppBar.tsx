import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useAppTheme } from "../../Theme";
import { IconName } from "../Schema/IconName";

interface CustomAppBarProps {
	iconList?: [IconName] //scalable w/ functions
	goBack: () => void
}

const CustomAppBar = ({ goBack }: CustomAppBarProps) => {
	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		header: {
			backgroundColor: colors.surface
		},
	});

	return (
		<Appbar.Header style={styles.header}>
			<Appbar.BackAction onPress={() => { goBack(); }} />
			<Appbar.Content title="Create a new Habit" />
			{/* <Appbar.Action icon="calendar" onPress={() => { }} />
			<Appbar.Action icon="magnify" onPress={() => { }} /> */}
			{/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
		</Appbar.Header>
	);
};

export default CustomAppBar;