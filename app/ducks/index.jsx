import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  button: require('./button').default,
  html: require('./pageHtml').default
})

export default rootReducer
