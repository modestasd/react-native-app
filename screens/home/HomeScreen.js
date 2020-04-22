import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {getNearest} from '../../redux/actions';
import {getCalendarDays} from '../../helpers/calendar';

import MenuItem from '../../components/home/MenuItem';
import MenuEvent from '../../components/home/MenuEvent';
import ScreenWrapper from '../../components/layout/ScreenWrapper';

const HomeScreen = () => {
  const nearestEvent = useSelector(({events}) => events.nearestEvent);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getNearest());
  },[dispatch])
 
  return (
    <ScreenWrapper>
      <MenuEvent 
        nearestEvent={nearestEvent} 
        onPressEvent={() => navigation.navigate('Event', {event: nearestEvent})}
      />
      <MenuItem iconName='calendar' itemName='Kalendorius' onPressHandler={() => navigation.navigate('Calendar', {monthDays: getCalendarDays(new Date().getMonth(), new Date().getFullYear(), new Date().getDate())}
)} />
      <MenuItem iconName='car' itemName='Paslaugos' onPressHandler={() => navigation.navigate('Services')} />
      <MenuItem iconName='bar-chart' itemName='Statistika' onPressHandler={() => navigation.navigate('Statistic')} />
    </ScreenWrapper>
  );
};

export default HomeScreen;
