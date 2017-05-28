import React from 'react';

import { Route , Switch, HashRouter, Link } from 'react-router-dom';

import App from './app';
import Details from './details';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/details' component={Details}/>
    </Switch>
  </main>
)

export default Main; 
