import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bins';

class BinsList extends Component {
  _renderListItems() {
    return this.props.bins.map(bin => (
      <li key={bin._id} className="list-group-item">
        Bin {bin._id}
      </li>
    ));
  }
  render() {
    console.log(this.props.bins);
    return (
      <ul className="list-group">
        { this._renderListItems() }
      </ul>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('bins');
  return { bins: Bins.find().fetch() };
}, BinsList);
