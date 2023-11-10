import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';
import DayCheckbox from '../../components/DayCheckBox';
import TimeOfDayCheckbox from '../../components/TimeOfDayCheckbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#bba232',
  },
  input: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeOfDayButton: {
    marginRight: 10,
  },
  createButton: {
    backgroundColor: '#2324',
    color: '#fff',
  },
});

const CreateHabit = () => {
  const [title, setTitle] = React.useState('');
  const [days, setDays] = React.useState([false, false, false, false, false, false, false]);
  const [timeOfDay, setTimeOfDay] = React.useState('morning');

  const handleCreateHabit = () => {
    // Handle the creation of the habit here
  };


  // Inside CreateHabit component
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timesOfDay = ['Morning', 'Afternoon', 'Evening'];

  return (
    <View style={styles.container}>

      <TextInput label="Habit Title" value={title} onChangeText={setTitle} style={styles.input} />

      <View style={styles.checkboxContainer}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.checkbox}>
            <DayCheckbox day={day} checked={days[index]} onToggle={() => {
              const newDays = [...days];
              newDays[index] = !newDays[index];
              setDays(newDays);
            }} />
          </View>
        ))}
      </View>

{/* use segmented button from rn paper lib */}
      <View style={styles.timeOfDayContainer}>
        {timesOfDay.map((time, index) => (
          <View key={index} style={styles.checkbox}>
            <TimeOfDayCheckbox
              timeOfDay={time}
              checked={timeOfDay === time}
              onToggle={() => setTimeOfDay(time)}
            />
          </View>
        ))}
      </View>

      <Button mode="contained" onPress={handleCreateHabit} style={styles.createButton}>Create Habit</Button>

    </View>
  );
};

export default CreateHabit;