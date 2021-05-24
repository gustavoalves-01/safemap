import React, { useState } from 'react'

export const PlaceContext = React.createContext({})

export const PlaceProvider = (props) => {
    let [categoryHandled, setCategoryHandled] = useState(undefined)
    let [categoryToHandle, setCategoryToHandle] = useState(undefined)
    let [isRendered, setIsRendered] = useState(false)
    let [placeDetails, setPlaceDetails] = useState({})
    const [isPlaceReady, setIsPlaceReady] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleCategory() {
        switch (categoryToHandle) {
            case 'accounting':
                setCategoryHandled("Contabilidade")
                break;
            case 'airport':
                setCategoryHandled("Aeroporto")
                break;
            case 'amusement_park':
                setCategoryHandled("Parque de diversões")
                break;
            case 'aquarium':
                setCategoryHandled("Aquário")
                break;
            case 'art_gallery':
                setCategoryHandled("Galeria de Arte")
                break;
            case 'atm':
                setCategoryHandled("Caixa eletrônico")
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
                setCategoryHandled("Salão de beleza")
                break;
            case 'bicycle_store':
                setCategoryHandled("Loja de bicicletas")
                break;
            case 'book_store':
                setCategoryHandled("Livraria")
                break;
            case 'bowling_alley':
                setCategoryHandled("Pista de boliche")
                break;
            case 'bus_station':
                setCategoryHandled("Estação de ônibus")
                break;
            case 'cafe':
                setCategoryHandled("Cafeteria")
                break;
            case 'campground':
                setCategoryHandled("Área de camping")
                break;
            case 'car_dealer':
                setCategoryHandled("Concessionária")
                break;
            case 'car_rental':
                setCategoryHandled("Aluguel de carros")
                break;
            case 'car_repair':
                setCategoryHandled("Mecânica")
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
                setCategoryHandled("Loja de roupas")
                break;
            case 'convenience_store':
                setCategoryHandled("Loja de conveniência")
                break;
            case 'courthouse':
                setCategoryHandled("Tribunal")
                break;
            case 'dentist':
                setCategoryHandled("Dentista")
                break;
            case 'department_store':
                setCategoryHandled("Loja de departamento")
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
                setCategoryHandled("Floricultura")
                break;
            case 'funeral_home':
                setCategoryHandled("Casa funerária")
                break;
            case 'furniture_store':
                setCategoryHandled("Loja de móveis")
                break;
            case 'gas_station':
                setCategoryHandled("Posto de gasolina")
                break;
            case 'gym':
                setCategoryHandled("Academia")
                break;
            case 'hair_care':
                setCategoryHandled("Cabeleireiro")
                break;
            case 'hardware_store':
                setCategoryHandled("Loja de ferramentas")
                break;
            case 'hindu_temple':
                setCategoryHandled("Templo hindu")
                break;
            case 'home_goods_store':
                setCategoryHandled("Loja HomeGoods")
                break;
            case 'hospital':
                setCategoryHandled("Hospital")
                break;
            case 'insurance_agency':
                setCategoryHandled("Agência de seguros")
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
                setCategoryHandled("Estação de metrô")
                break;
            case 'liquor_store':
                setCategoryHandled("Loja de bebidas")
                break;
            case 'local_government_office':
                setCategoryHandled("Escritório do governo local")
                break;
            case 'locksmith':
                setCategoryHandled("Chaveiro")
                break;
            case 'lodging':
                setCategoryHandled("Pousada")
                break;
            case 'meal_delivery':
                setCategoryHandled("Entrega de refeição")
                break;
            case 'meal_takeaway':
                setCategoryHandled("Refeição para viagem")
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
                setCategoryHandled("Empresa de mudanças")
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
                setCategoryHandled("Escola primária")
                break;
            case 'real_estate_agency':
                setCategoryHandled("Agência imobiliária")
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
                setCategoryHandled("Shopping")
                break;
            case 'spa':
                setCategoryHandled("Spá")
                break;
            case 'stadium':
                setCategoryHandled("Estádio")
                break;
            case 'storage':
                setCategoryHandled("Armazém")
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
                setCategoryHandled("Veterinário")
                break;
            case 'zoo':
                setCategoryHandled("Zoológico")
                break;
            default:
                setCategoryHandled("Local")
        }
    }

    const [place, setPlace] = useState(
        {
        id: null,
        name: undefined,
        address: undefined,
        phone: undefined,
        category: undefined,
        imageURL: undefined,
        people: null,
       }
)

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
                setIsRendered,
                placeDetails,
                setPlaceDetails,
                isPlaceReady, 
                setIsPlaceReady,
                loading, 
                setLoading
            }}
        >{props.children}</PlaceContext.Provider>
    )
}

export const usePlace = () => React.useContext(PlaceContext)