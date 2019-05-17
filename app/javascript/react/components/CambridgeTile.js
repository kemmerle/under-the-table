import React from 'react';

const CambridgeTile = (props) => {
  return(
    <div className="tile">
      <div className="reportDetails">
        <ul>
          <li> {props.codeDescription} </li>
          <li> {props.status} </li>
          <li> {props.dateCited} </li>
          <li> {props.dateCorrected} </li>
        </ul>
      </div>
    </div>
  )
}

export default CambridgeTile;
