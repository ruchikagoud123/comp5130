import firebase from "firebase/app";
import "firebase/auth";   // For authentication
import "firebase/firestore"; // For Firestore database

const firebaseConfig = {
    apiKey: "AIzaSyDB9ZuwuDVLIu_h06DRHWCWS_ZRBWtC31c",
    authDomain: "erasenote.firebaseapp.com",
    projectId: "erasenote",
    storageBucket: "erasenote.appspot.com",
    messagingSenderId: "200720263716",
    appId: "1:200720263716:web:a3c2449cef8746a4c946b1",
    measurementId: "G-6M07HS3KHH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

