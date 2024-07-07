/*
REACT ROUTER:
It enables the navigation among views of various components in a React Application, allows changing the browser URL, 
and keeps the UI in sync with the URL i.e. it will not load the entire html when new endpoint is called to veiw any component
*/
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* a Switch is a component that renders the first child <Route> or <Redirect> that matches the location. 
              
              the `exact` paramter is used so that the route should be rendered only when the path matches exactly, other 
              wise the router always check in an order (top to bottom) and whichever substring matches first from top will be rendered 
          */}
          <Switch>
            {/* 
              a `Route` is a component used to define a path and the component that should be rendered when the application’s location matches that path. Essentially, it maps a URL path to a specific React component, enabling the creation of single-page applications with navigation.
            */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
