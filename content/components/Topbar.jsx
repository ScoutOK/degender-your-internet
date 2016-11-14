import React, { Component } from 'react';
//import {connect} from 'react-redux'


export default class Topbar extends Component {
  constructor () {
    super();
    this.state ={
      converted: false
    };
    this.highlightPro = this.highlightPro.bind(this)
  }
  highlightPro() {
    console.log('in highlight pro')
  }
  render() {
    console.log(this.state)
    console.log(this.highlightPro)
    return  (
      <div>
        <h1>This page has been degendered</h1>
        <div className='buttons'>
          <button id="revert">Revert</button>
          <button id="highPro">Altered Pronouns</button>
          <button id='highAdj'>Altered Adjectives</button>
          <button id='highNoun'>Altered Nouns</button>
          <button id='analyze'>Analyze Page</button>
        </div>
      </div>
    )
  }
}

