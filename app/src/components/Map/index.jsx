// Imports de API
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'
import { GoogleMap, useLoadScript, Marker, Circle } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from "use-places-autocomplete"

// Imports de contextos
import { usePlaces } from '../../providers/place'

// Imports de estilo
import { Container, SearchContainer } from './styles'

// Define a biblioteca da Google a ser utilizada
const libraries = ["places"]

// Define o tamanho do componete de mapa
const mapContainerStyle = {
  width: "65vw",
  height: "100vh",
}

// Define ponto inicial do mapa
const center = {
  lat: -23.5677666,
  lng: -46.6487763
}

// Predefinições para renderização do mapa
const options = {
  disableDefaultUI: true,
  zoomControl: true
}

// Define configurações do círculo para baixo risco
const circleLowOptions = {
  strokeColor: '#129e00',
  fillColor: '#0c8b00',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 100,
  zIndex: 1
}

// Define configurações do círculo para risco médio
const circleMidOptions = {
  strokeColor: '#ffd000',
  fillColor: '#dba800',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 100,
  zIndex: 1
}

// Define configurações do círculo para alto risco
const circleHighOptions = {
  strokeColor: '#ff0000',
  fillColor: '#e70000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 100,
  zIndex: 1
}

// Componente de Mapa
export function Map() {
  // Recupera dados fornecidos pelo contexto de lugares
  const { marker, places } = usePlaces()
  
  // Carrega o mapa do Google Maps API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAdKHx-aLz1X2Sj8HEGwY7kua1avlL7UfU",
    libraries
  })

  // Inicia estado do grau de risco do círculo
  const [circleOptions, setCircleOptions] = useState("circleLowOptions")

  // Atualiza o estado do grau de risco do círculo com o aumento de pessoas em um local
  useEffect(() => {
    if(places[0].people >= 0 && places[0].people <= 5){
        setCircleOptions(circleLowOptions)
    }

    if(places[0].people >= 6 && places[0].people <= 10){
      setCircleOptions(circleMidOptions)
    }

    if(places[0].people >= 11){
      setCircleOptions(circleHighOptions)
    }
  
},[places[0].people])

  // Variável recebe a referência do mapa gerado
  const mapRef = useRef()

  // Variável armazena função de Callback do mapa gerado  
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  // Determina função de redirecionamento do mapa
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(19)
  }, [])

  // Verifica carregamento do Google Maps API
  if (loadError) return "Error loadind maps"
  if (!isLoaded) return "Loading maps"

  return (
    <Container>
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
        <Marker position={{lat: marker.lat, lng: marker.lng}}/>
        <Circle 
          center={{lat: marker.lat, lng: marker.lng}}
          options={circleOptions}
        />
        </GoogleMap>
      </div>
      <div className="pesquisa">
        <Search panTo={panTo} />
        {/* S */}
      </div>
    </Container>
  )
}

// Componente da Barra de Pesquisa
function Search({ panTo }) {
  // Recupera dados fornecidos pelo contexto de lugares
  const { setPlaces, places, setCategoryToHandle, categoryHandled, setPlaceDetails, placeDetails, handleCategory, categoryToHandle, marker, setMarker} = usePlaces()
  // Estado para armazenar foto do local
  const [ placePhoto, setPlacePhoto ] = useState('')
  // Estado para armazenar parâmetros da busca de detalhes na Google Places API
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
    // Recupera as coordenadas do local para uso nass funções que tem esse dado como parâmetro
     getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setMarker({lat,lng})
        panTo({ lat, lng })
      })
      .catch((error) => {
        console.log("Error in panning: ", error);
      })
    // Define parâmetros da busca
    setSearchParams({
      placeId: place_id,
      fields: ["place_id", "name", "formatted_address", "formatted_phone_number", "photo", "types", "url"]
    })
  }

  // Buscar detalhes dos locais na API
  useEffect(() => {
    console.log(searchParams)
    getDetails(searchParams)
      .then((result) => {
        try {
          const url = result.photos[0].getUrl([])
          setPlacePhoto(url)
        } catch (err) {
          console.log('Foto não encontrada', err)
        }
        try { 
          setCategoryToHandle(result.types[0])
        } catch (err) {
          console.log('Categoria não encontrada', err)
          setCategoryToHandle('default')
        }
        handleCategory(categoryToHandle)
        setPlaceDetails(result)
      })
      .catch((err)=> {
        console.log('Erro', err)
      })
  }, [searchParams])

  // Atualiza o estado do local selecionado, para ser renderizado na Sidebar
  useEffect(()=>{
    // Verifica se o local já foi pesquisado 
    let existsPlace = places.some(place => place['id'] === placeDetails.place_id)

    // Trás o local já pesquisado para o topo da Object Array sse ele já existe, senão cria um novo objeto com os dados obtidos
    let placeExistent = [places.find(place => place['id'] === placeDetails.place_id)]
    let updatedPlaces = places.filter(place => place['id'] !== placeDetails.place_id)
    const newPlaces = placeExistent.concat(updatedPlaces)
    try {
      existsPlace
      ?
      setPlaces(newPlaces)
      :
      setPlaces([{
        id: placeDetails.place_id,
        name: placeDetails.name,
        address: placeDetails.formatted_address,
        phone: placeDetails.formatted_phone_number,
        category: categoryHandled,
        imageURL: placePhoto,
        people: 0,
        url: placeDetails.url
      },...places])
      console.log('Lista de locais: ', places)
    } catch (error) {
      console.log('Falha ao adicionar local!', error)
    }
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
