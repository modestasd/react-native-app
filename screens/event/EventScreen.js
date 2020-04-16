import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useNavigation,useRoute } from '@react-navigation/native';
import BottomIconsContainer from '../../components/layout/BottomIconsContainer';

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {date, fullName,service, car, moreDetails} = route.params.event;
    
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.mainView}>
        <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{fullName}</Text>
        <Text style={{ fontSize: 20}}>{date}</Text>
        <Text style={{ fontSize: 20}}>Paslauga: {service}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20}}>Masina: {car}</Text>
        <Text style={{ fontSize: 17}}>Papildoma informacija: {moreDetails}</Text>

      </View>

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='email-outline'
        leftOnClickHandler={() => navigation.navigate('Home')}
        rightOnClickHandler={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    width: '85%',
    height: '80%',
    marginVertical: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10, 
    backgroundColor: 'white',
  }
});
