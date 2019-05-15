import {create_trip_constants} from '../constants/create_trip_constants'

function doCreateItineary (itineary) {
    return {type: create_trip_constants.CREATE_ITINEARY, itineary}
}

function doSelectDestination (destination) {
    return {type: create_trip_constants.SELECT_DESTINATION, destination}
}


export {
    doCreateItineary,
    doSelectDestination
}

