import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams();

    // reusing the useFetch custom hook
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    
    return (
        <div className="blog-details">
            {/* If isPending is true the show Loading... */}
            {isPending && <div>Loading...</div>}
            {/* if there is any error then show the error */}
            {error && <div>{error}</div>}

            {/* If we got the blog then show the blog details  */}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;