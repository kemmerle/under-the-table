import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat:this.props.lat,
         lng:this.props.long
        }}
      >
      <Marker
       name={this.props.name}
       position={{
        lat:this.props.lat,
        lng:this.props.long
       }}
      />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCk1Q3RilgQdkAokO2NDjq9yyo4kQ_fBmU'
})(MapContainer);
