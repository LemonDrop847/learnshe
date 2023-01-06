import { Link } from "react-router-dom";

const Foot = () => {
    return ( 
        <footer>
            <div className="footer">
                <div className="row">
                    <div className="col-1"><Link className="flink" to="/SignUp">Join Us</Link></div>
                    <div className="col-1"><Link className="flink" to="#">Report</Link></div>
                    <div className="col-1"><Link className="flink" to="#">Copyright©</Link></div>
                    <div className="col-1"><Link className="flink" to="#">Contact Us</Link></div>
                    <div className="col-1"><Link className="flink" to="#">About</Link></div>
                </div>   
            </div>
        </footer>
        
     );
}
 
export default Foot;