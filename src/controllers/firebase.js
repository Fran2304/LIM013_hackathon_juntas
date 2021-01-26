import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCROHQquUMlnYu0xe-avafnxu6VNraa5qE",
    authDomain: "proyecto-juntas-51dc9.firebaseapp.com",
    projectId: "proyecto-juntas-51dc9",
    storageBucket: "proyecto-juntas-51dc9.appspot.com",
    messagingSenderId: "388107486334",
    appId: "1:388107486334:web:c0911db9cb97e5e8d6c42f"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();