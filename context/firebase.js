import { createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {}
if (process.env.NODE_ENV === "development") {
  firebaseConfig = require('../devFirebaseConfig').devFirebaseConfig
} else {
  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    projectId: 'elzr-me'
  }
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const FirebaseContext = createContext(firebase)

export default FirebaseContext