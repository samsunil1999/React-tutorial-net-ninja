import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {

    // The order of the returned parameters do not matter
    // and blogs variable was returned as data there use --> data: blogs 
    const {isPending, data: blogs, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;

