import React, { Component } from "react";
import { Link } from 'react-router'

import BostonIndexTile from "../components/BostonIndexTile"

class BostonIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bostonRestaurants: []
    }
  }

  componentDidMount() {
  fetch("/api/v1/boston_restaurants")
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        bostonRestaurants: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    let bostonIndexRestaurants = this.state.bostonRestaurants.map(restaurant => {
      return(
        <BostonIndexTile
          key={restaurant.id}
          id={restaurant.id}
          businessName={restaurant.businessname}
        />
      )
    });
    return(
      <div>
      <Link to={`/boston_restaurants/search`}>Search for Restaurant Reports!</Link>
        {bostonIndexRestaurants}
      </div>
    )
  }
}

export default BostonIndexContainer
