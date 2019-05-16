import React, { Component } from "react";
import { Link } from 'react-router';

import CambridgeSearchField from "../components/CambridgeSearchField";

class CambridgeSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      query: ""
    }
    this.filterResults = this.filterResults.bind(this)
  };

  filterResults(array) {
    var seen = {};
    var out = [];
    var len = array.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
      var item = array[i];
      if(seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let query = params.get('query');
    const body = JSON.stringify({ formPayload: {query: query }})
     fetch("/api/v1/cambridge_restaurants/search.json", {
       method: "POST",
       body: body,
       credentials: "same-origin",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       }
     })
       .then(response => {
         if (response.ok) {
           return response;
         } else {
           let errorMessage = `${response.status}(${response.statusText})` ,
           error = new Error(errorMessage);
           throw(error);
         }
         })
         .then(response => response.json())
         .then(body => {
           debugger
           this.setState({ restaurants: this.filterResults(body.cambridge_restaurants) })
         })
         .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const cambridgeRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant.id} className="searchResults">
        <Link to={`/cambridge_restaurants/${restaurant.id}`}>{`${restaurant.establishment_name}`}</Link>
        <br/> {restaurant.address}
        <br/> {restaurant.city}
      </li>
    )
  })
    return(
      <div>
      <header>
        <img src="/Cambridge-Header.png" className="header" alt="CambridgeHeader"/>
      </header>
      <div className="searchTitle">
        <h1>
          SEARCH RESULTS
        </h1>
      </div>
        <ul>{cambridgeRestaurants}</ul>
      </div>
    )
  }
}

export default CambridgeSearchForm;
