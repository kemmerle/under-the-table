import React, { Component } from "react";

import BostonTile from "../components/BostonTile";

class BostonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
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
          restaurant: body.restaurant
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    debugger
    return(
      <div>
        <BostonTile
          key={this.state.restaurant.id}
          id={this.state.restaurant.id}
          businessName={this.state.restaurant.businessname}
          address={this.state.restaurant.address}
          city={this.state.restaurant.city}
          reportDate={this.state.restaurant.resultdttm}
          violLevel={this.state.restaurant.viollevel}
          violStatus={this.state.restaurant.violstatus}
          comments={this.state.restaurant.comments}
         />
      </div>
    )
  }
}

export default BostonShowContainer;
