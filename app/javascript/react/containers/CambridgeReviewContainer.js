import React, { Component } from "react";
import { Link } from 'react-router';

import CambridgeReviewTile from "../components/CambridgeReviewTile";

class CambridgeReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    const body = JSON.stringify({ query: props.location })
    fetch("/api/v1/cambridge_restaurants/review.json", {
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
      this.setState({ reviews: body.response })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const selectedReviews = this.state.reviews.map(review => {
      return(
        <div className="reportList-Cambridge">
        <CambridgeReviewTile
        key={review.id}
        id={review.id}
        establishmentName={review.business_name}
        review={review.body}
        />
        </div>
      )
    })
    return (
      <div>
      {selectedReviews}
      </div>
    )
  }

}

export default CambridgeReviewContainer;
