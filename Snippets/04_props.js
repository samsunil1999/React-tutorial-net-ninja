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
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/> {/* Here blogs is a prop which is sent to BlogList component */}
        </div>
    );
}
// export default Home;


// ________________________________________________________________________________________________________________________________________________________________________________________________
// BlogList.js

// Here is the definition of the child component we have to accept the property object called 'props' as shown here.
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                </div>
            ))}
        </div>
      );
}
 
// export default BlogList;

// another way of accessing the properties in the child component is
// directly declaring the prop variables in the arguments

// Example....
const BlogList2 = ({blogs, list}) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                </div>
            ))}
        </div>
      );
}

export default BlogList2;