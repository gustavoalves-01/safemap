// Imports de API
import React, { useState, useEffect } from 'react';

// Imports de contextos
import { usePlaces } from '../../../../providers/place'
import { useUser } from '../../../../providers/user'

// Imports de imagens
import mapsImg from '../../../../assets/google-maps.svg'
import searchImg from '../../../../assets/logo.svg'

// Imports de estilo
import { Container, ContainerMain, ContainerEmpty } from './styles';

// Componente de Sidebar
export function Sidebar() {
    // Recupera dados fornecidos pelo contexto de users
    const { username, setUsername, nome1 } = useUser()
    // Recupera dados fornecidos pelo contexto de lugares
    const { places, setPlaces } = usePlaces()
    // Estado para guardar os ClassNames relacionados ao grau de risco
    const[ className, setClassName ] = useState('low')
    // Estado relacionado ao grau de risco
    const[ risco, setRisco ] = useState('')
    // Estado para verificar se o Array de buscas está vazio
    const[ isEmpty, setIsEmpty ] = useState('')

    // Verifica se o Array de buscas está vazio
    useEffect(() => {
        places.length === 1 ? setIsEmpty(true) : setIsEmpty(false)
    },[places])
 
    // Função para adicionar pessoa ao local
    function handlePeople() {
        const newPlaces = places.map(place => {
            return place.id === places[0].id ? {...place, people: places[0].people += 1} : 
            place
        },...places)
        setPlaces(newPlaces)
        console.log(places)
    }

    // Verifica o grau de risco em função da quantidade de pessoas no local
   useEffect(() => {
        if(places[0].people >= 0 && places[0].people <= 5){
            setClassName("low")
            setRisco("Baixo Risco")
        }
        if(places[0].people >= 6 && places[0].people <= 10){
            setClassName("medium")
            setRisco("Risco Médio")
        }
        if(places[0].people >= 11){
            setClassName("high")
            setRisco("Alto Risco")
        }
   },[places[0].people])


    return (
        <Container>
            <header>
                <h1>Bem vindo ao SafeMap, <b>{nome1}</b></h1>
                <a href="#">fazer logout</a>
            </header>

            { isEmpty ?
                <ContainerEmpty>
                    <img src={searchImg} alt="Pesquise um local!" /> 
                    <h1><b>Pesquise</b> um local para obter informações de <b>aglomerações...</b></h1>
                </ContainerEmpty>
                :   
                <ContainerMain>
                    <div className="density-info">
                        <div id="linha-horizontal"></div>
                        <h1>Nível de aglomeração</h1>
                        <span>Previsão de densidade</span>
                        <h2 className={className}>{places[0].people} pessoas</h2>
                        <span>Este local está com <b>{risco}</b></span>
                        <div id="linha-horizontal"></div>
                    </div>

                    <div className="place-details">
                        <h1>{places[0].name}</h1>
                        <span id="address">{places[0].address}</span>
                        { places[0].phone && 
                            <span id="phone">{places[0].phone}</span>
                        }
                        <span id="category">{places[0].category}</span>
                        <a href={places[0].url} target="_blank" alt="Ver Rota no Google Maps"><img src={mapsImg}/>ver rotas</a>
                        <div className="image-wrapper">
                            <img src={places[0].imageURL} />
                        </div>
                    </div>
                    
                    <div className="confirm">
                        <button onClick={()=> handlePeople()}>Desejo ir a este lugar</button>
                    </div>
                </ContainerMain>
            }
        </Container>
    );
}

export default Sidebar;