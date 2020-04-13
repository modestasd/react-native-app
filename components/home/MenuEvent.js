import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuEvent = ({nearestEvent,}) => {
  const navigation = useNavigation();
 
  return (
      <TouchableOpacity
        style={styles.nearestContainer}
        onPress={() => navigation.navigate('Event', {event: nearestEvent} )}
      >
        <Text style={styles.headerText}>Artimiausi ivykiai</Text>
        <Text style={styles.detailsText} > {nearestEvent && nearestEvent.fullName}</Text>
        <Text style={styles.detailsText}> {nearestEvent &&  nearestEvent.service}</Text>
        <Text  style={styles.timeText}> {nearestEvent && nearestEvent.date && nearestEvent.date.toLocaleString()}</Text>
      </TouchableOpacity>
  );
};

export default MenuEvent;

const styles = StyleSheet.create({
 nearestContainer: {
    alignItems: 'center',
    width: '85%',
    height: '30%',
    marginTop: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10, 
    backgroundColor: 'white',
  },
  headerText:{
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fafafa',
    width: '100%',
    textAlign: 'center',
    padding: 12,
    height: 50,
    marginBottom: 20
  },
  detailsText: {
    fontSize: 16,
    paddingVertical: 5,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
  },
});
