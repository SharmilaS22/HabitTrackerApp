import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitDot from './HabitDot';
import { CurrentWeekProgress } from '../Schema/CurrentWeekProgress';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  habitDotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

interface HabitContainerProps {
  heading: string,
  currentWeekProgress: CurrentWeekProgress,
}

const HabitContainer = ({ heading, currentWeekProgress }: HabitContainerProps) => {
  const { progress, currentDay, currentWeek } = currentWeekProgress;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.habitDotContainer}>
        {progress.map((checked: boolean, index: number) => (
          <HabitDot key={index} day={index} checked={checked} currentDay={currentDay} />
        ))}
      </View>
    </View>
  );
};

export default HabitContainer;