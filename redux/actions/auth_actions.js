import {authConstants} from '../constants';
import deviceStorage from '../../helpers/storage';
import firebase from '../../helpers/firebase';
 
export const loginRequest = () => {
    return {
      type: authConstants.LOGIN_REQUEST
    };
};
  
export const loginSuccess = (user) => {
    return {
      type: authConstants.LOGIN_SUCCESS,
      payload: user
    };
};
  
export const loginFailure = () => {
    return {
      type: authConstants.LOGIN_FAILURE,
    };
};

export const login = (email, password) => dispatch => { 
    dispatch(loginRequest());
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({user}) => {
          dispatch(loginSuccess({email: user.email, fullName: user.displayName, profileImage: user.photoURL}));
          deviceStorage.saveKey('authToken', user.uid);
        })
        .catch(err => {
            dispatch(loginFailure());
        });
};

  
export const logoutSuccess = () => {
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