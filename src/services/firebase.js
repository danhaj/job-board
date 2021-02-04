import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_-FcuUKOh41szdIP3YqeGd_GtaWygD9k',
  authDomain: 'job-board-e00f3.firebaseapp.com',
  databaseURL: 'https://job-board-e00f3.firebaseio.com',
  projectId: 'job-board-e00f3',
  storageBucket: 'job-board-e00f3.appspot.com',
  messagingSenderId: '471431940840',
  appId: '1:471431940840:web:283ce983752bb76187575d',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
