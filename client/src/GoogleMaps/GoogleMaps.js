import React, { Component } from "react";
//import {MapMarker} from 'google-map-react';
//import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{overflow:"hidden", height:"80%", width:"80%", marginbottom:"0", borderStyle:"solid", borderWidth:"1px", borderColor:"black"}}
        initialCenter={{
          lat: 39.81656,
          lng: -105.12278
        }}
        zoom={11}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

       
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0YyOVbQyTD7QpqAD5ndmnD17mB6jS7VM"
})(MapContainer);

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 39.816560,
//       lng: -105.122780
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '50vh', width: '50%'}}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyD0YyOVbQyTD7QpqAD5ndmnD17mB6jS7VM" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}

//         //   yesIWantToUseGoogleMapApiInternals
//         //   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         >

//  {/* <MyMarker lat ={ 39.816560}  lng= {-105.122780} style={{position: 'center', transform: 'translate(-50%, -50%)'}}  /> */}
// {/* <SimpleMarker lat ={ 39.816560}  lng= {-105.122780} text={'Centre'} /> */}
//     {/* title={'The marker`s title will appear as a tooltip.'}
//     name={'SOMA'}
//     position={{lat: 39.816560, lng: -105.122780}}
//     style={{position: 'center', transform: 'translate(-50%, -100%)'}} /> */}

//         </GoogleMapReact>

//       </div>
//     );
//   }
// }
