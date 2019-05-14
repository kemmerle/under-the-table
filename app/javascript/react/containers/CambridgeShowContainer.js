import React, { Component } from "react";

import CambridgeTile from "../components/CambridgeTile";

class CambridgeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
  }

  componentDidMount() {
    let restaurantId = this.props.params.id;
    fetch(`/api/v1/cambridge_restaurants/${restaurantId}`)
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
          restaurant: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <CambridgeTile
          key={this.state.restaurant._id}
          id={this.state.restaurant._id}
          establishmentName={this.state.restaurant.establishment_name}
          address={this.state.restaurant.address}
          codeDescription={this.state.restaurant.code_description}
          status={this.state.restaurant.status}
          dateCited={this.state.restaurant.date_cited}
          dateCorrected={this.state.restaurant.date_corrected}
         />
      </div>
    )
  }
}



export default CambridgeShowContainer;
