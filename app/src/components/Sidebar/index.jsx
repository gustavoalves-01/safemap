import React, { useEffect } from 'react';

import { usePlace } from '../../providers/place'
import { usePeople } from '../../providers/people'

import mapsImg from '../../assets/google-maps.svg'
import searchImg from '../../assets/search-vector.png'

import { Container } from './styles';

export function Sidebar() {
    const {
        place,
        categoryToHandle,
        handleCategory,
        isRendered,
    } = usePlace()

    

    handleCategory(categoryToHandle)

    return (
        <Container>
            <button type="button" onClick={console.log("places here: ", place)}>Click</button>
            
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
                
                {/* <div className="no-place">
                    <h1>Primeiro pesquise um local!</h1>
                    <img scr={searchImg}/>
                </div> */}
            
        </Container>
    );
}

export default Sidebar;