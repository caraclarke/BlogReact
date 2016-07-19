import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
/*

history is an object that tells react-router how to interpret url changes
we are using browserHistory --> whenever URL updates, react-router is going to interpret everything after protocol
http://www.blog.com/posts/5 <-- BH means whenever after .com updates tells router to update

*/

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
