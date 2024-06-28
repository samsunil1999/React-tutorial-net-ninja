import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'lorem ipsum...', author: 'justin' },
        { id: 2, title: 'Welcome party!!', body: 'lorem ipsum...', author: 'mario' },
        { id: 3, title: 'Web dev top 5 tips', body: 'lorem ipsum...', author: 'yoshi' },
        { id: 4, title: 'Roadmap to become Backend Developer', body: 'lorem ipsum...', author: 'mario' }
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    // ################################# USEEFFECT WITHOUT DEPENDENCIES #################################
    /*
    NOTE:
    - As the component will render initially when the page is loaded then,
      each time the state is changed by the useState hook will also re-render the component.

    And all these time of rendering the useEffect will fire the function mentioned
    */
    useEffect(() => { // useEffect will fire a function after every render of the component.
        console.log("use effect 1 ran");
        // console.log(blogs);
    })



    // ################################# USEEFFECT WITH DEPENDENCIES #################################
    /*
    NOTE: 
    - We can restrict the useEffect hook to rerender on all the state change happens in the component using DEPENDENCIES.
    - The Dependency array is passed as an argument in the useEffect after the callback function.
    */
    useEffect(() => {
        console.log("use effect 2 ran");
        console.log(name);
    }, [name]) // this useEffect hook depends only on the name state, every time the name state changes this useEffect hook will also run.
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => { setName('luigi') }}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;

