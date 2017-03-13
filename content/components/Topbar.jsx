import React, { Component } from 'react';
//import {connect} from 'react-redux'


export default class Topbar extends Component {
  constructor () {
    super();
    this.state ={
      converted: false
    };
  }
  color = (speech) => {
    let changed = document.getElementsByClassName(`converted ${speech}`)
    //check to see if active-converted class has already been appended
    if (changed[0].className.split(' ').indexOf('active-converted') === -1) {
      for (let i = 0; i < changed.length; i++) {
        changed[i].className = `${changed[i].className} active-converted`
      }
    } else {
      for (let i = 0; i < changed.length; i++) {
        changed[i].className = 'converted ' + speech
      }
    }
  }

  render() {
    console.log(this.state)
    console.log(this.highlightPro)
    return  (
      <div>
        <h1>This page has been degendered</h1>
        <div className='buttons'>
          <button id="revert">Revert</button>
          <button id="highPro" onClick={()=>this.color('pronoun')}>Altered Pronouns</button>
          <button id='highAdj' onClick={()=>this.color('adj')}>Altered Adjectives</button>
          <button id='highNoun' onClick={()=>this.color('noun')}>Altered Nouns</button>
          <button id='analyze'>Analyze Page</button>
        </div>
      </div>
    )
  }
}

