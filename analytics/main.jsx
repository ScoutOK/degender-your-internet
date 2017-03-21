import React from 'react'
import { render } from 'react-dom'
import Analytics from './components/Analytics'

import styles from './page.css'
import { Provider } from 'react-redux';
import store from './store'

//reducers
import {setTitle} from './ducks/title';
import {setUrl} from './ducks/url';
import {setData} from './ducks/data';

let pageData = {}

//inform the background that we are ready and get data
chrome.runtime.sendMessage({message: "pageReady"}, function(response) {
  console.log(response);
  pageData = response;
  store.dispatch(setTitle(pageData.title));
  store.dispatch(setUrl(pageData.url));
  store.dispatch(setData(pageData.data));
}); 

render (
  <Provider store={store}>
    <Analytics/>
  </Provider>,
  document.getElementById('analytics')
)
