import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';

const CalendarDay = ({dayName, day, onDayClick,isActive, index}) => {
  return ( 
    <TouchableOpacity style={styles.calendarDays} onPress={() => onDayClick(index, day)}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.calendarDayName}>{dayName}</Text>
        <View style={isActive ? styles.activeCalendarDayContainer : styles.calendarDayContainer}>
          <Text style={isActive ? styles.activeCalendarDayNumber : styles.calendarDayNumber}>{day}</Text>
        </View>
      </View>
    </TouchableOpacity >
  );
};

export default CalendarDay;

const styles = StyleSheet.create({
  calendarDays: {
    width: 60,
  },
  calendarDayName: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 5,
    height: 20
  },
  calendarDayNumber: {
    fontSize: 18,
    fontWeight: '600',
    height: 40,
    textAlign: 'center'
  }, 
  calendarDayContainer:{
    height: 40,
    width: '100%',
    padding: 5,
  },
  activeCalendarDayContainer: {
    backgroundColor: '#4169e1',
    height: 35,
    width: '60%',
    padding: 5,
    borderRadius: 50,
  },
  activeCalendarDayNumber: { 
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
})