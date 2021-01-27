import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796,
  };

  return (
    <LoadScript key={process.env.MAPS_KEY}>
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
