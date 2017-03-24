import { combineReducers } from 'redux';
import title from './title';
import url from './url';
import data from './data';
import view from './view';
import pronouns from './pronouns'

const rootReducer = combineReducers({
  title,
  url,
  data,
  view,
  pronouns
})

export default rootReducer
