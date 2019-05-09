import {create_trip_constants} from '../constants/create_trip_constants'

function doCreateItineary (itineary) {
    console.log(itineary)
    return {type: create_trip_constants.CREATE_ITINEARY, itineary}
}

export {
    doCreateItineary
}

