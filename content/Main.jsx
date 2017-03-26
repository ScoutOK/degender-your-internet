'use strict'

import React from 'react'
import { render } from 'react-dom'
import Topbar from './components/Topbar'


import styles from './content.css'

export default (data, oldText, newText) => {
  render (
    <Topbar data={data} oldText={oldText} newText={newText}/>,
    document.getElementById('degender-bar')
  )
}