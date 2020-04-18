import {userConstants} from '../constants';
import firebase from '../../helpers/firebase';
 
export const updateProfileRequest = () => {
    return {
      type: userConstants.UPDATE_PROFILE_REQUEST
    };
};
  
export const updateProfileSuccess = (updatedUser) => {
    return {
      type: userConstants.UPDATE_PROFILE_SUCCESS,
      payload: updatedUser
    };
};
  
export const updateProfileFailure = () => {
    return {
      type: userConstants.UPDATE_PROFILE_FAILURE,
    };
};

export const updateProfile = (fullName,profileImage) => async  dispatch => { 
  dispatch(updateProfileRequest());
  let storage = firebase.storage();
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      dispatch(updateProfileFailure());
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
                                dispatch(updateProfileSuccess({email: user.email, fullName: user.displayName, profileImage: user.photoURL}));
                           })
                           .catch(err => {
                              dispatch(updateProfileFailure());
                           })
                    })
                }, error => {
                    dispatch(updateProfileFailure());
                }) 
        })
        .catch((err) => {
            dispatch(updateProfileFailure());
        });
};

