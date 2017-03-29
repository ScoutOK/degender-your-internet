import React, { Component } from 'react';
//import {connect} from 'react-redux'


export default class Spinner extends Component {
  constructor (data) {
    super();
  }

  render() {
    return  (
      <div id='spinner-overlay'>
        <img id='spinny-wheel' src='/img/Loading_icon.gif' alt='loading wheel' />
        <h1>LOADING</h1>
      </div>
    )
  }
}
