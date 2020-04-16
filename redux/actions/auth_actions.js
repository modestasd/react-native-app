import {authConstants} from '../constants';
import deviceStorage from '../../helpers/storage';
import firebase from '../../helpers/firebase';
 
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
    dispatch(loginRequest());
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({user}) => {
          dispatch(loginSuccess({email: user.email, name: user.displayName}));
          deviceStorage.saveKey('authToken', user.uid);
        })
        .catch(err => {
            dispatch(loginFailure());
        });
};

  
const logoutSuccess = () => {
    return {
      type: authConstants.LOGOUT_SUCCESS,
    };
};
  

export const logout = () => dispatch => {
    firebase.auth().signOut()
        .then(()=>{
          deviceStorage.deleteKey('authToken');
          dispatch(logoutSuccess());
        })
        .catch((err)=>{
            console.log(err);
        });
};