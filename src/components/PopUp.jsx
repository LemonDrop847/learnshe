import "./PopUp.css";
const Popup = (props) => {
    return (props.trigger)? ( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)} style={{}}>
                    <img src="https://i.postimg.cc/SNbPfTKX/icons8-close-window-48.png" alt="" />
                </button>
                {props.children}
            </div>
        </div>
     ):"";
}
 
export default Popup;