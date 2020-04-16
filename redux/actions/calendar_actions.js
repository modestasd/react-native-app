import {calendarConstants} from '../constants';

const getDayEventsRequest = () => {
    return {
      type: calendarConstants.GET_DAY_EVENTS_REQUEST
    };
};
  
const getDayEventsSuccess = (events) => {
    return {
      type: calendarConstants.GET_DAY_EVENTS_SUCCESS,
      payload: events
    };
};
  
const getDayEventsFailure = () => {
    return {
      type: calendarConstants.GET_DAY_EVENTS_FAILURE
    };
};

export const getDayEvents = (date) => dispatch => {
  //to add in future


    // dispatch(getDayEventsRequest());
    // let dayEvents = [];

    // try {
    //     eventsCollection
    //       .where("date", ">=", date)
    //       .orderBy("date", "asc")
    //         .onSnapshot(snapshot => {
    //           snapshot.forEach(doc=>{
    //               let event = {};
    //               event.eventName = doc.data().eventName;
    //               event.date = doc.data().date;
    //               event.car = doc.data().car;
    //               event.customerFullName = doc.data().customerFullName;
    //               event.isDone = doc.data().isDone;

    //               dayEvents.push(event);
    //           });
    //           dispatch(getDayEventsSuccess(dayEvents));
    //         });
    // } catch (error) {
    //     dispatch(getDayEventsFailure());
    // }

  const events = [
    {id:'1', time: '08:00-10:00', fullName: 'John Smith', service: 'Padangu keitimas', car: 'Audi', day: 10},
    {id:'2',time: '10:30-12:00', fullName: 'Smith John', service: 'Masinos dazymas', car: 'Peugeot', day: 10 },
    {id:'3',time: '12:00-14:00', fullName: 'Sohn Jmith', service: 'Sviesu patikra', car: 'Volvo', day: 10},
    {id:'4',time: '14:00-14:30', fullName: 'Jmith Sohn', service: 'Bendra apziura', car: 'Volvo', day: 10},
    {id:'5',time: '15:00-16:00', fullName: 'Ohns Mith', service: 'Bendra apziura', car: 'Bmw', day: 10},
    {id:'6',time: '16:00-18:00', fullName: 'Shn Sdtih', service: 'Padangu keitimas', car: 'Toyota', day: 10},

    {id:'1', time: '08:00-10:00', fullName: 'John Smith', service: 'Padangu keitimas', car: 'Audi', day: 7},
    {id:'2',time: '10:30-12:00', fullName: 'Smith John', service: 'Masinos dazymas', car: 'Peugeot', day: 11},
    {id:'3',time: '12:00-14:00', fullName: 'Sohn Jmith', service: 'Sviesu patikra', car: 'Volvo', day: 8},
    {id:'4',time: '14:00-14:30', fullName: 'Jmith Sohn', service: 'Bendra apziura', car: 'Volvo', day: 2},
    {id:'5',time: '15:00-16:00', fullName: 'Ohns Mith', service: 'Bendra apziura', car: 'Bmw', day: 11},
    {id:'6',time: '16:00-18:00', fullName: 'Shn Sdtih', service: 'Padangu keitimas', car: 'Toyota', day: 11},
  ]; 
  dispatch(getDayEventsRequest());
  dispatch(getDayEventsSuccess(events.filter(item  => item.day === date)));
}