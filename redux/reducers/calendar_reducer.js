import {calendarConstants} from '../constants';

const initialState = {
    dayEvents: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case calendarConstants.GET_DAY_EVENTS_REQUEST:
            return {
                ...state
            }
        case calendarConstants.GET_DAY_EVENTS_SUCCESS:
            return {
                ...state,
                dayEvents: action.payload
            }
        case calendarConstants.GET_DAY_EVENTS_FAILURE:
            return {
                ...state
            }
            
        default:
            return state;
    }
};