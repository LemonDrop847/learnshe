import { Link } from "react-router-dom";
import { db } from "./firebase";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Profile = () => {
    return ( 
        <div className="profile">
            <div className="special">MyProfile</div>
        </div>
     );
}
 
export default Profile;
