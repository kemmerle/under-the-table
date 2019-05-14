import React, { Component } from "react";
import { Link } from 'react-router'

import CambridgeIndexTile from "../components/CambridgeIndexTile"

class CambridgeIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cambridgeRestaurants: []
    }
  }

  componentDidMount() {
  fetch("/api/v1/cambridge_restaurants")
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
        cambridgeRestaurants: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    let cambridgeIndexRestaurants = this.state.cambridgeRestaurants.map(restaurant => {
      return(
        <CambridgeIndexTile
          key={restaurant.id}
          id={restaurant.id}
          businessName={restaurant.establishment_name}
        />
      )
    });
    return(
      <div>
        {cambridgeIndexRestaurants}
      </div>
    )
  }
}

export default CambridgeIndexContainer
