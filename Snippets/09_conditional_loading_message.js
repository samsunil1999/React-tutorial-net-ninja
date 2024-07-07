import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); // For showing the loading text before we get the data from the API.

    // Since this useEffect hook does not depends on any state therefor this fucntion will be invoked when the component is loaded for the frst time. 
    useEffect(() => {
        setTimeout(() => { // used setTimeout here to mimic delay before we get the data from the API.
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data)
                setIsPending(false);
            })
        }, 1000);
    },[]) 

    return (
        <div className="home">
            {/* These are conditional loading messages where JS will check if the first condition is true if yes then
             it executes the second condition i.e. the HTML */}
            {isPending && <div>Loading...</div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;

