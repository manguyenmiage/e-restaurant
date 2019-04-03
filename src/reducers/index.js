import {combineReducers} from "redux";
import authentificationReducer from './authentification_reducer'
import profileReducer from './profile_reducer'

const rootReducer = combineReducers(
    {
        authentificationState : authentificationReducer,
        profileState : profileReducer
    }
)
export default rootReducer