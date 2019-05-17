import React, { Component } from "react";

import BostonTile from "../components/BostonTile";

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
    if(this.state.restaurants.length>0){name = this.state.restaurants[0].businessname}
    if(this.state.restaurants.length>0){address = this.state.restaurants[0].address}
    if(this.state.restaurants.length>0){city = this.state.restaurants[0].city}
    if(this.state.restaurants.length == 0){loading = "Loading..."}
    if(this.state.restaurants.length>0){score = Math.round(this.computeScore(this.state.restaurants))}
    const selectedRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <div>
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
          <h5>
          {name} <br/>
          {address} <br/>
          {city} <br/>
          {score} % FAILURE RATE
          </h5>
        </div>
        {loading}
        <ul>{selectedRestaurants}</ul>
      </div>
    )
  }
}



export default BostonShowContainer;
