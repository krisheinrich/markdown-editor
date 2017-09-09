import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Accounts from './accounts';

const Header = ({ history }) => (
  <nav className="nav navbar-default">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand">mdBin</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="accounts">
        <Accounts />
      </li>
      <li>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          Meteor.call('bins.insert', (err, binId) => {
            if (err) console.warn(err);
            else history.push(`/bins/${binId}`);
          });
        }}>Create Bin</a>
      </li>
    </ul>
  </nav>
);

export default withRouter(Header);
