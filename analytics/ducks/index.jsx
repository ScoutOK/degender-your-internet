import { combineReducers } from 'redux';
import title from './title';
import url from './url';
import data from './data';
import view from './view';
import pronouns from './pronouns';
import nouns from './nouns';
import adjectives from './adjectives'

const rootReducer = combineReducers({
  title,
  url,
  data,
  view,
  pronouns,
  nouns,
  adjectives,
})

export default rootReducer;