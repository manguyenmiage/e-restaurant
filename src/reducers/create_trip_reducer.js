import {create_trip_constants} from "../constants/create_trip_constants";

const INITIAL_STATE = {
    zoom : 5,
    destinations : [],
    coordinates : {
        france : {
            name : 'France',
            coords : {
                lat: 48.856614,
                lng:2.3522219
            },
            url : 'https://www.countryflags.io/fr/flat/32.png'
        },
        spain : {
            name : 'Espagne',
            coords : {
                lat: 40.4167754,
                lng: -3.7037902
            },
            url : 'https://www.countryflags.io/es/flat/32.png'
        },
        italy : {
            name : 'Italie',
            coords : {
                lat: 41.902784,
                lng: 12.496366
            },
            url : 'https://www.countryflags.io/it/flat/32.png'
        },
        holland : {
            name : 'Pay-bas',
            coords : {
                lat: 52.370216,
                lng:4.895168
            },
            url : 'https://www.countryflags.io/nl/flat/32.png'
        },

    },
    markerFranceAdded : false,
    listItineary:[]
}

const applyCreateItineary = (state, action) => {
    return {
        ...state,
        listItineary: [...state.listItineary, action.itineary]
    }
}
const applySelectDestination = (state, action) => {
    return {
        ...state,
        destinations: [...state.destinations, action.destination],
    }
}

function createTripReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case create_trip_constants.CREATE_ITINEARY :
            return applyCreateItineary(state, action)
        case create_trip_constants.SELECT_DESTINATION :
            return applySelectDestination(state, action)
        default:
            return state
    }
}
export default createTripReducer