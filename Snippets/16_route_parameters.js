import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* this is an example of route with a param */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// ________________________________________________________________________________
// BlogDetails.js

import { useParams } from "react-router-dom";

// This component is used to display blog details...
const BlogDetails = () => {
    // This is how we can access the params from the route path
    const  { id } = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog Details {id}</h2>
        </div>
     );
}
 
// export default BlogDetails;

// ________________________________________________________________________________
// BlogList.js
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
// export default BlogList;
