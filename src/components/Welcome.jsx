import { getAuth,signOut } from "firebase/auth";

const Welcome = (props) => {
    const name=props.name;
    const auth = getAuth();
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
            window.location.reload(true);
          })
          .catch((error) => console.log(error));
      };
    return ( 
        <div className="welcome panel">
            <button className="btn btn-danger" style={{
                width: "100px",
                float: "right"
            }} onClick={userSignOut}>Sign Out
            </button>
            <p style={{
                textAlign: "left"
            }}>Welcome User! {name}</p>
        </div>
        
     );
}
 
export default Welcome;