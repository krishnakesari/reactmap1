import React, {Component} from 'react';
import {Map, CircleMarker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"

class App extends Component {
  render(){
    return (
        <div>
          <Map
            style={{height: "480px", width: "100%"}}
            zoom={1}
            center={[-0.09, 51.505]}>
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <CircleMarker center={[51.505, -0.09]}/>
          </Map>
        </div>
    );
  }
}

export default App;
