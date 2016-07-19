import { FETCH_POSTS } from '../actions/index';

// all is list of blog posts showing on index page,
// post is individual post/show action
// initial values somewhat arbitrary
// using array to comm intent
const INTIAL_STATE = { all: [], post: null };

// reducer needs to return new object whenever we return state
export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // new object, take current state and add *all*
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

/*

cant depend on having single list
need diff piece of state that holds current/active blog post
like "active post" that holds currently selected post

two pieces of state -
  1. one is array that holds lists of post that shows title and category
  2. active post that we are currently showing a detail page for, includes content

*/
