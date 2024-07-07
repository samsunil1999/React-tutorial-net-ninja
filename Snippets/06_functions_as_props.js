/* 
Props:
These are used to sent data from parent component to the child component
*/

//Home.js
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'lorem ipsum...', author: 'justin' },
        { id: 2, title: 'Welcome party!!', body: 'lorem ipsum...', author: 'mario' },
        { id: 3, title: 'Web dev top 5 tips', body: 'lorem ipsum...', author: 'yoshi' }
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => blog.id != id)
        setBlogs(newBlog)
    }

    return (
        <div className="home">
            {/* Here blogs(array) & handleDelete(function) is a prop which is sent to BlogList component */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
        </div>
    );
}
// export default Home;

//______________________________________________________________________________
// BlogList.js
 
const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
      );
    }

export default BlogList;