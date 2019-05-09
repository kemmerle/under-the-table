import React, { Component } from "react";

import BostonTile from "../components/BostonTile";

class BostonShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
        I AM THE SHOW CONTAINER

        <BostonTile /> 
      </div>
    )
  }
}

export default BostonShowContainer;
