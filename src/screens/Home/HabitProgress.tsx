import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Agenda, WeekCalendar } from 'react-native-calendars';
import { SegmentedButtons, Text } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

const HabitProgress = () => {
    const [selectedHabit, setSelectedHabit] = useState(null);
    // const [markedDates, setMarkedDates] = useState({});
    const [view, setView] = React.useState('month');
    const [showDropDown, setShowDropDown] = useState(false);

    const markingStyle = {
        // marked: true,
        selected: true,
        selectedColor: 'salmon' //TODO: Change to color of habit
    }

    const markedDates = {
        '2023-11-16': markingStyle,
        '2023-11-17': markingStyle,
    };

    const habits = [
        {
            label: "Exercise",
            value: "exercise",
        },
        {
            label: "Meditation",
            value: "meditation",
        },
        {
            label: "Duolingo",
            value: "duolingo",
        },
    ];

    // const handleHabitSelect = (habit: type) => {
    //     setSelectedHabit(habit);
    //     // Fetch the progress data for the selected habit and setMarkedDates
    // };

    return (
        <View>
            <DropDown
                label={"Select a Habit"}
                mode={"outlined"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={selectedHabit}
                setValue={setSelectedHabit}
                list={habits}
            />
            <SegmentedButtons
                value={view}
                onValueChange={setView}
                buttons={[
                    {
                        value: 'day',
                        label: 'Daily',
                    },
                    {
                        value: 'week',
                        label: 'Weekly',
                    },
                    {
                        value: 'month',
                        label: 'Monthly'
                    },
                ]}
            />
            {view === 'day' ?
                (
                    <Agenda
                        selected="2022-12-01"
                        items={{
                            '2023-12-01': [
                                { name: 'Cycling', height: 80, day: '2023-12-01' },
                                { name: 'Walking', height: 60, day: '2023-12-01' },
                                { name: 'Running', height: 100, day: '2023-12-01' }
                            ],
                            '2023-12-02': [{ name: 'Writing', height: 60, day: '2023-12-02' }]
                        }}
                        renderItem={(item, isFirst) => (
                            <TouchableOpacity style={styles.item}>
                                <Text style={styles.itemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                ) : 
                // view === 'week' ? 
                // <WeekCalendar /> :
                (<Calendar
                    style={{
                        height: 350
                    }}
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    markedDates={markedDates}
                />)
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    item: {
    //   backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17,
    },
    itemText: {
      color: '#888',
      fontSize: 16,
    }
  });

export default HabitProgress;