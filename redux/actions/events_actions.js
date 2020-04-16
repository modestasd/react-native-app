import {eventsConstants} from '../constants';

const getNearestRequest = () => {
    return {
      type: eventsConstants.GET_NEAREST_REQUEST
    };
};
  
const getNearestSuccess = (event) => {
    return {
      type: eventsConstants.GET_NEAREST_SUCCESS,
      payload: event
    };
};
  
const getNearestFailure = () => {
    return {
      type: eventsConstants.GET_NEAREST_FAILURE
    };
};

export const getNearest = () => dispatch => {
  const currentDate = new Date();
  const event ={date: '2020-04-05 10:00-11:00', fullName: 'John Smith', service: 'Padangu keitimas', car: 'Audi', moreDetails: 'Atvyksiu pasiimt masina uz savaites.'};
  dispatch(getNearestRequest());
  dispatch(getNearestSuccess(event));
}