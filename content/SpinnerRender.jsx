'use strict'

import React from 'react'
import { render } from 'react-dom'
import Spinner from './components/Spinner'


import styles from './content.css'

export default () => {
  render (
    <Spinner />,
    document.getElementById('spinner-overlay')
  )
}