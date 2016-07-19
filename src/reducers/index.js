import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  post: PostsReducer,
  form: formReducer
});

export default rootReducer;
