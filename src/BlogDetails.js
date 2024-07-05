import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // This is how we can access the params from the route path
    const  { id } = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog Details {id}</h2>
        </div>
     );
}
 
export default BlogDetails;