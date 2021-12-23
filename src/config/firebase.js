import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPq1LE5rYw28CSZovMHvxK3dyW7HS0xnM",
    authDomain: "advanced-app-dev-c4109.firebaseapp.com",
    projectId: "advanced-app-dev-c4109",
    storageBucket: "advanced-app-dev-c4109.appspot.com",
    messagingSenderId: "643906454752",
    appId: "1:643906454752:web:34cc757d176fb3d9163c85",
    measurementId: "G-5B0WD1T9HJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();


// =========================================
// firebase.firestore().settings({
//     host: "localhost:8080",
//     ssl: false,
// });
// ==========================================


// firebase.functions().useFunctionsEmulator('http://localhost:5001');

export default firebase;
