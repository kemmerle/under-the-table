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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange(event) {
    const newQuery = event.target.value
   this.setState({ query: newQuery })
}

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
     query: this.state.query
   };
   const body = JSON.stringify({ formPayload })
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
          this.setState({ restaurants: body.result.records })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const bostonRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant._id}>
      <Link to={`/boston_restaurants/${restaurant.licenseno}`}>{`${restaurant.businessname}`}</Link>
      </li>
    )
  })

    return(
      <div>
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <BostonSearchField
          label="Search by restaurant name or inspector comment"
          name="query"
          content={this.state.query}
          onChange={this.handleChange}
        />

        <input
          id="submit-button"
          className="submit-button"
          type="submit"
          value="Submit"
        />
      </form>
        <ul>{bostonRestaurants}</ul>
      </div>
    )
  }
}

export default BostonSearchForm;
