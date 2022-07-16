import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh5Q049WLl00pMZJc5zdWEiR2TMwdqcuw",
  authDomain: "hfconsultancy-b535d.firebaseapp.com",
  projectId: "hfconsultancy-b535d",
  storageBucket: "hfconsultancy-b535d.appspot.com",
  messagingSenderId: "875865455516",
  appId: "1:875865455516:web:754b5491eac74dfb9e6659"
};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;