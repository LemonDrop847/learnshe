import { Link } from "react-router-dom";
import {db} from './firebase';
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const Profile = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = doc(db, "users", user.email);
    const docSnap = await getDoc(docRef);
    const name= docSnap.data().name
    const skills= docSnap.data().email;
    const email  = docSnap.data().skillstring;
   
    return ( 
        <div className="profile">
            <div className="special">MyProfile Name: {name} email: {email} skills: {skills} </div>
        </div>
     );
}
 
export default Profile;