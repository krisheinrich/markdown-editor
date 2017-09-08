import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import BinsMain from './components/bins-main';
import BinsList from './components/bins-list';

const routes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={BinsList} />
        <Route path="/bins" component={BinsMain} />
      </Switch>
    </div>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('#root'));
});
