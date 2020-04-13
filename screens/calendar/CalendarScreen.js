import React,{useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet,FlatList} from 'react-native';

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
              <CalendarDay isActive={daySelected == item.date ? true : false} dayName={item.day} day={item.date} onDayClick={onDayClick} index={index} />
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
  {date: 1, day: 'Pirm'},
  {date: 2, day: 'Antr'},
  {date: 3, day: 'Trec'},
  {date: 4, day: 'Ketv'},
  {date: 5, day: 'Penkt'},
  {date: 6, day: 'Sest'},
  {date: 7, day: 'Sekm'},
  {date: 8, day: 'Pirm'},
  {date: 9, day: 'Antr'},
  {date: 10, day: 'Trec'},
  {date: 11, day: 'Ketv'},
  {date: 12, day: 'Penkt'},
  {date: 13, day: 'Sest'},
  {date: 14, day: 'Sekm'},
]