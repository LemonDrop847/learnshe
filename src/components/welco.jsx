const Welco = (props) => {
    const name=props.name;
    return ( 
        <div className="welcome panel">
            <button className="btn btn-danger" style={{
                width: "80px",
                float: "right"
            }}>Sign Out</button>
            <p style={{
                clear:"right"
            }}>Welcome User! {name}</p>
            {/* <div className="col-1"> */}
            {/* </div> */}
        </div>
     );
}
 
export default Welco;