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
    debugger
    let restaurantId = this.props.params.id;
    fetch(`https://data.boston.gov/api/3/action/datastore_search?resource_id=4582bec6-2b4f-4f9e-bc55-cbaa73117f4c&q=${this.props.params.id}`)
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
        debugger
        this.setState({
          restaurants: body.result.records
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    debugger
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
