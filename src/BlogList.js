import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* keeping the whole content inside a link tag
                    and in the HTML these link tags will be a a tag 
                    add text-decoration none styte to this a tag*/}
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default BlogList;