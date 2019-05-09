import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import SearchForm from "../containers/SearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path="/" component={SearchForm} />
    <Route path="/boston_restaurants" component={SearchForm} />
    <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
  </Router>
  )
}

export default App
