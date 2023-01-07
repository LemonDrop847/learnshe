import { Link } from "react-router-dom";
import { db } from "./firebase";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkill] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setSkill(docSnap.data().skillstring);
      } else {
        console.log("No data!");
      }
    } else {
      setName(null);
    }
  });

  return (
    <div className="profile">
      <div className="special">
        MyProfile Name: {name} email: {email} skills: {skills}
      </div>
    </div>
  );
};

export default Profile;
