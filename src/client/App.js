import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import './styles.css';

import SprocketsContainer from './sprockets/SprocketsContainer';

const App = () => (
  <div className="app">
    <main>
      <Switch>
        <Route component={SprocketsContainer} />
      </Switch>
    </main>
  </div>
);

export default hot(module)(App);
