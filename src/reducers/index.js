import {combineReducers} from "redux";
import authentificationReducer from './authentification_reducer'
import dashboardReducer from './dashboard_reducer'

const rootReducer = combineReducers(
    {
        authentificationState : authentificationReducer,
        dashboardState : dashboardReducer
    }
)
export default rootReducer