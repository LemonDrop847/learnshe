// import { Link } from "react-router-dom";
import Iframe from 'react-iframe';
const JobList = (props) => {
    const blogs =props.blogs;
    const title=props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            <div className="row offset-2">
                
                    {blogs.map((blog)=>(
                    <div className="col-3" style={{
                        marginLeft:"2rem"
                    }}>
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.Jobs}</h2>
                            <p>Skills {blog.Skills} </p>
                            <p>{blog.Description}</p>
                            <br />
                            <p>{blog.dates}</p>
                            <button>Apply</button>
                        </div>
                    </div>
                    ))}
                
            </div>
            
        </div>
     );
}
 
export default JobList;