import {eventsConstants} from '../constants';

const initialState = {
    nearestEvent: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case eventsConstants.GET_NEAREST_REQUEST:
            return {
                ...state
            }
        case eventsConstants.GET_NEAREST_SUCCESS:
            return {
                ...state,
                nearestEvent: action.payload
            }
        case eventsConstants.GET_NEAREST_FAILURE:
            return {
                ...state
            }
            
        default:
            return state;
    }
}