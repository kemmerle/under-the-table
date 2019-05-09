import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import SearchForm from "../containers/SearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
    <Route path="/boston_restaurants/search" component={SearchForm} />
  </Router>
  )
}

export default App
