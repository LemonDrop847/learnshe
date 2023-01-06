const Welco = (props) => {
    const name=props.name;
    return ( 
        <div className="welcome panel">
            <p>Welcome User! {name}</p>
        </div>
     );
}
 
export default Welco;