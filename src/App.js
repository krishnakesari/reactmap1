import React, {Component} from 'react';
import {Map, CircleMarker, TileLayer, Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import data from './cities'

class App extends Component {

  render() {
    const centerLat = (data.minLat + data.maxLat) / 2;
    const distanceLat = data.maxLat - data.minLat;
    const bufferLat = distanceLat * 0.05;
    const centerLong = (data.minLong + data.maxLong) / 2;
    const distanceLong = data.maxLong - data.minLong;
    const bufferLong = distanceLong * 0.15;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Most Populous Cities in Asia</h3>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
               <Tooltip direction="right" offset={[-8,-2]} opacity={1}>
                <span>{city["name"] + ": " + "Population" + " " + city["population"]}</span>
               </Tooltip>
              </CircleMarker>)
          })
          }
        </Map>
      </div>
    );
  }
}

export default App;
