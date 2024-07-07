import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}

                {/* Replacing <a><a/> with the <Link></Link> 
                So that the intsead of sending request to the server the react-router-dom to handle the request
                And by doing this our website will look very smooth as there won't the ful webpage loading...
                */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;