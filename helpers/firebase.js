// import firebase from 'firebase/app';
import * as firebase from 'firebase'  
import 'firebase/firestore';

import firebaseConfig from '../firebaseConfig';

//firebase expo bug 
const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
  if (body === '') {
    originalSend.call(this);
  } else {
    originalSend.call(this, body);
  }
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore(); 

export const storage = firebase.storage();
export const servicesCollection = firestore.collection('services');
export const eventsCollection = firestore.collection('events');

export default firebase;
