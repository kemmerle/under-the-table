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
  fetch('/api/v1/cambridge_restaurants/search.json', {
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
    const cambridgeRestaurants = this.state.restaurants.map(restaurant => {
    return(
      <li key={restaurant.id}>
      <Link to={`/cambridge_restaurants/${restaurant.id}`}>{`${restaurant.establishment_name}`}</Link>
      </li>
    )
  })

    return(
      <div>
      <header>
        <img src="/Cambridge-Header.png" className="header" alt="CambridgeHeader"/>
      </header>
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <CambridgeSearchField
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
        <ul>{cambridgeRestaurants}</ul>
      </div>
    )
  }
}

export default CambridgeSearchForm;
