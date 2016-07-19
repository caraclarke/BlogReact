import React from 'react';
/*
Route object is what we use to define a match between URL and component
*/
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

// matches path of / to App component
export default (
  <Route path="/" component={App} />
)
