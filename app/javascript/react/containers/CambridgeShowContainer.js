import React, { Component } from "react";

import CambridgeTile from "../components/CambridgeTile";

class CambridgeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
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
        debugger 
        this.setState({
          restaurants: body.restaurants
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const selectedReports = this.state.restaurants.map(restaurant => {
    return(
      <div>
        <CambridgeTile
          key={restaurant.id}
          id={restaurant.id}
          establishmentName={restaurant.establishment_name}
          address={restaurant.address}
          codeDescription={restaurant.code_description}
          status={restaurant.status}
          dateCited={restaurant.date_cited}
          dateCorrected={restaurant.date_corrected}
         />
      </div>
    )
   })
   return(
     <div>
     {selectedReports}
     </div>
   )
  }
}



export default CambridgeShowContainer;
