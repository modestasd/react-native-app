import React,{useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Text, View, StyleSheet,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native';

import CalendarEvent from '../../components/calendar/CalendarEvent';
import CalendarDay from '../../components/calendar/CalendarDay';

import {getDayEvents} from '../../redux/actions';

const CalendarScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const daysScroller = useRef(null);

  const monthDays = route.params.monthDays;
  const [dateSelected, setDaySelected] = useState({year: new Date().getFullYear(), month: new Date().getMonth() +1, day:new Date().getDate()});
  const dayEvents = useSelector(({calendar}) => calendar.dayEvents);
  
  useEffect(() => {
    dispatch(getDayEvents(Object.values(dateSelected).join('-')));
  }, [dispatch,dateSelected]);

  const onDayClick = (index, day,month, year) => {
    //add clicked date
    daysScroller.current.scrollToIndex({animated: true, index: index});
    setDaySelected({year, month: month+1 , day});
  }

  return ( 
    <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <FlatList 
            data={monthDays}
            horizontal={true} 
            keyExtractor={item => item.day}
            numColumns={1}
            getItemLayout={(data, index) => (
              {length: 60, offset: 60 * index, index}
            )}
            ref={daysScroller}
            initialScrollIndex={5}
            renderItem={({ item,index}) =>{
            //change active styling, center to selected date, add today style
            return(
              <CalendarDay 
                isActive={dateSelected.day == item.day ? true : false} 
                dayName={item.dayName} 
                day={item.day} 
                month={item.month}
                year={item.year}
                onDayClick={onDayClick} 
                index={index}
              />
            )}
            }
          />
        </View> 
      {
        dayEvents.length > 0 ? 
          <FlatList
            data={dayEvents}
            numColumns={1}
            renderItem={({ item }) =>
              <CalendarEvent event={item} onEventPress={() => navigation.navigate('Event', {event: item} )}/>
            }
          />
        :
        <Text>Siandien ivykiu nera</Text>
      }
     
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendarContainer:{
    backgroundColor: 'white'
  },
  calendarHeader: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 10
  },
});
