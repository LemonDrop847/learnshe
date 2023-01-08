// import { Link } from "react-router-dom";
// import Iframe from 'react-iframe';
const BlogList = (props) => {
    const blogs =props.blogs;
    const title=props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            <div className="row">
                <div className="col offset-3">
                    {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <iframe src={blog.iframe} width="300px" height="200px" autoplay frameborder="0"></iframe>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author} </p>
                        <p>{blog.description}</p>
                        <a href={blog.document} target="_blank">
                            <button >Documentation</button>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
     );
}
 
export default BlogList;