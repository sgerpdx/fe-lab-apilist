import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AvatarContainer from '../../containers/AvatarContainer';
import SingleContainer from '../../containers/SingleContainer';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <h1>*** Avatar: The Last Airbender ***</h1>
        <nav className={styles.homeLink}>
          <Link to="/characters">Return to All Characters</Link>
        </nav>
        <Switch>
          <Route exact path="/characters">
            <AvatarContainer />
          </Route>
          {/* <Route exact path="/characters/:id">
            <SingleContainer />
          </Route> */}
          <Route
            path="/characters/:id"
            exact
            render={(routerProps) => <SingleContainer {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
