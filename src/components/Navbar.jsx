import { Link } from "react-router-dom";
import Extra from "./extra";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Welcome from "./Welcome";

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);
  const [userName, setName] = useState("");
  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("hello");
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const namex = docSnap.data().name;
          console.log(namex);
          setName(namex);
          setLogin(true);
        } else {
          console.log("No username!");
          setName("YOU");
          setLogin(true);
        }
      } else {
        setName(null);
      }
    });
  };
  useEffect(() => {
    getUser();
  });

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
              <h1 id="mainh">L<span style={{
                color:"#B54141"
              }}>earn</span>SHE</h1>
            </div>
            <div className="col-1">
              {isLogin && (
                <Link to="/profile">
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
                </Link>
              )}
            </div>
          </div>
          <div className="row navs ">
            <div className="col-1">
              <Link className="links" to="/">
                Home
              </Link>
            </div>
            <div className="col-1">
              <Link className="links" to="/Learn">
                Learn
              </Link>
            </div>
            <div className="col-1">
              <Link className="links" to="/jobs">
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
      {isLogin && <Welcome name={userName} />}
    </nav>
  );
};

export default Navbar;
