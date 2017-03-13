'use strict'

import React from 'react'
import { render } from 'react-dom'
import Topbar from './components/Topbar'


import styles from './content.css'

export default () => {
  render (
    <Topbar />,
    document.getElementById('degender-bar')
  )
}