import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'lorem ipsum...', author: 'justin' },
        { id: 2, title: 'Welcome party!!', body: 'lorem ipsum...', author: 'mario' },
        { id: 3, title: 'Web dev top 5 tips', body: 'lorem ipsum...', author: 'yoshi' }
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;

