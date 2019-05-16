import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import BostonIndexContainer from "../containers/BostonIndexContainer"
import CambridgeIndexContainer from "../containers/CambridgeIndexContainer"
import BostonSearchForm from "../containers/BostonSearchForm"
import BostonShowContainer from "../containers/BostonShowContainer"
import CambridgeSearchForm from "../containers/CambridgeSearchForm"
import CambridgeShowContainer from "../containers/CambridgeShowContainer"
import SearchIndexContainer from "../containers/SearchIndexContainer"

export const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path="/boston_restaurants" component={BostonIndexContainer} />
    <Route path="/cambridge_restaurants" component={CambridgeIndexContainer} />
    <Route path="/boston_restaurants/search" component={SearchIndexContainer} />
    <Route path="/cambridge_restaurants/search" component={CambridgeSearchForm} />
    <Route path="/boston_restaurants/:id" component={BostonShowContainer} />
    <Route path="/cambridge_restaurants/:id" component={CambridgeShowContainer} />
  </Router>
  )
}

export default App
