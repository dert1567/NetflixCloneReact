import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// we need so smoehow seed the database

// we need a config herer
const config = {
    apiKey: "AIzaSyBk07C8w61aVdzNm4EPSOIbEqo-0-LR4Vk",
    authDomain: "netflix-1b680.firebaseapp.com",
    databaseURL: "https://netflix-1b680.firebaseio.com",
    projectId: "netflix-1b680",
    storageBucket: "netflix-1b680.appspot.com",
    messagingSenderId: "562880699250",
    appId: "1:562880699250:web:25a851c2b8180227f8dbeb",
};

const firebase = Firebase.initializeApp(config);



export {firebase};

