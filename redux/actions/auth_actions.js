import {authConstants} from '../constants';
import deviceStorage from '../../helpers/storage';

const loginRequest = () => {
    return {
      type: authConstants.LOGIN_REQUEST
    };
};
  
const loginSuccess = (user) => {
    return {
      type: authConstants.LOGIN_SUCCESS,
      payload: user
    };
};
  
const loginFailure = () => {
    return {
      type: authConstants.LOGIN_FAILURE,
      payload: true
    };
};

export const login = (email, password) => dispatch => {
  //move to firebase in the future
  const user ={
    id:'1', 
    fullName: 'John Smith', 
    email: 'johh@smith.com', 
    company: 'Masinu salono pavadinimas', 
    role: 'worker'
  }; 
  deviceStorage.saveKey('authToken',user.id);
  // dispatch(loginRequest());
  dispatch(loginSuccess(user));
}

  
const logoutSuccess = () => {
    return {
      type: authConstants.LOGOUT_SUCCESS,
    };
};
  

export const logout = () => dispatch => {
  //move to firebase in the future
  deviceStorage.deleteKey('authToken');
  dispatch(logoutSuccess());
}