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
      googleMapsApiKey="AIzaSyAwB_mBmKS5aVohKJ54f3cyi92STZtfYqY"
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
