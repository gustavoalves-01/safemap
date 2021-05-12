import React, { useCallback, useState, useRef } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'

// Imports de API
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from "use-places-autocomplete"

// Imports de estilo
import { Container, ComboboxContainer, SearchContainer } from './styles'

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
        const {
          ready,
          value,
          suggestions: { status, data },
          setValue,
          clearSuggestions,
        } = usePlacesAutocomplete({
          requestOptions: {
          },
          debounce: 300,
        });

        
        

        const ref = useOnclickOutside(() => {
          clearSuggestions();
        });
      
        const handleInput = (e) => {
          setValue(e.target.value);
        };
      
        const handleSelect = ({ description, place_id }) => () => {
          setValue(description, false)
          clearSuggestions()      
          
          getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
              console.log("📍 Coordinates: ", { lat, lng });
            panTo( {lat, lng})
            })
            .catch((error) => {
              console.log("😱 Error: ", error);
            });

          const params = {
            placeId: place_id
          }

          getDetails(params)
            .then((details) => {
              console.log("Details: ", details)
            })
            .catch((error) => {
              console.log("Error", error)
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
        {status === "OK" && <ul className="lista">{renderSuggestions()}</ul>}
      </SearchContainer>
    );
};