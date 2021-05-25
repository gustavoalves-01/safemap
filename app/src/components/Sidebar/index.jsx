import React, { useEffect } from 'react';

import { usePlace } from '../../providers/place'


import mapsImg from '../../assets/google-maps.svg'


import { Container } from './styles';

export function Sidebar() {
    const {
        place
    } = usePlace()


    return (
        <Container>
                <div className="place-details">
                <h1>{place[0].name}</h1>
                <span id="address">{place[0].address}</span>
                <span id="phone">{place[0].phone}</span>
                <span id="category">{place[0].category}</span>
                <button><img src={mapsImg}/>ver rotas</button>
                <div className="image-wrapper">
                    <img src={place[0].imageURL} />
                </div>
            </div>
            
        </Container>
    );
}

export default Sidebar;