import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CharactersList from './characters/CharactersList';
import CharacterDetail from './characters/CharacterDetail';
import AvatarContainer from '../../containers/AvatarContainer';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        {/* <div>
          <AvatarContainer />
        </div> */}
        <nav>
          <ul>
            <li>
              <Link to="/characters">All Characters</Link>
            </li>
            <li>
              <Link to="/detail">Character Detail</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path="/detail">
            <CharacterDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
