import React, { Component } from "react";

import BostonTile from "../components/BostonTile";

class BostonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    let restaurantId = this.props.params.id;
    fetch(`/api/v1/boston_restaurants/${restaurantId}`)
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
          restaurants: body.result.records
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const selectedRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <div>
        <BostonTile
          key={restaurant._id}
          id={restaurant._id}
          businessName={restaurant.businessname}
          address={restaurant.address}
          city={restaurant.city}
          reportDate={restaurant.resultdttm}
          violLevel={restaurant.viollevel}
          violStatus={restaurant.violstatus}
          comments={restaurant.comments}
         />
      </div>
    )
  })
    return(
      <div>
        <ul>{selectedRestaurants}</ul>
      </div>
    )
  }
}



export default BostonShowContainer;
