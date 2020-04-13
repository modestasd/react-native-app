import {servicesConstants} from '../constants';

const initialState = {
    services: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case servicesConstants.GET_SERVICES_REQUEST:
            return {
                ...state
            }
        case servicesConstants.GET_SERVICES_SUCCESS:
            return {
                ...state,
                services: action.payload
            }
        case servicesConstants.GET_SERVICES_FAILURE:
            return {
                ...state
            }
            
        default:
            return state;
    }
}