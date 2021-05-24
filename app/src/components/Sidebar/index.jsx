import React, { useEffect } from 'react';

import { usePlace } from '../../providers/place'


import mapsImg from '../../assets/google-maps.svg'


import { Container } from './styles';

export function Sidebar() {
    const {
        place,
        categoryToHandle,
        handleCategory,
        loading, 
    } = usePlace()

    handleCategory(categoryToHandle)

    return (
        <Container>
                <div className="place-details">
                <h1>{place.name}</h1>
                <span id="address">{place.address}</span>
                <span id="phone">{place.phone}</span>
                <span id="category">{place.category}</span>
                <button><img src={mapsImg}/>ver rotas</button>
                <div className="image-wrapper">
                    <img src={place.imageURL} />
                </div>
            </div>
            
        </Container>
    );
}

export default Sidebar;