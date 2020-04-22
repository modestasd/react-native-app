import {userConstants} from '../constants';
import firebase,{storage} from '../../helpers/firebase';
import {actionCreator} from '../../helpers/redux';


export const updateProfile = (fullName,profileImage) => async  dispatch => { 
  dispatch(actionCreator(userConstants.UPDATE_PROFILE_REQUEST));

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      dispatch(actionCreator(userConstants.UPDATE_PROFILE_FAILURE));
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', profileImage, true);
    xhr.send(null);
  });

    let user = firebase.auth().currentUser;

    user.updateProfile({displayName:fullName})
        .then(() => {
          const upload = storage.ref(`userImages/${user.uid}`).child('profile_photo').put(blob)
                upload.on('state_changed', () => {
                    storage.ref(`userImages/${user.uid}`).child('profile_photo').getDownloadURL().then(url => {
                        user.updateProfile({photoURL : url})
                            .then(() => {  
                                dispatch(actionCreator(userConstants.UPDATE_PROFILE_SUCCESS, {email: user.email, fullName: user.displayName, profileImage: user.photoURL}));
                           })
                           .catch(() => {
                              dispatch(actionCreator(userConstants.UPDATE_PROFILE_FAILURE));
                           })
                    })
                }, () => {
                    dispatch(actionCreator(userConstants.UPDATE_PROFILE_FAILURE));
                }) 
        })
        .catch(() => {
          dispatch(actionCreator(userConstants.UPDATE_PROFILE_FAILURE));
        });
};

