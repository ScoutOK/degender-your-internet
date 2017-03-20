import React from 'react'
import { render } from 'react-dom'
import Analytics from './components/Analytics'

import styles from './page.css'

console.log('PLEASE!')

//inform the background that we are ready and get data
chrome.runtime.sendMessage({message: "pageReady"}, function(response) {
  console.log(response);
}); 

render (
  <Analytics />,
  document.getElementById('analytics')
)
