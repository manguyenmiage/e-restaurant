import {combineReducers} from "redux";
import authentificationReducer from './authentification_reducer'

const rootReducer = combineReducers(
    {
        authentificationState : authentificationReducer
    }
)
export default rootReducer