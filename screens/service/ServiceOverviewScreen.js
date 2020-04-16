import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';

import BottomIconsContainer from '../../components/layout/BottomIconsContainer';

const ServiceOverviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {name, price,duration, moreInfo, isActive} = route.params.service;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.mainView}>
        <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{name}</Text>
        <Text style={{ fontSize: 20}}>Trukme: {duration}}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20}}>Kaina: {price}</Text>
        <Text style={{ fontSize: 17}}>Papildoma informacija: {moreInfo}</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 20}}>{isActive ? 'Laikinai sustabdyti' : 'Aktyvuoti'}</Text>
        </TouchableOpacity>

      </View>

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='calendar-edit'
        leftOnClickHandler={() => navigation.goBack()}
        rightOnClickHandler={() => navigation.navigate('CreateService')}
      />

    </View>
  );
};

export default ServiceOverviewScreen;


const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    width: '85%',
    height: '80%',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10, 
    backgroundColor: 'white',
  }
})