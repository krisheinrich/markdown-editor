import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Accounts from './accounts';

class Header extends Component {
  _createNewBin(e) {
    e.preventDefault();
    Meteor.call('bins.insert', (err, binId) => {
      if (err) console.warn(err);
      else this.props.history.push(`/bins/${binId}`);
    });
  }
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">mdBin</Link>
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

export default withRouter(Header);
