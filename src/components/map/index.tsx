import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Props {
  center: any;
  zoom?: number;
  containerStyle: any;
  children: any;
}

function Map({center, zoom, containerStyle, children}: Props) {
  return (
    <LoadScript
      googleMapsApiKey="API_KEY_HERE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        <>
        {children}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
