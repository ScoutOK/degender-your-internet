import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  button: require('./button').default
})

export default rootReducer
