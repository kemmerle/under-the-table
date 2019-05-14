import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import BostonIndexContainer from "../containers/BostonIndexContainer"
import BostonSearchForm from "../containers/BostonSearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"
import CambridgeSearchForm from "../containers/CambridgeSearchForm"
import CambridgeShowContainer from "../containers/CambridgeShowContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path="/boston_restaurants" component={BostonIndexContainer} />
    <Route path="/boston_restaurants/search" component={BostonSearchForm} />
    <Route path="/cambridge_restaurants/search" component={CambridgeSearchForm} />
    <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
    <Route path="/cambridge_restaurants/:id" component={CambridgeShowContainer} />
  </Router>
  )
}

export default App
