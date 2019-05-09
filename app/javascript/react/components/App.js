import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import IndexContainer from "../containers/IndexContainer"
import SearchForm from "../containers/SearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path="/" component={IndexContainer} />
    <Route path="/boston_restaurants" component={IndexContainer} />
    <Route path="/boston_restaurants/search" component={SearchForm} />
    <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
  </Router>
  )
}

export default App
