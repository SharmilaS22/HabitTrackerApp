import React from "react";
import { Text, StyleSheet } from "react-native";
import { useAppTheme } from "../../Theme";

const Heading2 = ({ text }: { text: string }) => {

    const { colors } = useAppTheme();

    const styles = StyleSheet.create({
        headingText: {
            marginVertical: 10,
            fontSize: 24,
            marginTop: 30,
            color: colors.onBackground,
        },
    });

    return (
        <Text style={styles.headingText}>{text}</Text>
    );
}

export default Heading2;