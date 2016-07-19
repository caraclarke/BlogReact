import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';

const rootReducer = combineReducers({
  post: PostsReducer
});

export default rootReducer;
