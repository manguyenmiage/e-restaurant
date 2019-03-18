import {combineReducers} from "redux";
import authentificationReducer from './authentification'

const rootReducer = combineReducers(
    {
        authentificationState : authentificationReducer
    }
)
export default rootReducer