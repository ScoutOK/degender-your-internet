import React from 'react'
import { render } from 'react-dom'
import Analytics from './components/Analytics'

import styles from './page.css'

let pageData = {}

//inform the background that we are ready and get data
chrome.runtime.sendMessage({message: "pageReady"}, function(response) {
  console.log(response);
  pageData = response;
}); 

render (
  <Analytics data={pageData.data} title={pageData.title} url={pageData.url}/>,
  document.getElementById('analytics')
)
