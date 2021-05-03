import React, { useCallback, useState, useRef } from 'react';

// Imports de API
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import "@reach/combobox/styles.css"

// Imports de componentes
import {SearchBar} from '../SearchBar'

// Imports de estilo
import mapStyle from './mapStyle'
import { Container } from './styles'


// Variáveis de configuração do mapa
const libraries = ["places"]
 
const mapContainerStyle = {
    width: "65vw",
    height: "100vh",
}
  
 
 const center = {
    lat: 43.653225,
    lng: -79.383186
 }
 
 const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true
 }


export function Map (){   
    const { isLoaded, loadError } = useLoadScript( {
        googleMapsApiKey: "AIzaSyAdKHx-aLz1X2Sj8HEGwY7kua1avlL7UfU",
        libraries
      })
    
      const [ markers, setMarkers ] = useState([])
      const [ selected, setSelected ] = useState(null)
    
      const onMapClick = useCallback((event) => {
        setMarkers(current => [...current, {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date()
        }])
      }, [])
    
      const mapRef = useRef()
      const onMapLoad = useCallback((map) => {
        mapRef.current = map
      },[])

      const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(14)
      }, [])
    
      if(loadError) return "Error loadind maps"
      if(!isLoaded) return "Loading maps"
      
    return (
    <Container>
        <div className="map">
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >{markers.map(marker => 
                <Marker 
                key={marker.time.toISOString()} 
                position={{lat: marker.lat, lng: marker.lng}}
                onClick={()=>{setSelected(marker)}}
                />)}

            {selected ? (<InfoWindow
                    position = {{lat: selected.lat, lng: selected.lng}}
                    onCloseClick={() => {setSelected(null)}}
                ><div>
                    <h2> Aqui está um Pointer </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt.</p>
                </div>
            </InfoWindow>):null}
        </GoogleMap>
        </div>
        <div className="pesquisa">
        {/* <SearchBar/> */}
        <Search panTo={panTo}/>
        <Locate panTo={panTo}/>
        </div>
        
    </Container>
    )
}

function Locate({ panTo }) {
  return (
    <button className="locate" onClick={()=> {
      navigator.geolocation.getCurrentPosition((position) => {
        panTo({
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        })
      }, () => null , options)
    }}>
      Center
    </button>
    
  )
}

function Search({panTo}) {
  const { ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 43.653225, lng: () =>  -79.383186},
      radius: 200 * 1000, //retorna locai preferenciamente em 200km próximo ao centro
    }

  })

  return (
  <div className="search">
  <Combobox 
      onSelect={async (address) => {
        setValue(address, false)
        clearSuggestions()
        try {
          const results = await getGeocode({address})
          const {lat, lng} = await getLatLng(results[0])
          panTo( {lat, lng} )
        } catch (error) {
          console.log("error!")
        }
      }}
    >
      <ComboboxInput 
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        disabled={!ready}
        placeholder="Enter an address"
      />
      <ComboboxPopover>
        <ComboboxList>
        {status === 'OK' && data.map(({id, description}) => <ComboboxOption key={id} value={description}/>)}
        </ComboboxList>
      </ComboboxPopover> 
  </Combobox>
  </div>
  )
}