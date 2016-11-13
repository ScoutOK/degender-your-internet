import React, { Component } from 'react';
import {connect} from 'react-redux'


export default class Topbar extends Component {
  constructor () {
    super();
    this.state ={
      converted: false
    };
    this.revert = this.revert.bind(this);
  }
  revert() {
    console.log('in revert page')
  }
  render() {
    console.log(this.state)
    return  (
      <div>
        <h1>This page has been degendered</h1>
        <div className='buttons'>
          <button id='highPro'>Altered Pronouns</button>
          <button id='highAdj'>Altered Adjectives</button>
          <button id='highNone'>Altered Nouns</button>
          <button id='highAll'>All Altered Text</button>
          <button id='analyze'>Analyze Page</button>
        </div>
      </div>
    )
  }
}

