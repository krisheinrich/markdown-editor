import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bins';
import BinsEditor from './bins-editor';
import BinsViewer from './bins-viewer';
import BinsShare from './bins-share';
import LoadingShade from './loading-shade';

const BinsMain = ({ loading, bin }) => ( loading ?
  <LoadingShade /> :
  <div>
    <BinsEditor bin={bin} />
    <BinsViewer bin={bin} />
    <BinsShare bin={bin} />
  </div>
);

export default createContainer(props => {
  const subscriptions = [
    Meteor.subscribe('bins'),
    Meteor.subscribe('sharedBins'),
  ];
  const loading = !subscriptions.every(sub => sub.ready());
  return { loading, bin: Bins.findOne(props.match.params.id) };
}, BinsMain);
