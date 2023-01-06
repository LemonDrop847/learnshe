import { getAuth,signOut } from "firebase/auth";

const Welco = (props) => {
    const name=props.name;
    const auth = getAuth();
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
          })
          .catch((error) => console.log(error));
      };
    return ( 
        <div className="welcome panel">
            <p>Welcome User! {name}</p>
            <div className="col-1">
        <button className="btn btn-danger" style={{
            margin: "50px 50px 50px",
            width: "80px"
         }} onClick={userSignOut}>Sign Out
        </button>
    </div>
        </div>
        
     );
}
 
export default Welco;