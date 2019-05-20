import React, { Component } from "react";

import BostonTile from "../components/BostonTile";
import MapContainer from "./MapContainer"

class BostonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.computeScore = this.computeScore.bind(this)
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

  computeScore(array){
    var failCount = 0
    var total = array.length
    array.forEach(function(restaurant) {
      if (restaurant.violstatus == "Fail") {
        failCount++
      }
    })
    return (failCount / total) * 100
  }

  render() {
    var name = "";
    var address = "";
    var city = "";
    var loading = "";
    var score = "";
    var coordString = "";
    var hiddenDiv = "";
    var mapDiv = "";
    if(this.state.restaurants.length>0){
      name = this.state.restaurants[0].businessname;
      address = this.state.restaurants[0].address;
      city = this.state.restaurants[0].city;
      score = Math.round(this.computeScore(this.state.restaurants));
    };
    if(this.state.restaurants.length == 0) {loading = "Loading..."}
    if(this.state.restaurants.length>0 && this.state.restaurants[0].location != null) {
      coordString = this.state.restaurants[0].location.match(/\((.*?)\)/)[1].split(',');
    }
    if (coordString != "") {
      let lat = Number(coordString[0]);
      let long = Number(coordString[1]);
      mapDiv =
      <div className="map-container" id={hiddenDiv}>
      <MapContainer
        lat={lat}
        long={long}
        name={name}
      />
      </div>
    }
    if(coordString == "") {
      hiddenDiv = "hidden"
    } else {
      hiddenDiv = "display"
    }
    const selectedRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <div className="reportList-Cambridge">
        <BostonTile
          key={restaurant._id}
          id={restaurant._id}
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
        <header>
          <img src="/Boston-Header.png" className="bostonHeader" alt="BostonHeader"/>
        </header>
        <div className="sidenav-show">
          <p>
          {name} <br/>
          {address} <br/>
          {city} <br/>
          {score} % Failure Rate
          </p>
        </div>
        {mapDiv}
        {loading}
        <ul>{selectedRestaurants}</ul>
      </div>
    )
  }
}



export default BostonShowContainer;
