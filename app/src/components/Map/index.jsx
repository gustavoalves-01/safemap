import React, { useCallback, useEffect, useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'

import { usePlace } from '../../providers/place'

// Imports de API
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
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

export function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAdKHx-aLz1X2Sj8HEGwY7kua1avlL7UfU",
    libraries
  })

  const mapRef = useRef()
  
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(16)
  }, [])

  if (loadError) return "Error loadind maps"
  if (!isLoaded) return "Loading maps"

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
        <Search panTo={panTo} />
      </div>
    </Container>
  )
}

function Locate({ panTo }) {
  return (
    <button className="locate" onClick={() => {
      navigator.geolocation.getCurrentPosition((position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, () => null, options)
    }}>
      Center
    </button>

  )
}

function Search({ panTo }) {
  const { setPlace, setCategoryToHandle, categoryHandled, setPlaceDetails, placeDetails} = usePlace()
  const [ placePhoto, setPlacePhoto ] = useState('')
  const [ searchParams, setSearchParams ] = useState({
    placeId: '',
    fields: [''],
   })

  // Faz a chamada na API places-autocomplete
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
    },
    debounce: 350,
  })

  // Fecha sugestões ao clicar em qualquer lugar fora da caixa de sugestões
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  //Lida com o texto digitado no input
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // Renderiza as sugestões de locais
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

  // Lida com a seleção da sugestão do local
  const handleSelect = ({ description, place_id }) => () => {
    setValue(description, false)
    clearSuggestions()

     getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        panTo({ lat, lng })
      })
      .catch((error) => {
        console.log("Error in panning: ", error);
      })

    setSearchParams({
      placeId: place_id,
      fields: ["place_id", "name", "formatted_address", "formatted_phone_number", "photo", "types"]
    })
  }

  // Buscar detalhes dos locais na API
  useEffect(() => {
    console.log(searchParams)
    getDetails(searchParams)
      .then((result) => {
        console.log('Detalhes:', result)
        setPlacePhoto(result.photos[0].getUrl([]))
        setCategoryToHandle(result.types[0])
        setPlaceDetails(result)
        console.log('sucessagem' + placeDetails)
      })
      .catch((err)=> {
        console.log('Erro', err)
      })
  }, [searchParams])

  // Atualiza o estado do local selecionado, para ser renderizado na Sidebar
  useEffect(()=>{
    setPlace({
      id: placeDetails.place_id,
      name: placeDetails.name,
      address: placeDetails.formatted_address,
      phone: placeDetails.formatted_phone_number,
      category: categoryHandled,
      imageURL: placePhoto
    })
  }, [placeDetails])

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
}
