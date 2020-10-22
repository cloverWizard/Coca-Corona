import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Form, Button} from 'react-bootstrap';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MenuBarMap extends React.Component {

    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      );
  }

}

export default MenuBarMap({
  apiKey: 'AIzaSyCba5Z2xaqw3zNZcgis6h01iFbwzjy7-hk'
})(MapContainer);