import React from 'react';

const BostonReviewTile = (props) => {
  return(
    <div className="tile">
      <div className="reportDetails">
        <ul>
          <li> {props.review} </li>
        </ul>
      </div>
    </div>
  )
}

export default BostonReviewTile;
