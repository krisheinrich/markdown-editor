import React, { Component } from 'react';

class BinsShare extends Component {
  _onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }
  get _shareList() {
    return this.props.bin.sharedWith.map(email => (
      <button key={email} className="btn btn-default">{ email }</button>
    ));
  }
  render() {
    return (
      <footer className='bins-share'>
        <div className="input-group">
          <input ref="email" className="form-control" />
          <div className="input-group-btn">
            <button className="btn btn-default" onClick={this._onShareClick.bind(this)}>
              Share Bin
            </button>
          </div>
        </div>
        <div>
          Shared With:
        </div>
        <div className="btn-group">
          { this._shareList }
        </div>
      </footer>
    );
  }
}

export default BinsShare;
