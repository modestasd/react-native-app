import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';

const CalendarEvent = ({event, onEventPress}) => {
  return (
    <TouchableOpacity style={styles.eventContainer} onPress={onEventPress}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{event.time}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{event.fullName}</Text>
        <Text style={styles.serviceText}>Paslauga: {event.service}</Text>
        <Text style={styles.carText}>Masina: {event.car}</Text>
      </View>
    </TouchableOpacity >
  );
};

export default CalendarEvent;

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: Dimensions.get("window").width - 20 ,
    height: 100,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5, 
    backgroundColor: 'white',
  },
  detailsContainer: {
    width: '65%',
    padding: 10,
  },
  nameText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 7
  },
  serviceText:{
    color: '#707070',
  },
  carText: {
    color: '#707070',
  },
  timeContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 20,
    width: '35%',
    backgroundColor: '#fafafa',
  },
  timeText: {
    fontSize: 14,
    fontWeight: 600,
    
  }

})