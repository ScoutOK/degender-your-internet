import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'



render (
          <Router history={browserHistory}>
            <Route path="/" component={Container} >
            </Route>
          </Router>
        ,
  document.getElementById('app')
)
