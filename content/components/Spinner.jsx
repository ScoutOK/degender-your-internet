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
              <circle r='10' style={{transform: 'rotate(0deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(30deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(60deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(90deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(120deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(150deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(180deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(210deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(240deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(270deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(300deg) translate(300%)'}} />
              <circle r='10' style={{transform: 'rotate(330deg) translate(300%)'}} />
          </svg>
        </div>
        <img id='spinny-wheel' src={spinnerUrl} alt='loading wheel' />
      </div>
    )
  }
}
