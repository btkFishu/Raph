import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/remote-config'

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5pi-GvV8eyVJlt5tC1ICXSSW8NWCqzJw",
  authDomain: "proflutter-e3263.firebaseapp.com",
  databaseURL: "https://proflutter-e3263.firebaseio.com",
  projectId: "proflutter-e3263",
  storageBucket: "proflutter-e3263.appspot.com",
  messagingSenderId: "461529304148",
  appId: "1:461529304148:web:1cd80d5f347b37c27431c1",
  measurementId: "G-V6M8GG9YS1"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const remoteConfig = firebase.remoteConfig();

export { db, remoteConfig };