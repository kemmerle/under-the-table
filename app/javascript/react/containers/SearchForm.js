import React, { Component } from "react";
import { Link } from 'react-router';

import SearchField from "../components/SearchField";

class SearchForm extends Component {
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
    fetch(`https://data.boston.gov/api/3/action/datastore_search?resource_id=4582bec6-2b4f-4f9e-bc55-cbaa73117f4c&q=${this.state.query}`, {
      mode: "cors"
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
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <SearchField
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

export default SearchForm;
