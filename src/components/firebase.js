import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKwqIldemsrjSCwK4psVblyPiPCrLs87g",
    authDomain: "learnshe-aa485.firebaseapp.com",
    projectId: "learnshe-aa485",
    storageBucket: "learnshe-aa485.appspot.com",
    messagingSenderId: "30848289886",
    appId: "1:30848289886:web:602e77c93c53be836c78cf"
  };

const app=firebase.initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

export {app,auth,db};