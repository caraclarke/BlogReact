import React from 'react';
/*
Route object is what we use to define a match between URL and component

not actually switching pages, just swapping components
*/
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/PostIndex';
import PostNew from './components/PostNew';

// matches path of / to App component
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostNew} />
  </Route>
);
