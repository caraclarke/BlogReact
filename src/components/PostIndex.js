import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">Add Post</Link>
        </div>

        List of posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

/* null because dont have mapStateToProps which is usually first argument because dont have state we want to map over yet

instead of above commented out function, pass in object you see below after null

instead of binding actio creators and mapping dispatch, pass in object that says fetch posts

just a shortcut

also es6 if key same as value only write once
*/
export default connect(null, { fetchPosts })(PostIndex);

/*

**steps to create container that can call action creators**
 1. import connect at top
 2. import action creator
 3. define mapDispatchToProps
 4. connect to component

*/
