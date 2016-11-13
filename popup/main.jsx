import React from 'react'
import { render } from 'react-dom'
import Popup from './components/Popup'

import { Provider } from 'react-redux'
import store from './store'

//seems like react router doesn't work without a server :((((
//import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDhVC1K39EUPWBekzHXgltSe1xkQR6US-c",
    authDomain: "degendertheinternet.firebaseapp.com",
    databaseURL: "https://degendertheinternet.firebaseio.com",
    storageBucket: "degendertheinternet.appspot.com",
    messagingSenderId: "919863122992"
};


firebase.initializeApp(config);

if (typeof window !== 'undefined') {
    window.React = React;
}

render (
        <Provider store={store}>
          <Popup />
        </Provider>
        ,
  document.getElementById('popup')
)
