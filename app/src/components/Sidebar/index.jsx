import React, { useEffect } from 'react';

import { usePlaces } from '../../providers/place'


import mapsImg from '../../assets/google-maps.svg'


import { Container } from './styles';

export function Sidebar() {
    const {
        places,
        setPlaces
    } = usePlaces()

   

    function handlePeople(id) {
        const newPlaces = places.map(place => {
            return place.id === id ? {...place, people: places[0].people += 1} : 
            place
        },...places)

        setPlaces(newPlaces)
        console.log(places)
    }
            
             
        
    


    return (
        <Container>
                <button onClick={()=> handlePeople()}>Reservar</button>

                <div className="place-details">
                <h1>{places[0].name}</h1>
                <span id="address">{places[0].address}</span>
                <span id="phone">{places[0].phone}</span>
                <span id="category">{places[0].category}</span>
                <button><img src={mapsImg}/>ver rotas</button>
                <div className="image-wrapper">
                    <img src={places[0].imageURL} />
                </div>
                </div>

                <h1>{places[0].people}</h1>
            
        </Container>
    );
}

export default Sidebar;