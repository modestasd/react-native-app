import {authConstants,userConstants} from '../constants';

const initialState = {
    // user: {},
    //for testing
    user: {},
    isLoggingIn: false,
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
              isError: false,
              isLoggingIn: true
            }
        case authConstants.LOGIN_SUCCESS:
            return {
              ...state,
              user: action.payload,
              isLoggedIn: true,
              isLoggingIn: false
            }
        case authConstants.LOGIN_FAILURE:
            return {
              ...state,
              isError: true,
              isLoggingIn: false,
            }
        case authConstants.LOGOUT_SUCCESS:
            return {
              ...state,
              user: {},
              isLoggedIn: false,
            }
        case userConstants.UPDATE_PROFILE_SUCCESS: 
            return {
              ...state,
              user: action.payload,
            }
        default:
            return state;
    }
};