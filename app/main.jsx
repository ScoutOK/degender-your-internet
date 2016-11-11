import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'
import Popup from './components/Popup'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDhVC1K39EUPWBekzHXgltSe1xkQR6US-c",
    authDomain: "degendertheinternet.firebaseapp.com",
    databaseURL: "https://degendertheinternet.firebaseio.com",
    storageBucket: "degendertheinternet.appspot.com",
    messagingSenderId: "919863122992"
};


firebase.initializeApp(config);

window.React = React;

render (
          <Container />
        ,
  document.getElementById('app')
)
