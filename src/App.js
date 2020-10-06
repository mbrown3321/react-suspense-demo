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
        <Switch>
          <Route path="/scores">
            <Suspense fallback={<div>Loading...</div>}>
              <Scores />
            </Suspense>
          </Route>
          <Route path="/about">
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </Route>
          <Route path="/users">
            <Suspense fallback={<div>Loading...</div>}>
              <ActiveUsers />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
