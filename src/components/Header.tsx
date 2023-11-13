import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { useAppTheme } from "../../Theme";

interface HeaderProps {
	greeting: string,
	avatarURL: string,
	subGreeting: string,
}

const Header = ({ greeting, avatarURL, subGreeting }: HeaderProps) => {
	const { colors } = useAppTheme();

	const styles = StyleSheet.create({
		header: {
			paddingHorizontal: 20,
			color: "yellow",
			display: "flex",
			flexWrap: "nowrap",
			alignItems: "center",
			alignContent: "flex-start",
			flexDirection: "row"
		},
		avatar: {
			padding: 20
		},
		greetingContainer: {
		},
		greeting: {
			fontWeight: "bold",
			fontSize: 23,
			color: colors.onBackground
		},
		subGreeting: {
			color: colors.onBackground,
			fontSize: 15
		}
	});
	return (
		<View style={styles.header}>
			<View style={styles.avatar}>
				<Avatar.Image size={54} source={{ uri: avatarURL }} />
			</View>
			<View style={styles.greetingContainer}>
				<Text style={styles.greeting}>{greeting}</Text>
				<Text style={styles.subGreeting}>{subGreeting}</Text>
			</View>
		</View>
	);
};

export default Header;