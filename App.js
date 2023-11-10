import { MD2DarkTheme as DefaultTheme, Icon, PaperProvider } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home/Home';
import CreateHabit from './src/screens/Home/CreateHabit';
import HabitProgress from './src/screens/Home/HabitProgress';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Tab = createBottomTabNavigator()

export default function App() {

  function getIconName(route, focused) {
    let iconName
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Calendar') {
      iconName = focused ? 'calendar' : 'calendar-outline';
    }
    return iconName;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = getIconName(route, focused);
              return <Icon
                source={iconName}
                color={color}
                size={size}
              />
            },
            tabBarActiveTintColor: "green", // Primary active icon color
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex"
              },
              null
            ]
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="CreateHabit" component={CreateHabit} />
          <Tab.Screen name="HabitProgress" component={HabitProgress} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );

}
