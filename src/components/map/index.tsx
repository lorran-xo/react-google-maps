import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Props {
  center: any;
  zoom?: any;
  containerStyle: any;
  children: any;
}

function Map({center, zoom, containerStyle, children}: Props) {
  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <>
        {children}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
