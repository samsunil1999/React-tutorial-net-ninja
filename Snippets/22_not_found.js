import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <Link to="/">Go to Home</Link>
        </div>
     );
}
 
// export default NotFound;

// ________________________________________________________________________________
// App.js


import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
            {/* Here * means include all path as we declare the notFound path at the end of the 
            Switch therefore it will allow to route all the paths mentioned above this route */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;