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
        <img id='spinny-wheel' src={spinnerUrl} alt='loading wheel' />
      </div>
    )
  }
}
