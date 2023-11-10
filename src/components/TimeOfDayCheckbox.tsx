import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  checkbox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#000',
  },
  checkboxText: {
    fontSize: 12,
  },
  checkedCheckboxText: {
    color: '#fff',
  },
});

const TimeOfDayCheckbox = ({ timeOfDay, checked, onToggle }) => {
  const icons = {
    morning: 'weather-sunset-up',
    afternoon: 'weather-sunny',
    evening: 'weather-sunset-down',
  };

  return (
    <TouchableOpacity
      style={[styles.checkbox, checked && styles.checkedCheckbox]}
      onPress={onToggle}
    >
      <MaterialCommunityIcons name={icons[timeOfDay]} size={24} color={checked ? '#fff' : '#000'} />
      <Text style={[styles.checkboxText, checked && styles.checkedCheckboxText]}>{timeOfDay}</Text>
    </TouchableOpacity>
  );
};

export default TimeOfDayCheckbox;