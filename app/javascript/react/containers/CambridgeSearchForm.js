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
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this)
  };

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
           this.setState({ restaurants: body })
         })
         .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
//   handleChange(event) {
//     const newQuery = event.target.value
//    this.setState({ query: newQuery })
// }
//
// handleSubmit(event) {
//   event.preventDefault()
//   const body = JSON.stringify({
//     query: this.state.query
//   })
//   fetch('/api/v1/cambridge_restaurants/search.json', {
//     method: 'POST',
//     body: body,
//     credentials: 'same-origin',
//     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
//   })
//   .then(response => response.json())
//   .then(body => {
//     this.setState({ restaurants: body })
//   })
// }

  render() {
    const cambridgeRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant.id} className="searchResults">
      <Link to={`/cambridge_restaurants/${restaurant.id}`}>{`${restaurant.establishment_name}`}</Link>
      </li>
    )
  })

    return(
      <div>
      <header>
        <img src="/Cambridge-Header.png" className="header" alt="CambridgeHeader"/>
      </header>
        <ul>{cambridgeRestaurants}</ul>
      </div>
    )
  }
}

export default CambridgeSearchForm;
