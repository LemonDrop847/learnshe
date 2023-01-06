import { Link } from "react-router-dom";
import Extra from "./extra";
import { useState } from "react";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Welco from "./welco";

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);
  const [userName, setName] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const namex = docSnap.data().name;
        console.log(namex);
        setName(namex);
        setLogin(true);
      } else {
        console.log("No username!");
        setName('YOU');
        setLogin(true);
      }
    } else {
      setName(null);
    }
  });
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar">
      <div className="site-name panel">
        <div className="container">
          <div className="row">
            <div className="col-1 ">
              <img
                src="https://i.postimg.cc/BnS3VN0q/20230103-225731.png"
                alt=""
                style={{
                  width: "160px",
                  height: "160px",
                }}
              />
            </div>
            <div className="col-8 offset-1">
              <h1 id="mainh">LearnShe</h1>
            </div>
            <div className="col-1">
              <img
                src="https://i.postimg.cc/JnnsJJxq/user.png"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "50px 0 50px 50px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col-1">
                <button className="btn btn-danger" style={{
                    margin: "50px 50px 50px",
                    width: "80px"
                 }} onClick={userSignOut}>Sign Out
                </button>
            </div>
          </div>
          <div className="row navs">
            <div className="col-1">
              <Link className="links" to="/">
                Home
              </Link>
            </div>
            <div className="col-1">
              <Link className="links" to="/Services">
                Services
              </Link>
            </div>
            <div className="col-1">
              <Link className="links" to="/Jobs">
                Jobs
              </Link>
            </div>
            <div className="col-1">
              <Link className="links" to="/Recruiters">
                Recruiters
              </Link>
            </div>
            <div className="col-5 offset-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-3 ms-2"
                  type="search"
                  placeholder="Search"
                  id="search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {!isLogin && <Extra />}
      {isLogin && <Welco name={userName}/>}
    </nav>
  );
};

export default Navbar;