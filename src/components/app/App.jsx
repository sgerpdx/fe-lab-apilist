import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AvatarContainer from '../../containers/AvatarContainer';
import SingleContainer from '../../containers/SingleContainer';
// App just deals with presentation

export default function App() {
  return (
    <Router>
      <div>
        <h1>*** Avatar: The Last Airbender ***</h1>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Return to All Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/characters">
            <AvatarContainer />
          </Route>
          <Route path="/characters/:id">
            <SingleContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
