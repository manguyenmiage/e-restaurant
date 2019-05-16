import {create_trip_constants} from "../constants/create_trip_constants";

const INITIAL_STATE = {
    zoom : 5,
    destinations : [],
    coordinates : {
        france : {
            name : 'France',
            coords : {
                lat: 46.567249,
                lng:2.455230
            }
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