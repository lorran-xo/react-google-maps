import React, {useState} from 'react';
import { Marker } from '@react-google-maps/api';
import { InfoWindow, InfoBox } from '@react-google-maps/api';
// import { createUseStyles } from 'react-jss';

import Map from './components/map';
import { mockResponse } from './mock';

const containerStyle = {
  width: '492px',
  height: '710px',
};

const divStyle = {
  background: `white`,
  width: 150,
}

const center = {
  lat: 38.798500802295706, 
  lng: -9.221306243251455
};

// var icon = 'data:image/svg+xml;charset=UTF-8;base64,' + btoa('<svg version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 600.619 600.619" style="enable-background:new 0 0 600.619 600.619;" xmlns="http://www.w3.org/2000/svg"> <g transform="matrix(0.083247, 0, 0, 0.084716, 288.640381, 262.435364)"> <g> <path d="M541.979,5.706H58.64c-32.059,0-58.14,26.082-58.14,58.14V424.84c0,31.556,25.271,57.32,56.636,58.121l0.139,53.936 c0.021,8.118,1.679,15.971,4.928,23.34c3.092,7.013,7.483,13.259,13.048,18.562c10.903,10.391,25.18,16.114,40.198,16.114 c10.843,0,21.471-3.056,30.737-8.835L311.471,482.98h230.508c32.059,0,58.141-26.081,58.141-58.14V63.846 C600.117,31.788,574.037,5.706,541.979,5.706z M557.277,424.84c0,8.449-6.85,15.3-15.299,15.3H303.586 c-2.863,0-5.668,0.803-8.097,2.318L123.512,549.729c-2.582,1.61-5.357,2.343-8.063,2.343c-7.958,0-15.311-6.335-15.334-15.285 l-0.208-81.386c-0.021-8.435-6.866-15.261-15.3-15.261H58.64c-8.45,0-15.3-6.851-15.3-15.301V63.846c0-8.45,6.851-15.3,15.3-15.3 h483.338c8.449,0,15.301,6.85,15.301,15.3V424.84H557.277L557.277,424.84z"/> <path d="M115.449,595.413c-15.147,0-29.545-5.771-40.542-16.252c-5.614-5.351-10.042-11.649-13.161-18.723 c-3.277-7.434-4.95-15.354-4.97-23.541l-0.137-53.451c-15.138-0.51-29.304-6.771-39.939-17.663C5.93,454.755,0,440.214,0,424.84 V63.846c0-32.334,26.306-58.64,58.64-58.64h483.338c32.333,0,58.639,26.306,58.641,58.64v360.995 c0,32.334-26.306,58.64-58.641,58.64H311.614L146.45,586.502C137.104,592.332,126.384,595.413,115.449,595.413z M58.64,6.206 C26.857,6.206,1,32.063,1,63.846V424.84c0,15.111,5.829,29.404,16.414,40.244c10.566,10.821,24.677,16.993,39.735,17.377 l0.486,0.013l0.14,54.422c0.021,8.048,1.664,15.833,4.885,23.139c3.066,6.953,7.418,13.145,12.936,18.402 c10.811,10.303,24.964,15.977,39.853,15.977c10.748,0,21.285-3.029,30.472-8.759L311.327,482.48h230.651 c31.783,0,57.641-25.857,57.641-57.64V63.846c-0.002-31.783-25.859-57.64-57.641-57.64H58.64z M115.449,552.572 c-8.708,0-15.812-7.081-15.834-15.784l-0.208-81.386c-0.021-8.14-6.66-14.762-14.8-14.762H58.64c-8.712,0-15.8-7.088-15.8-15.801 V63.846c0-8.712,7.088-15.8,15.8-15.8h483.338c8.713,0,15.801,7.088,15.801,15.8V424.84c-0.002,8.712-7.09,15.8-15.801,15.8 H303.586c-2.772,0-5.481,0.775-7.833,2.242L123.777,550.153C121.24,551.736,118.36,552.572,115.449,552.572z M58.64,49.046 c-8.161,0-14.8,6.639-14.8,14.8V424.84c0,8.161,6.64,14.801,14.8,14.801h25.966c8.69,0,15.778,7.069,15.8,15.76l0.208,81.386 c0.021,8.153,6.676,14.786,14.834,14.786c2.724,0,5.42-0.784,7.798-2.267l171.977-107.271c2.51-1.566,5.402-2.395,8.362-2.395 h238.393c8.16,0,14.799-6.639,14.799-14.8l0.002-360.994c0-8.161-6.64-14.8-14.801-14.8H58.64z"/> </g> </g> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> <g/> </svg>');

// const useStyles = createUseStyles({
//   Testing: { 
//     backgroundColor: 'red',
//     flexDirection: 'row', 
//     alignItems: 'center',
//   },
// })

function App() {
  const [infoBoxPosition, setInfoBoxPosition] = useState<any>(null);
  // const styles = useStyles();


  function handleMarkerClick(latitude: any, longitude: any){
    setInfoBoxPosition({lat: latitude, lng: longitude});
  }

  return (
    <div style={{ display: "flex", paddingLeft: 209, paddingRight: 209, height: "100%" }}>


      <div style={{
        padding: "1rem",
        flexBasis: "900px",
        height: "100%",
        overflow: "auto",
      }}>
        <span style={{fontFamily: 'Poppins Bold', color: '#00B1D1', fontWeight: 'bold'}}>Regressar</span>
        <br/> <br/>
        <span style={{fontFamily: 'Poppins Bold', fontSize: 14.3, color: '#000000', fontWeight: 'bold'}}>{mockResponse.clinics.length} resultados para</span>
        <br/>
        <span style={{fontFamily: 'Poppins Bold', fontSize: 17, color: '#000000', fontWeight: 'bold'}}>"Consulta Cardiologia" em "{/*{location}*/}Lisboa"{/*{search}*/} em todas as redes</span> 
        {mockResponse.clinics.map((item: any, index: number) => (
          <div 
            key={index.toString()} 
            // onClick={() => console.log("Clicked on: ", item.latitude, item.longitude)}
            style={{flexDirection: 'row', marginBottom: 20}}
          >
            <div style={{flexDirection: 'row', alignItems: 'center'}}> 
              <span style={{fontFamily: 'Poppins Bold', fontSize: 17, color: '#00B1D1', fontWeight: 'bold'}}>{item.name}</span>
              <div style={{backgroundColor: '#B2BEB5', borderRadius: 5, width: '5%'}}>
                <span style={{fontFamily: 'Poppins Bold', fontSize: 14, color: '#000000', fontWeight: 'bold'}}>{item.relevance}€</span>
              </div>
            </div>
            
            <span style={{fontFamily: 'Poppins Regular', fontSize: 14.3, color: '#000000'}}>{item.address}, {item.city}</span><br />
            <span style={{fontFamily: 'Poppins Regular', fontSize: 14.3, color: '#000000'}}>{item.postalCode}</span>
            <div style={{width: '90%', marginTop: '10px', height: '1px', backgroundColor: '#D3D3D3'}} />
          </div>
        ))} 
      </div>

      <Map zoom={10} containerStyle={containerStyle} center={center}>
        {mockResponse.clinics.map((item: any, index: number) => (
          <Marker
            label={item.code + ' €'}
            icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
            // key={item.code}
            position={{lat: item.latitude, lng: item.longitude}} 
            onClick={() => handleMarkerClick(item.latitude, item.longitude)}
          />
        ))}

        {infoBoxPosition && (
          <InfoWindow
            onCloseClick={() => setInfoBoxPosition(null)}
            position={infoBoxPosition} 
            >
            <div style={divStyle}>
              {/* TODO */}
              <span style={{fontSize: 18, fontWeight: 'bold', color: '#2BC3DB'}}>{/*{item.name}*/}Clinica</span>
              <br/>

              <span style={{fontSize: 13, fontWeight: '400'}}>
               Camilo Pessanha, 1700-182, Lisboa{/* {item.address} {item.postalCode}, {item.city}*/}
              </span>
              <br/><br/>

              <span style={{fontSize: 20, fontWeight: 'bold', color: '#2BC3DB'}}>123 456 789{/*{item.phone}*/}</span>
            </div>
          </InfoWindow>
        )}

          {/* <InfoBox
              key={index}
              position={{lat: item.latitude, lng: item.longitude}}
            >
              <div style={divStyle}>
                <span style={{fontSize: 12}}>{item.phone || '-'}</span>
              </div>
            </InfoBox> */}
      </Map>
</div>
    
  );
}

export default App;
