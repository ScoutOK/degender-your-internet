import React from 'react'
import { render } from 'react-dom'
import AnalyticsContainer from './components/AnalyticsContainer'

import styles from './page.css'
import { Provider } from 'react-redux';
import store from './store'

//reducers
import {setTitle} from './ducks/title';
import {setUrl} from './ducks/url';
import {setData} from './ducks/data';

//process setData
import posProcess from './posProcess'

let pageData = {}

//inform the background that we are ready and get data
chrome.runtime.sendMessage({message: "pageReady"}, function(response) {
  console.log('the response', response);
  pageData = response;
  store.dispatch(setTitle(pageData.title));
  store.dispatch(setUrl(pageData.url));
  store.dispatch(setData(pageData.data));
  posProcess(pageData.data)
}); 

render (
  <Provider store={store}>
    <AnalyticsContainer />
  </Provider>,
  document.getElementById('analytics')
)
