import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import StatisticItem from '../../components/statistic/StatisticItem';
 
const StatisticScreen = () => {
  return (
    <View style={{ flex: 1 }}>

        <TouchableOpacity style={styles.mainDiagram}>
          <Text>Diagrama</Text>
        </TouchableOpacity>

      <View style={styles.statisticContainer}>
        <StatisticItem iconName='car' upperText='Is viso uzsakymu' bottomText='120' />
        <StatisticItem iconName='money' backgroundColor='purple' upperText='Uzdirbta' bottomText='~17000$' />
      </View>

      <View style={styles.statisticContainer}>
        <StatisticItem iconName='check' backgroundColor='green' upperText='Ivykdyti' bottomText='110' />
        <StatisticItem iconName='remove' backgroundColor='red' upperText='Atsaukti' bottomText='10' />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainDiagram: {
    width: '86%',
    height: '45%',
    marginHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 20
  },
  statisticContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default StatisticScreen;