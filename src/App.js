import React, { Component, useMemo } from "react";
import './App.css';
import Map from './components/map';
import Mapdata from "./server/2022_JULY.json";
import Data from './components/data';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const GOOGLE_MAP_API = process.env.GOOGLE_MAP_API;
// console.log("API KEY: " + GOOGLE_MAP_API);
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5qz7stbp7962yxHp_Udjp0rf_ZuIP2a0&callback=initMap">
</script>

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Mapdata: Mapdata.timelineObjects
    }
  }

  render(){
    const { Mapdata } = this.state;

    return(
      <div className="app">
        <div>hello sanity check</div>
        <LoadScript
          googleMapsApiKey="AIzaSyA5qz7stbp7962yxHp_Udjp0rf_ZuIP2a0"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
        <Data Mapdata={Mapdata} />
      </div>
      );
    }
  }
  
  export default App;