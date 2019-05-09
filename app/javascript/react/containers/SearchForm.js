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
    const body = JSON.stringify({
      query: this.state.query
    })
    fetch('/api/v1/boston_restaurants/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ restaurants: body })
    })
  }

  render() {
    const bostonRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant.id}>
        <Link to={`/boston_restaurants/${restaurant.id}`}>{restaurant.businessname}</Link>
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
