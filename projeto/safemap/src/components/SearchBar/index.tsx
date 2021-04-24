import { useState } from 'react'
import { Container } from './styles'

import lupaImg from '../../assets/lupa.png'



export function SearchBar(){
    const [ search, setSearch ] = useState('')

    function showSearch(){
        alert(`Sua pesquisa é ${search}`)
    }
    
    return (
        
        <Container>
            <div className="search">
            
                <input 
                type="text" 
                id="search" 
                placeholder="Pesquisar um local..."
                onChange={(e) => setSearch(e.target.value)}
                />

                <img src={lupaImg} alt=""/>

            </div>
            <button onClick={showSearch}>Buscar</button>

        </Container>
    )
}