import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'lorem ipsum...', author: 'justin' },
        { id: 2, title: 'Welcome party!!', body: 'lorem ipsum...', author: 'mario' },
        { id: 3, title: 'Web dev top 5 tips', body: 'lorem ipsum...', author: 'yoshi' },
        { id: 4, title: 'Roadmap to become Backend Developer', body: 'lorem ipsum...', author: 'mario' }
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            {/* Using the filter method in the blogs array we can filterout the blogs and sent to the BlogList component */}
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/>
        </div>
    );
}

export default Home;

