import React, { Component } from 'react';
//import {connect} from 'react-redux'

const spinnerUrl = chrome.extension.getURL("img/Loading_icon.gif")

export default class Spinner extends Component {
  constructor (data) {
    super();
  }

  render() {
    return  (
      <div id='spinner-overlay'>
        <h1>PROCESSING</h1>
        <div className='svg-cont'>
          <svg>
              <circle r='10' style={{'animation-delay' : '-1.2s',
                transform: 'rotate(0deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-1.1s', transform: 'rotate(30deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-1.0s', transform: 'rotate(60deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.9s', transform: 'rotate(90deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.8s', transform: 'rotate(120deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.7s', transform: 'rotate(150deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.6s', transform: 'rotate(180deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.5s', transform: 'rotate(210deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.4s', transform: 'rotate(240deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.3s', transform: 'rotate(270deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.2s', transform: 'rotate(300deg) translate(300%)'}} />
              <circle r='10' style={{'animation-delay' : '-0.1s', transform: 'rotate(330deg) translate(300%)'}} />
          </svg>
        </div>
      </div>
    )
  }
}
