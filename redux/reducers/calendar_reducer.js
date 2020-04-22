import {calendarConstants} from '../constants';

const initialState = {
    dayEvents: [],
    isLoading: false,
    isLoaded: false,
    isError: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case calendarConstants.GET_DAY_EVENTS_REQUEST:
            return {
                ...state,
                dayEvents: [],
                isLoading: true,
                isLoaded: false,
                isError: false
            }
        case calendarConstants.GET_DAY_EVENTS_SUCCESS:
            return {
                ...state,
                dayEvents: action.payload,
                isLoading: false,
                isLoaded: true
            }
        case calendarConstants.GET_DAY_EVENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            
        default:
            return state;
    }
};