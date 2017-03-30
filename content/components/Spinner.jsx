import React, { Component } from 'react';
//import {connect} from 'react-redux'

const spinnerUrl = chrome.extension.getURL("img/Loading_icon.gif")

export default class Spinner extends Component {
  constructor (data) {
    super();
  }

  createSpinner(num) {
    console.log('creating spinner')
    let arr = []
    for (let idx = 0; idx < num; idx++) {
      console.log(idx)
      arr.push(<circle key={idx} r='10' style={{animationDelay : `${(idx - num)/10}s`, transform: `rotate(${idx * (360/num)}deg) translate(300%)`}} />)
    }
    return arr
  }

  render() {
    return  (
      <div id='spinner-overlay'>
        <h1>PROCESSING</h1>
        <div className='svg-cont'>
          <svg>
            {this.createSpinner(12)}
          </svg>
        </div>
      </div>
    )
  }
}
