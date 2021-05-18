import React from 'react';

import { usePlace } from '../../providers/place'

import mapsImg from '../../assets/google-maps.svg'

import { Container } from './styles';

export function Sidebar() {
    const { 
        place, 
        categoryHandled, 
        categoryToHandle, 
        handleCategory, 
        isRendered, 
        setIsRendered 
    }  = usePlace()
    
    handleCategory(categoryToHandle)
    
    return (
        
        <Container>
        {isRendered?
            <div className="place-details">
            <h1>{place.name}</h1>
            <span id="address">{place.address}</span>
            <span id="phone">{place.phone}</span>
            <span id="category">{ categoryHandled}</span>
            <button><img src={mapsImg}/>ver rotas</button>
            <div className="image-wrapper">
                <img src={place.imageURL}/>
            </div>
            </div>:
            <div className="no-place">
                <span>Pesquise um local</span>
            </div>
            }  
        
            
            
        </Container>
    );
    }

export default Sidebar;