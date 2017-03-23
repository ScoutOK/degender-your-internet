import { combineReducers } from 'redux';
import title from './title';
import url from './url';
import data from './data';
import view from './view'

const rootReducer = combineReducers({
  title,
  url,
  data,
  view
})

export default rootReducer
