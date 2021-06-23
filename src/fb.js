import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyACWHVnJeCrRCcPXTJoC1DxHGAruJ20crQ",
    authDomain: "task-tracker-3055a.firebaseapp.com",
    databaseURL: "https://task-tracker-3055a-default-rtdb.firebaseio.com",
    projectId: "task-tracker-3055a",
    storageBucket: "task-tracker-3055a.appspot.com",
    messagingSenderId: "6860320372",
    appId: "1:6860320372:web:2b2a76eaf9c4e2e09deb21",
    measurementId: "G-YK3SWKBHTF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});
export default db;