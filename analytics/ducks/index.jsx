import { combineReducers } from 'redux';
import title from './title';
import url from './url';
import data from './data';

const rootReducer = combineReducers({
  title,
  url,
  data
})

export default rootReducer
