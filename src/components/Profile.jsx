import { Link } from "react-router-dom";
import { db } from "./firebase";
import { useState,useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkill] = useState("");
  const [myskills, setSkillarr] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setSkill(docSnap.data().skillstring);
        setSkillarr(docSnap.data().skills)
      } else {
        setName(null);
      }
    });
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      <div
        className="special"
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
          }}
        >
          My Profile
        </h1>
        <br />
      </div>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            margin: "30px",
          }}
        >
          <div className="col-3">
            <img
              src="https://i.postimg.cc/JnnsJJxq/user.png"
              alt=""
              style={{
                width: "10rem",
                height: "10rem",
                border: "1px solid black",
                margin: "30px",
              }}
            />
          </div>
          <div
            className="col-4"
            style={{
              textAlign: "left",
            }}
          >
            <h2>Name : {name}</h2>
            <br />
            <h4>Email : {email}</h4>
            <h4>Skills : {skills}</h4>
          </div>
          <div className="col-4">
            <h4>Contact No :</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="blog">
              <h2>My Skills</h2>
              <ul>
                <li>xyz</li>
                <li>xyz</li>
                <li>xyz</li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="blog">
              <h2>My Bio</h2>
              <ul>
                <li>xyz</li>
                <li>xyz</li>
                <li>xyz</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-3"
            style={{
              marginBottom: "100px",
            }}
          >
            <div className="blog">
              <h2>My Interests</h2>
              <ul>
                <li>xyz</li>
                <li>xyz</li>
                <li>xyz</li>
              </ul>
            </div>
          </div>
          <div
            className="col-9"
            style={{
              marginBottom: "100px",
            }}
          >
            <div className="blog">
              <h2>Activities</h2>
              <ul>
                <li>xyz</li>
                <li>xyz</li>
                <li>xyz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
