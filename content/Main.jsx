'use strict'

import React from 'react'
import { render } from 'react-dom'
import Topbar from './components/Topbar'


import styles from './content.css'

export default (data) => {
  render (
    <Topbar data={data}/>,
    document.getElementById('degender-bar')
  )
}