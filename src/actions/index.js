// reach out and grab blog posts from API

import axios from 'axios';

// define action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// root url for API
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=heyfriends'

// action creator
export function fetchPosts() {

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  // post request
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}
