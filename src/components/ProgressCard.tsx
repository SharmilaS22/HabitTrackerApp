import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import HabitDot from "./HabitDot";
import { useAppTheme } from '../../Theme';
import { DateProgress } from '../Schema/WeekProgress';

interface ProgressCardProps {
    taskName: string,
    progress: DateProgress[],
    currentDay: string,
}

const ProgressCard = ({ taskName, progress, currentDay }: ProgressCardProps) => {

    const { colors } = useAppTheme();

    const styles = StyleSheet.create({
        container: {
            justifyContent: "flex-start",
            padding: 16,
            marginVertical: 10,
            backgroundColor: colors.surfaceContainerHighest,
            width: "100%",
            borderRadius: 5,
        },
        heading: {
            marginBottom: 10,
            flex: 1,
			fontSize: 18,
            color: colors.onSurfaceVariant,
        },
        progressCard: {
            alignSelf: "center",
            flexDirection: "row",
            flexWrap: "wrap",
        }
    });

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>{taskName}</Text>
                <View style={styles.progressCard}>
                    {progress.map(({ date, status }, index) => (
                        <HabitDot key={index} day={date} status={status} currentDay={currentDay} />
                    ))}
                </View>
            </View>
        </View>
    );
}

export default ProgressCard;