import React from 'react';
import { Link } from 'react-router'

const CambridgeIndexTile = (props) => {
  return(
    <li>
    <Link to={`/cambridge_restaurants/${props.id}`}>{props.businessName}</Link>
    </li>
  )
}

export default CambridgeIndexTile;
