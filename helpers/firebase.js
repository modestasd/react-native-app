// import firebase from 'firebase/app';
import * as firebase from 'firebase'  

import firebaseConfig from '../firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// const firestore = firebase.firestore();

// export const servicesCollection = firestore.collection('services');
// export const eventsCollection = firestore.collection('events');