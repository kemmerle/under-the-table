import React, { Component } from "react";
import { Link } from 'react-router';

import BostonSearchField from "../components/BostonSearchField";

class BostonSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      query: ""
    }
    this.filterResults = this.filterResults.bind(this)
  };

  filterResults(array) {
   return array.reduce(function(a,b){
      if (!a.find(function(element) {
            return b.address.toLowerCase().replace(/\s/g,'')
            == element.address.toLowerCase().replace(/\s/g,'')})
          ) a.push(b);
      return a;
    },[]);
  }

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let query = params.get('query');
    const body = JSON.stringify({ formPayload: {query: query }})
     fetch("/api/v1/boston_restaurants/search", {
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
           this.setState({ restaurants: this.filterResults(body.result.records) })
         })
         .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const bostonRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant._id} className="searchResults">
        <Link to={`/boston_restaurants/${restaurant.licenseno}`}>{`${restaurant.businessname}`}</Link>
        <br/> {restaurant.address}
        <br/> {restaurant.city}
      </li>
    )
  })
    return(
      <div>
        <header>
          <img src="/Boston-Header.png" className="bostonHeader" alt="BostonHeader"/>
        </header>
        <div className="searchTitle">
          <h1>
            SEARCH RESULTS
          </h1>
        </div>
        <ul>{bostonRestaurants}</ul>
      </div>
    )
  }
}

export default BostonSearchForm;
