import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bins';
import LoadingShade from './loading-shade';

class BinsList extends Component {
  get _binList() {
    return this.props.bins.map(bin => (
      <li key={bin._id} className="list-group-item">
        <Link to={`/bins/${bin._id}`}>Bin {bin._id}</Link>
        <button className="btn btn-danger" onClick={() => this._removeBin(bin)}>
          Remove
        </button>
      </li>
    ));
  }
  _removeBin(bin) {
    Meteor.call('bins.remove', bin);
  }
  render() {
    return (this.props.loading ?
      <LoadingShade /> :
      <ul className="list-group">
        { this._binList }
      </ul>
    );
  }
}

export default createContainer((props) => {
  const subscriptions = [
    Meteor.subscribe('bins'),
    Meteor.subscribe('sharedBins'),
  ];
  const loading = !subscriptions.every(sub => sub.ready());
  return { loading, bins: Bins.find().fetch() };
}, BinsList);
