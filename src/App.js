import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const About = React.lazy(() => import("./About"));
const ActiveUsers = React.lazy(() => import("./ActiveUsers"));
const Home = React.lazy(() => import("./Home"));
const Scores = React.lazy(() => import("./Scores"));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/scores">Scores</Link>
            </li>
            <li>
              <Link to="/users">Active Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/scores">
              <Scores />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <ActiveUsers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
