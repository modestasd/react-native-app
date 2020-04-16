import React,{useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native';

import CalendarEvent from '../../components/calendar/CalendarEvent';
import CalendarDay from '../../components/calendar/CalendarDay';

import {getDayEvents} from '../../redux/actions';

const CalendarScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const daysScroller = useRef(null);

  const [daySelected, setDaySelected] = useState(new Date().getDate());
  const dayEvents = useSelector(({calendar}) => calendar.dayEvents);


  useEffect(() => {
    dispatch(getDayEvents(daySelected));
  }, [dispatch,daySelected]);

  const onDayClick = (index, day) => {
    //add clicked date
    if(index > 2){
      index = day - 2
    }
    daysScroller.current.scrollToIndex({animated: true, index: index});
    setDaySelected(day);
  }

  return ( 
    <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <FlatList 
            data={testData}
            horizontal={true} 
            numColumns={1}
            getItemLayout={(data, index) => (
              {length: 60, offset: 60 * index, index}
            )}
            ref={daysScroller}
            //redo in the future to get index on load
            initialScrollIndex={daySelected - 3}
            renderItem={({ item,index}) =>
            //change active styling, center to selected date, add today style
              <CalendarDay 
                isActive={daySelected == item.date ? true : false} 
                dayName={item.day} 
                day={item.date} 
                onDayClick={onDayClick} 
                index={index}
              />
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


})

const testData = [
  {id: 1, date: 1, day: 'Pirm'},
  {id: 2, date: 2, day: 'Antr'},
  {id: 3,date: 3, day: 'Trec'},
  {id: 4,date: 4, day: 'Ketv'},
  {id: 5,date: 5, day: 'Penkt'},
  {id: 6,date: 6, day: 'Sest'},
  {id: 7,date: 7, day: 'Sekm'},
  {id: 8,date: 8, day: 'Pirm'},
  {id: 9,date: 9, day: 'Antr'},
  {id: 10,date: 10, day: 'Trec'},
  {id: 11,date: 11, day: 'Ketv'},
  {id: 12,date: 12, day: 'Penkt'},
  {id: 13,date: 13, day: 'Sest'},
  {id:14,date: 14, day: 'Sekm'},
]