import React, { useState } from 'react'

export const PlaceContext = React.createContext({})

export const PlaceProvider = (props) => {
    let [ categoryHandled, setCategoryHandled ] = useState('default')
    let [ categoryToHandle, setCategoryToHandle ] = useState('')
    let [ isRendered, setIsRendered ] = useState(false)
    
    function handleCategory() {
        switch (categoryToHandle) {
            case 'accounting':
            setCategoryHandled("Contabilidade")
            break;
            case 'airport':
            setCategoryHandled("Aeroporto")
            break;
            case 'amusement_park':
            setCategoryHandled("Parque de Diversões")
            break;
            case 'aquarium':
            setCategoryHandled("Aquário")
            break;
            case 'art_gallery':
            setCategoryHandled("Galeria de Arte")
            break;
            case 'atm':
            setCategoryHandled("Caixa Eletrônico")
            break;
            case 'bakery':
            setCategoryHandled("Padaria")
            break;
            case 'bank':
            setCategoryHandled("Banco")
            break;
            case 'bar':
            setCategoryHandled("Bar")
            break;
            case 'beauty_salon':
            setCategoryHandled("salão de Beleza")
            break;
            case 'bicycle_store':
            setCategoryHandled("Loja de Bicicletas")
            break;
            case 'book_store':
            setCategoryHandled("Livraria")
            break;
            case 'bowling_alley':
            setCategoryHandled("Pista de Boliche")
            break;
            case 'bus_station':
            setCategoryHandled("Ponto de Ônibus")
            break;
            case 'cafe':
            setCategoryHandled("Cafeteria")
            break;
            case 'campground':
            setCategoryHandled("Área de Camping")
            break;
            case 'car_dealer':
            setCategoryHandled("Loja de Automóveis")
            break;
            case 'car_rental':
            setCategoryHandled("Locadora de Automóveis")
            break;
            case 'car_repair':
            setCategoryHandled("Oficina de Reparos")
            break;
            case 'car_wash':
            setCategoryHandled("Lava-Jato")
            break;
            case 'casino':
            setCategoryHandled("Cassino")
            break;
            case 'cemetery':
            setCategoryHandled("Cemitério")
            break;
            case 'church':
            setCategoryHandled("Igreja")
            break;
            case 'city_hall':
            setCategoryHandled("Câmara Municipal")
            break;
            case 'clothing_store':
            setCategoryHandled("loja de Roupas")
            break;
            case 'convenience_store':
            setCategoryHandled("Loja de Conveniência")
            break;
            case 'courthouse':
            setCategoryHandled("Tribunal")
            break;
            case 'dentist':
            setCategoryHandled("Dentista")
            break;
            case 'department_store':
            setCategoryHandled("Loja de Departamento")
            break;
            case 'doctor':
            setCategoryHandled("Médico")
            break;
            case 'drugstore':
            setCategoryHandled("Farmácia")
            break;
            case 'electrician':
            setCategoryHandled("Eletricista")
            break;
            case 'electronics_store':
            setCategoryHandled("Loja de eletrônicos")
            break;
            case 'embassy':
            setCategoryHandled("Embaixada")
            break;
            case 'fire_station':
            setCategoryHandled("Corpo de Bombeiros")
            break;
            case 'florist':
            setCategoryHandled("Florista")
            break;
            case 'funeral_home':
            setCategoryHandled("Casa Funerária")
            break;
            case 'furniture_store':
            setCategoryHandled("Loja de Móveis")
            break;
            case 'gas_station':
            setCategoryHandled("Posto de Gasolina")
            break;
            case 'gym':
            setCategoryHandled("Academia")
            break;
            case 'hair_care':
            setCategoryHandled("Cabeleireiro")
            break;
            case 'hardware_store':
            setCategoryHandled("Loja de Ferramentas")
            break;
            case 'hindu_temple':
            setCategoryHandled("Templo Hindu")
            break;
            case 'home_goods_store':
            setCategoryHandled("Loja de Utilidades")
            break;
            case 'hospital':
            setCategoryHandled("Hospital")
            break;
            case 'insurance_agency':
            setCategoryHandled("Agência de Seguros")
            break;
            case 'jewelry_store':
            setCategoryHandled("Joalheria")
            break;
            case 'laundry':
            setCategoryHandled("Lavanderia")
            break;
            case 'lawyer':
            setCategoryHandled("Tribunal")
            break;
            case 'library':
            setCategoryHandled("Biblioteca")
            break;
            case 'light_rail_station':
            setCategoryHandled("Estação de Metrô")
            break;
            case 'liquor_store':
            setCategoryHandled("Loja de Bebidas")
            break;
            case 'local_government_office':
            setCategoryHandled("Escritório de Governo Local")
            break;
            case 'locksmith':
            setCategoryHandled("Chaveiro")
            break;
            case 'lodging':
            setCategoryHandled("Pousada")
            break;
            case 'meal_delivery':
            setCategoryHandled("Entrega de Refeição")
            break;
            case 'meal_takeaway':
            setCategoryHandled("Refeição para Viagem")
            break;
            case 'mosque':
            setCategoryHandled("Mesquita")
            break;
            case 'movie_rental':
            setCategoryHandled("Locadora")
            break;
            case 'movie_theater':
            setCategoryHandled("Cinema")
            break;
            case 'moving_company':
            setCategoryHandled("Empresa de Mudanças")
            break;
            case 'museum':
            setCategoryHandled("Museu")
            break;
            case 'night_club':
            setCategoryHandled("Boate")
            break;
            case 'painter':
            setCategoryHandled("Pintora")
            break;
            case 'park':
            setCategoryHandled("Parque")
            break;
            case 'parking':
            setCategoryHandled("Estacionamento")
            break;
            case 'pet_store':
            setCategoryHandled("PetShop")
            break;
            case 'pharmacy':
            setCategoryHandled("Farmácia")
            break;
            case 'physiotherapist':
            setCategoryHandled("Fisioterapeuta")
            break;
            case 'plumber':
            setCategoryHandled("Encanador")
            break;
            case 'police':
            setCategoryHandled("Policia")
            break;
            case 'post_office':
            setCategoryHandled("Correios")
            break;
            case 'primary_school':
            setCategoryHandled("Escola Primária")
            break;
            case 'real_estate_agency':
            setCategoryHandled("Agência Imobiliária")
            break;
            case 'restaurant':
            setCategoryHandled("Restaurante")
            break;
            case 'roofing_contractor':
            setCategoryHandled("Empreiteira de telhados")
            break;
            case 'rv_park':
            setCategoryHandled("Camping para trailers")
            break;
            case 'school':
            setCategoryHandled("Escola")
            break;
            case 'secondary_school':
            setCategoryHandled("Escola secundária ")
            break;
            case 'shoe_store':
            setCategoryHandled("Sapataria")
            break;
            case 'shopping_mall':
            setCategoryHandled("Shopping Mall")
            break;
            case 'spa':
            setCategoryHandled("Spá")
            break;
            case 'stadium':
            setCategoryHandled("Estádio")
            break;
            case 'storage':
            setCategoryHandled("Armazenamento")
            break;
            case 'store':
            setCategoryHandled("Loja")
            break;
            case 'subway_station':
            setCategoryHandled("Estação de metrô")
            break;
            case 'supermarket':
            setCategoryHandled("Supermercado")
            break;
            case 'synagogue':
            setCategoryHandled("Sinagoga")
            break;
            case 'taxi_stand':
            setCategoryHandled("Ponto de táxi")
            break;
            case 'tourist_attraction':
            setCategoryHandled("Atração turista")
            break;
            case 'train_station':
            setCategoryHandled("Estação de trem")
            break;
            case 'transit_station':
            setCategoryHandled("Estação de trânsito")
            break;
            case 'travel_agency':
            setCategoryHandled("Agência de viagem")
            break;
            case 'university':
            setCategoryHandled("Universidade")
            break;
            case 'veterinary_care':
            setCategoryHandled("Cuidados veterinários")
            break;
            case 'zoo':
            setCategoryHandled("Zoológico")
            break;
            default:
            setCategoryHandled("Local")
        }
    }

    const [place, setPlace] = useState({
        name: undefined,
        address: undefined,
        phone: undefined,
        category: undefined,
        imageURL: undefined
    })

return (
    <PlaceContext.Provider 
        value={{
            place,
            setPlace,
            categoryHandled,
            handleCategory,
            setCategoryToHandle,
            categoryToHandle,
            isRendered,
            setIsRendered
        }}
        >{props.children}</PlaceContext.Provider>
    )
}

export const usePlace = () => React.useContext(PlaceContext)