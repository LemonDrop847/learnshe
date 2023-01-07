import { Link } from "react-router-dom";

const Extra = () => {
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
                <button className="btn btn-danger">Sign Up</button>
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
                <button className="btn btn-danger">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
