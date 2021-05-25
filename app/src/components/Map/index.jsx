import React, { useCallback, useEffect, useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'

import { usePlace } from '../../providers/place'

// Imports de API
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
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
  const {marker, setMarker} = usePlace()
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
        <Marker position={{lat: marker.lat, lng: marker.lng}}/> 
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
  const { setPlace, place, setCategoryToHandle, categoryHandled, setPlaceDetails, placeDetails, handleCategory, categoryToHandle, marker, setMarker} = usePlace()
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
        setMarker({ lat: lat, lng: lng})
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
      .then(async(result) => {
        console.log('Detalhes:', result)
        try {
          const url = result.photos[0].getUrl([])
          setPlacePhoto(url)
          console.log('Achou a foto')
        } catch (err) {
          console.log('Foto não encontrada', err)
          setPlacePhoto('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpt%2Fview-image.php%3Fimage%3D270609%26picture%3Dimagem-nao-encontrada&psig=AOvVaw3SXGMzVOj79320WrUl83Rt&ust=1621983692148000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjT3qC24_ACFQAAAAAdAAAAABAD')
        }

        try { 
          setCategoryToHandle(result.types[0])
        } catch (err) {
          console.log('Categoria não encontrada', err)
          setCategoryToHandle('default')
        }
        
        handleCategory(categoryToHandle)
        setPlaceDetails(result)
        console.log('sucessagem' + placeDetails)
      })
      .catch((err)=> {
        console.log('Erro', err)
      })
  }, [searchParams])

  // Atualiza o estado do local selecionado, para ser renderizado na Sidebar
  useEffect(()=>{
    if(place.includes(placeDetails.place_id))
    try {
      setPlace([{
        id: placeDetails.place_id,
        name: placeDetails.name,
        address: placeDetails.formatted_address,
        phone: placeDetails.formatted_phone_number,
        category: categoryHandled,
        imageURL: placePhoto
      }, ...place])
    } catch (error) {
      console.log('Falha ao adicionar local!', error)
    }

    console.log('Lista de locais', place)
    
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
