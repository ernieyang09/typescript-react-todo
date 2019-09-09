import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import View from '@pages/View';
import Add from '@pages/Add';
import Edit from '@pages/Edit';

import { Header } from '@components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={View} />
        <Route path='/add' component={Add} />
        <Route path='/edit/:todoId' component={Edit} />
      </Switch>
    </Router>
  )
};

export default App;
