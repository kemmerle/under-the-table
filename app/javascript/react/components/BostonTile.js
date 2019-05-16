import React from 'react';

const BostonTile = (props) => {
  return(
    <div className="tile">
      <div className="reportDetails">
        <ul>
          <li> {props.reportDate} </li>
          <li> {props.violLevel} </li>
          <li> {props.violStatus} </li>
          <li> {props.comments} </li>
        </ul>
      </div>
    </div>
  )
}

export default BostonTile;
