import React from 'react';

const BostonTile = (props) => {
  return(
    <div className="tile">
      <div className="businessDetails">
        <h3>
          {props.businessName}
        </h3>
          {props.address} <br/>
          {props.city}
      </div>
        <br/>
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
