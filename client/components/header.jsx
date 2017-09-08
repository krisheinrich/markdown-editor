import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  _createNewBin(e) {
    e.preventDefault();
    Meteor.call('bins.insert');
  }
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">mdBin</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="accounts">
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this._createNewBin.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
