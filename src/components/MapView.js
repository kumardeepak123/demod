import React, { useState } from 'react';
import {  TileLayer ,MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import data from '../assets/data';
import Markers from './VenueMarkers';
//for Markers component
//venues={data.venues}

const MapView  =(props)=> {

const [currentLocation ,setCurrentLocation] = useState({lat: 52.52437, lng: 13.41053})
const [zoom ,setZoom] = useState(10)
  
const {locations} = props ;

    //const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers  venues={locations} />
      </MapContainer>
    );
  
}

export default MapView;
