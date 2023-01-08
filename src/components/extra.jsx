import { useState } from "react";
import Popup from "./PopUp";
import SignUp from "./auth/signUp";
import SignIn from "./auth/signIn";
const Extra = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  return (
    <div className="container">
      <div className="row" style={{
        marginTop:"10px"
      }}>
        <div className="col m-15 p-3 panel" id="extra">
              <button
                className="btn btn-danger"
                onClick={() => setButtonPopup(true)}
                style={{
                  float: 'right'
                }}
              >
                Sign Up
              </button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignUp />
              </Popup>
              <p style={{
                textAlign: 'left'
              }}>Welcome! Are you new here? Create an account</p>
        </div>
        <div
          className="col offset-4 m-15 p-3 panel"
          id="extra"
          style={{
            width: "900px",
          }}
        >
          <div className="col">
              <button
                className="btn btn-danger"
                onClick={() => setButtonPopup1(true)}
              style={{
                float: 'right',
                maxWidth:"100px"
              }}>
                Login
              </button>
              <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <SignIn />
              </Popup>
              <p style={{
                textAlign: 'left'
              }}>Already have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
