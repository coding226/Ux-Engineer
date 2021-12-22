import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRVgyUqfYU9nxtpKqeJF6f3jgMJQraca0",
    authDomain: "esp-test-ash.firebaseapp.com",
    databaseURL: "https://esp-test-ash-default-rtdb.firebaseio.com",
    projectId: "esp-test-ash",
    storageBucket: "esp-test-ash.appspot.com",
    messagingSenderId: "787187495476",
    appId: "1:787187495476:web:004f217f5fbc802c29d061"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

firebase.firestore().settings({
    host: "localhost:8080",
    ssl: false,
});


// firebase.functions().useFunctionsEmulator('http://localhost:5001');

export default firebase;
