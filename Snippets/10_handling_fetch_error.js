import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/invalid') //invalid ULR to get 404 status and res.ok = false
                .then(res => {
                    console.log(res);
                    // we can throw custom error message from the react app if the status is not OK or not 200
                    if (!res.ok) { 
                        throw Error('Could not fetch the blogs data');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data); // setting the data to the blogs constant
                    setIsPending(false);
                    setError(null); // clearing the error in case of success
                })
                .catch(err => {
                    if (err.name === 'TypeError') {
                        // Handle network errors separately i.e. if the network is down or something (5XX status --> network errors)
                        setError('Failed to fetch. Please check your network connection or the server status.');
                    } else {
                        // Handling other client errors (4XX status --> like bad request, unauthorized, etc)
                        setError(err.message);
                    }
                    setIsPending(false);
                });
        }, 1000);
    },[]) 

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;

