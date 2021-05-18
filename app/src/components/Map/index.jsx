import React, { useCallback, useState, useRef, useContext } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'

import { usePlace } from '../../providers/place'

// Imports de API
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from "use-places-autocomplete"

// Imports de estilo
import { Container, SearchContainer } from './styles'

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
    disableDefaultUI: true,
    zoomControl: true
}

export function Map (){   
      const { isLoaded, loadError } = useLoadScript( {
        googleMapsApiKey: "AIzaSyAdKHx-aLz1X2Sj8HEGwY7kua1avlL7UfU",
        libraries
      })

      const mapRef = useRef()
      const onMapLoad = useCallback((map) => {
        mapRef.current = map
      },[])

      const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(16)
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
            onLoad={onMapLoad}
        >
        </GoogleMap>
        </div>
        <div className="pesquisa">
        <Search panTo={panTo}/> 
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

function Search({panTo}){
  const { setPlace, setCategoryToHandle, categoryHandled, setIsRendered } = usePlace()

  const{
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
      },
      debounce: 300,
    })
    const ref = useOnclickOutside(() => {
      clearSuggestions();
    });
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = ({ description, place_id }) => async() => {
      setValue(description, false)
      clearSuggestions()
      setIsRendered(true)    
      
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("📍 Coordinates: ", { lat, lng });
        panTo( {lat, lng})
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        })

      const paramsAll = {
        placeId: place_id,

      }

      const paramsTypes = {
        placeId: place_id,
        fields: ["types"]
      }

      getDetails(paramsTypes)
        .then((details) => {
          console.log("Types: ", details)
          setCategoryToHandle(details.types[0])
          
        })
        .catch((error) => {
          console.log("Place Type Error:", error)
        })

      getDetails(paramsAll)
        .then((details) => {
          console.log("Details: ", details)          
          

          setPlace({ 
            name: details.name,
            address: details.formatted_address,
            phone: details.formatted_phone_number,
            category: categoryHandled,
            imageURL: details.photos[0].getUrl([])
          })
        })
        .catch((error) => {
          console.log("Place Details Error", error)
        })
        
    };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li className="item" key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
      
    return (
      <SearchContainer ref={ref}>
        <input
          className="input"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Pesquise um local..."
        />
        { status === "OK" && <ul className="lista">{renderSuggestions()}</ul>}
      </SearchContainer>
    );
};