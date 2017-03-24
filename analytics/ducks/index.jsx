import { combineReducers } from 'redux';
import title from './title';
import url from './url';
import data from './data';
import view from './view';
import pronouns from './pronouns';
import nouns from './nouns'

const rootReducer = combineReducers({
  title,
  url,
  data,
  view,
  pronouns,
  nouns,
})

export default rootReducer
