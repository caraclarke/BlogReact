import React from 'react';
/*
Route object is what we use to define a match between URL and component
*/
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/PostIndex';

// matches path of / to App component
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
  </Route>
);
