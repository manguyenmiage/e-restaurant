import {combineReducers} from "redux";
import authentificationReducer from './authentification_reducer'
import dashboardReducer from './dashboard_reducer'
import createTripReducer from './create_trip_reducer'

const rootReducer = combineReducers(
    {
        authentificationState : authentificationReducer,
        dashboardState : dashboardReducer,
        createTripState : createTripReducer
    }
)
export default rootReducer