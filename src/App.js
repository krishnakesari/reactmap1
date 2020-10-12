import React, {Component} from 'react';
import {Map, CircleMarker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import data from './cities'

class App extends Component {
  render(){
    return (
        <div>
            <h3 style={{textAlign: "center"}}>Most Populous cities in Asia</h3>
          <Map
            style={{height: "480px", width: "100%"}}
            zoom={1}
            center={[-0.09, 51.505]}>
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {data.city.map((city) => {
                  return(
                     <CircleMarker
                     center={[city["coordinates"][1], city["coordinates"][0]]}
                     />
                  )
              })}
          </Map>
        </div>
    );
  }
}

export default App;
