import firebase from 'firebase/app';
//my firebase config
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
