import { Link } from "react-router-dom";
import {db} from './firebase';
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const Profile = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [userName, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [email, setEmail] = useState("");
    const [otherstuff1, setStuff] = useState("");
    const [otherstuff2, setStuff2] = useState("");
    if(user)
    {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setName( docSnap.data().name);
            setEmail( docSnap.data().email);
            setSkills( docSnap.data().skillstring);
          } else {
            console.log("No data!");
          }
    }
    else
    {
        console.log("No username!");
    }
    return ( 
        <div className="profile">
            <div className="special">MyProfile Name: </div>
        </div>
     );
}
 
export default Profile;