import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "./PopUp";
import SignUp from "./auth/signUp";
import SignIn from "./auth/signIn";
const Extra = () => {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [buttonPopup1,setButtonPopup1] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col m-15 p-3 panel" id="extra">
          <div className="row">
            <div className="col">
              <p>Welcome! Are you new here? Create an account</p>
            </div>
            <div className="col">
              <Link to="/signUp">
                <button className="btn btn-danger" onClick={()=>setButtonPopup(true)} >Sign Up</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <SignUp/>
                </Popup>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col offset-4 m-15 p-3 panel"
          id="extra"
          style={{
            width: "900px",
          }}
        >
          <div className="row">
            <div className="col">
              <p>Already have an account?</p>
            </div>
            <div className="col">
              <Link to="/login">
                <button className="btn btn-danger" onClick={()=>setButtonPopup1(true)} >Login</button>
                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                  <SignIn/>
                </Popup>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
