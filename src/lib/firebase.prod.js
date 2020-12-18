import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// we need so smoehow seed the database

// we need a config herer
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "´",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

const firebase = Firebase.initializeApp(config);



export {firebase};

