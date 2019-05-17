import React, { Component } from "react";
import axios from 'axios';

class AddressSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      errorState: null,
      loading: false
    }
  };

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let query = params.get('query');

    axios.get(`https://api.yelp.com/v3/businesses/search?location=${query}`, {
      headers: {

        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
    .then((res) => {
      console.log(res.data.businesses)
      this.setState({ results: res.data.businesses, loading: false })

    })
    .catch((err) => {
      console.log ('error')
      this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
    })
  }
  render() {
    return(
      <div>
      {this.state.results}
      </div>
    )
  }
}

getReviews(name, address) {
  axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyCk1Q3RilgQdkAokO2NDjq9yyo4kQ_fBmU&input=${name}+${address}&inputtype=textquery&locationbias=circle:20000@42,-71&&fields=photos,formatted_address,name,opening_hours,rating,geometry,formatted_address,geometry,icon,id,name,permanently_closed,photos,place_id,plus_code,types&rankby=distance&pagetoken=1`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  })
  .then((res) => {
    console.log(res)
    this.setState({ results: res })

  })
  .catch((err) => {
    console.log ('error')
  })
}

export default AddressSearchForm;
