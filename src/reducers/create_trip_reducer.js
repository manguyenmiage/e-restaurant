import {create_trip_constants} from "../constants/create_trip_constants";

const INITIAL_STATE = {
    listItineary:[]
}

const applyCreateItineary = (state, action) => {
    return {
        ...state,
        listItineary: [...state.listItineary, action.itineary]
    }
}


function createTripReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case create_trip_constants.CREATE_ITINEARY :
            return applyCreateItineary(state, action)
        default:
            return state
    }
}
export default createTripReducer