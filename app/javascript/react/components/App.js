import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import SearchForm from "../components/SearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"
import BostonIndexContainer from "../containers/BostonIndexContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={BostonIndexContainer} />
      <Route path="/boston_restaurants" component={BostonIndexContainer} />
      <Route path="/boston_restaurants/new" component={SearchForm} />
      <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
  </Router>
  )
}

export default App
