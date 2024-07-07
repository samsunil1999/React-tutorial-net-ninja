import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    // reusing the useFetch custom hook
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

    const history = useHistory();
    


    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE",
            // headers: {"Content-Type": "application/json"},
        }).then(() => {
            console.log('deleted');
            history.push('/');
        })
    }

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
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;