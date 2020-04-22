import {authConstants} from '../constants';
import deviceStorage from '../../helpers/storage';
import firebase from '../../helpers/firebase';
import {actionCreator} from '../../helpers/redux';

export const login = (email, password) => dispatch => { 
    dispatch(actionCreator(authConstants.LOGIN_REQUEST));
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({user}) => {
          dispatch(actionCreator(authConstants.LOGIN_SUCCESS, {email: user.email, fullName: user.displayName, profileImage: user.photoURL}));
          deviceStorage.saveKey('authToken', user.uid);
        })
        .catch(err => {
          dispatch(actionCreator(authConstants.LOGIN_FAILURE));
        });
};

export const logout = () => dispatch => {
    firebase.auth().signOut()
        .then(()=>{
          deviceStorage.deleteKey('authToken');
          dispatch(actionCreator(authConstants.LOGOUT_SUCCESS));
        })
        .catch((err)=>{
            console.log(err);
        });
};