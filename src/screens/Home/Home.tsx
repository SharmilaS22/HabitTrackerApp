import React from 'react';
import HabitContainer from '../../components/HabitContainer';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { Button } from 'react-native-paper';
import { CurrentWeekProgress } from '../../Schema/CurrentWeekProgress';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
});

interface HomeProps {
    navigation: {
        navigate: (screenName: string) => void
    }
}

const Home = ({ navigation }: HomeProps) => {
    // TODO: Replace this with data from the API
    const currentWeekProgress: CurrentWeekProgress = {
        progress: [true, true, true, false, true, false, false],
        currentWeek: 1,
        currentDay: 4,
    };
    const greeting = 'Good Morning!';
    const avatarURL = 'https://i.pravatar.cc/150?img=32';

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Header greeting={greeting} avatarURL={avatarURL} />
                <HabitContainer heading="This week progress" currentWeekProgress={currentWeekProgress} />
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('CreateHabit')}
                >
                    Create New Habit
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('HabitProgress')}
                >
                    Calendar
                </Button>
            </View>
        </SafeAreaProvider>
    )
};

export default Home;