const welco = (props) => {
    const name=props.name;
    return ( 
        <div className="panel">
            <p>Welcome User! {name}</p>
        </div>
     );
}
 
export default welco;