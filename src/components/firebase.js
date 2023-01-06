import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDd0bFTl-82TZtFOrH7w_BEVMQEZZRASZw",
    authDomain: "learnshe-69e78.firebaseapp.com",
    projectId: "learnshe-69e78",
    storageBucket: "learnshe-69e78.appspot.com",
    messagingSenderId: "968869684109",
    appId: "1:968869684109:web:ed31de77dc2537551a13c4"
};

const app=firebase.initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

export {app,auth,db};