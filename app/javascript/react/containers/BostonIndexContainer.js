import React, { Component } from "react";

import SearchForm from "../components/SearchForm";
import BostonIndexTile from "../components/BostonIndexTile"

class BostonIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
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
        restaurants: body.boston_restaurants
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    let indexRestaurants = this.state.restaurants.map(restaurant => {
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
        {indexRestaurants}
      </div>
    )
  }
}

export default BostonIndexContainer
