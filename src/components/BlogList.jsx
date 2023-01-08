// import { Link } from "react-router-dom";
import Iframe from 'react-iframe';
const BlogList = (props) => {
    const blogs =props.blogs;
    const title=props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    {blog.iframe}
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author} </p>
                    <p>{blog.description}</p>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;