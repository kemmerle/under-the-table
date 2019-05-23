import React, { Component } from "react";

import BostonSearchForm from "./BostonSearchForm";
import CambridgeSearchForm from "./CambridgeSearchForm";

class SearchIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let option = params.get('search-option');
    let query = params.get('query');
    let searchDiv;
    if (option == "Boston") {
      searchDiv = < BostonSearchForm />
    } else if (option == "Cambridge") {
      searchDiv = < CambridgeSearchForm />
    }
    return(
      <div>
        {searchDiv}
      </div>
    )
  }

}

export default SearchIndexContainer;
