import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBm8eSfUelSgzCGTL0NbzrZ5-tz-tfnItA",
  authDomain: "cbtracker-8239d.firebaseapp.com",
  databaseURL: "https://cbtracker-8239d.firebaseio.com",
  projectId: "cbtracker-8239d",
  storageBucket: "cbtracker-8239d.appspot.com",
  messagingSenderId: "59843000432",
  appId: "1:59843000432:web:5e71fa5be1720ff690dcb5",
  measurementId: "G-92Z9Q3C5LW"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const databaseRef = firebase.database().ref();
export const checkRef = databaseRef.child("tracker");
