import {servicesConstants} from '../constants';

const initialState = {
    services: [],
    isCreating: false,
    isError: false,
    isCreated: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case servicesConstants.GET_SERVICES_REQUEST:
            return {
                ...state,
                services: []
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

         case servicesConstants.CREATE_SERVICE_REQUEST:
            return {
                ...state,
                isCreated: false,
                isError: false,
                isCreating: true
            }
        case servicesConstants.CREATE_SERVICE_SUCCESS:
            return {
                ...state,
                isCreated: true,
                isCreating: false
            }
        case servicesConstants.CREATE_SERVICE_FAILURE:
            return {
                ...state,
                isError: true,
                isCreating: false
            }           
        default:
            return state;
    }
}