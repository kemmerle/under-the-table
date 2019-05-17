import React, { Component } from "react";
import axios from 'axios';

import CambridgeTile from "../components/CambridgeTile";
import MapContainer from "./MapContainer"

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
        this.setState({
          restaurants: body.restaurants
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    var name = "";
    var address = "";
    var loading = "";
    var coordString = "";
    if(this.state.restaurants.length>0){
      coordString = this.state.restaurants[0].address.match(/\((.*?)\)/)[1].split(',');
      name = this.state.restaurants[0].establishment_name
      address = this.state.restaurants[0].address.replace(/ *\([^)]*\) */g, "")
    };
    if(this.state.restaurants.length == 0) {loading = "Loading..."}
    const selectedReports = this.state.restaurants.map(restaurant => {
    return(
      <div className="reportList">
        <CambridgeTile
          key={restaurant.id}
          id={restaurant.id}
          establishmentName={restaurant.establishment_name}
          address={restaurant.address.replace(/ *\([^)]*\) */g, "")}
          codeDescription={restaurant.code_description}
          status={restaurant.status}
          dateCited={restaurant.date_cited}
          dateCorrected={restaurant.date_corrected}
         />
      </div>
    )
   })
   var lat = Number(coordString[0]);
   var long = Number(coordString[1]);
   return(
     <div>
       <header>
         <img src="/Cambridge-Header.png" className="header" alt="CambridgeHeader"/>
       </header>
       <div className="sidenav-show">
         <h3>
         {name} <br/>
         {address} <br/>
         </h3>
       </div>
       <div className="map-container">
         < MapContainer
           lat={lat}
           long={long}
           name={name}
         />
       </div>
     {loading}
     {selectedReports}
     </div>
   )
  }
}



export default CambridgeShowContainer;
