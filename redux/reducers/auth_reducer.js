import {authConstants} from '../constants';

const initialState = {
    // user: {},
    //for testing
    user: {
    id:'1', 
    fullName: 'John Smith', 
    email: 'johh@smith.com', 
    company: 'Masinu salono pavadinimas', 
    role: 'worker'
  },
    //set to false after testing
    isLoggedIn: true,
    isError: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return {
              ...state,
              user: {},
              isLoggedIn: false,
              isError: false
            }
        case authConstants.LOGIN_SUCCESS:
            return {
              ...state,
              user: action.payload,
              isLoggedIn: true,
            }
        case authConstants.LOGIN_FAILURE:
            return {
              ...state,
              isError: true
            }
        case authConstants.LOGOUT_SUCCESS:
            return {
              ...state,
              user: {},
              isLoggedIn: false,
            }
        default:
            return state;
    }
};