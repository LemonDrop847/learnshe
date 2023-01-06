import { Link } from "react-router-dom";
import Extra from "./extra";
import {useState} from "react"; 
const Navbar = () => {
    const [isLogin,setLogin]=useState(true);
    return ( 
        <nav className="navbar">
             <div className="site-name panel">
             <div className="container">
                <div className="row">
                    <div className="col-1 " >
                        <img src="https://i.postimg.cc/BnS3VN0q/20230103-225731.png" alt="" style={{
                        width:"160px",
                        height:"160px"
                    }}/>
                    </div>
                    <div className="col-8 offset-1" >
                        <h1 id="mainh">LearnShe</h1>
                    </div>
                    <div className="col-1">
                        <img src="https://i.postimg.cc/JnnsJJxq/user.png" alt="" style={{
                            width:"50px",
                            height:"50px",
                            margin:"50px",
                            cursor:"pointer"
                        }} />
                    </div>
                </div>
                <div className="row navs">       
                    <div className="col-1"><Link className="links" to="/">  Home</Link></div>
                    <div className="col-1"><Link className="links" to="/Services">  Services</Link></div>
                    <div className="col-1"><Link className="links" to="/Jobs">  Jobs</Link></div>
                    <div className="col-1"><Link className="links" to="/Recruiters">  Recruiters</Link></div>
                    <div className="col-5 offset-3">
                        <form className="d-flex" role="search" >
                            <input className="form-control me-3 ms-2" type="search" placeholder="Search" id="search" aria-label="Search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
            {isLogin && <Extra/>}
        </nav>
    );
}
 
export default Navbar;