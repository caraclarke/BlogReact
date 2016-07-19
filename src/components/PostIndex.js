import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>blah</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

// null because dont have mapStateToProps which is usually first argument because dont have state we want to map over yet
export default connect(null, mapDispatchToProps)(PostIndex);

/* **steps to create container that can call action creators**
 1. import connect at top
 2. import action creator
 3. define mapDispatchToProps
 4. connect to component

*/
