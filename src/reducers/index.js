import { combineReducers } from 'redux'
import spaceXReducer from './spaceXReducer'

const rootReducer = combineReducers({
    spaceXReducer: spaceXReducer,
})

export default rootReducer
