import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StatisticItem = ({iconName,onPressHandler,upperText, bottomText, backgroundColor}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.statisticItem, 
        backgroundColor === 'red' ? styles.redColor : backgroundColor === 'green' ? styles.greenColor : backgroundColor === 'purple' ? styles.purpleColor : null 
      ]}
    >
      <Text style={styles.statisticText}>{upperText}</Text>
      <FontAwesome name={iconName} size={35} color="white" />
      <Text style={styles.statisticNumber}>{bottomText}</Text>
    </TouchableOpacity>
  );
};

export default StatisticItem;

const styles = StyleSheet.create({
  statisticItem: {
    backgroundColor: '#35baf8',
    width: '40%',
    height: 120,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5

  },
  statisticText:{
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10
  },
  statisticNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  redColor: {
    backgroundColor: '#ff7491',
  },
  greenColor: {
    backgroundColor: '#00A86B',
  },
  purpleColor: {
    backgroundColor: '#9571fd'
  }
});