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
    console.log(name+skill+email);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const skillArr = skill.split(",");
        setDoc(doc(db, "users", email), {
          name: name,
          skills: skillArr,
          email: email,
          skillstring: skill,
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
        <label >Name</label>
        <input
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Skills</label>
        <input
          type="skills"
          placeholder="Enter your skills (separated by commas) "
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={console.log('press')} >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;