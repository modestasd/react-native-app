import {calendarConstants} from '../constants';
import {actionCreator} from '../../helpers/redux';
import {eventsCollection} from '../../helpers/firebase';

export const getDayEvents = (date) => dispatch => {
    dispatch(actionCreator(calendarConstants.GET_DAY_EVENTS_REQUEST));
    console.log(date);

    let dayEvents = [];
    eventsCollection.where("date.date", "==", date).orderBy("date", "asc").get()
    .then(snapshot => {
        snapshot.forEach(doc=>{
            dayEvents.push({id: doc.id, ...doc.data()});
        });
        dispatch(actionCreator(calendarConstants.GET_DAY_EVENTS_SUCCESS, dayEvents));
    })
    .catch(err=> {
        console.log(err);
        dispatch(actionCreator(calendarConstants.GET_DAY_EVENTS_FAILURE));
    });
};

const getNearestEvent = () => dispatch => {

}