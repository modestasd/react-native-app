import React, { useEffect } from 'react';
import {View, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {getNearest} from '../../redux/actions';
import MenuItem from '../../components/home/MenuItem';
import MenuEvent from '../../components/home/MenuEvent';

const HomeScreen = () => {
  const nearestEvent = useSelector(({events}) => events.nearestEvent);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getNearest());
  },[dispatch])
 
  return (
    <View style={styles.homeScreen}>
      <MenuEvent 
        nearestEvent={nearestEvent} 
        onPressEvent={() => navigation.navigate('Event', {event: nearestEvent})}
      />
      <MenuItem iconName='calendar' itemName='Kalendorius' onPressHandler={() => navigation.navigate('Calendar')} />
      <MenuItem iconName='car' itemName='Paslaugos' onPressHandler={() => navigation.navigate('Services')} />
      <MenuItem iconName='bar-chart' itemName='Statistika' onPressHandler={() => navigation.navigate('Statistic')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center'
  }
});
