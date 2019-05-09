import React from 'react';
import { Link } from 'react-router'

const BostonIndexTile = (props) => {
  return(
    <li>
    <Link to={`/boston_restaurants/${props.id}`}>{props.businessName}</Link>
    </li> 
  )
}

export default BostonIndexTile;
