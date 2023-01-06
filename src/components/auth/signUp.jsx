import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth,db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 

const SignUp = () => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "users", email), {
          name: name,
          skills: skill,
          email: email
        });
        console.log('added email: '+email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="skills"
          placeholder="Enter your skills (separated by commas) "
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;