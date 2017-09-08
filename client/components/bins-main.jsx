import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bins';
import BinsEditor from './bins-editor';
import BinsViewer from './bins-viewer';
import LoadingShade from './loading-shade';

class BinsMain extends Component {
  render() {
    return this.props.loading
      ? <LoadingShade />
      : <div>
          <BinsEditor bin={this.props.bin} />
          <BinsViewer bin={this.props.bin} />
        </div>;
  }
}

export default createContainer(props => {
  let sub = Meteor.subscribe('bins');
  return { loading: !sub.ready(), bin: Bins.findOne(props.match.params.id) };
}, BinsMain);
