import React, { Component } from 'react';
//import {connect} from 'react-redux'


export default class Topbar extends Component {
  constructor (data) {
    super();
    this.state ={
      converted: true
    };
    this.color = this.color.bind(this);
    this.switchConvert = this.switchConvert.bind(this);
    this.analyze = this.analyze.bind(this)
  }

  color (speech) {
    let changed = document.getElementsByClassName(`converted ${speech}`)
    //see if there are any appropriate words
    if (changed.length < 1){
      //maybe do something here
      alert(`degender your internet did not find any gendered ${speech}s on this page`)
      return
    }
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

  switchConvert () {
    if (this.state.converted) {
      this.setState({converted: false});
      document.getElementById('degender-wrapper').innerHTML = this.props.oldText;
      document.getElementById('highPro').disabled = true;
      document.getElementById('highAdj').disabled = true;
      document.getElementById('highNoun').disabled = true;
    } else {
      this.setState({converted: true});
      document.getElementById('degender-wrapper').innerHTML = this.props.newText
      document.getElementById('highPro').disabled = false;
      document.getElementById('highAdj').disabled = false;
      document.getElementById('highNoun').disabled = false;
    }
  }

  analyze () {
    const responseObj = {
      title: document.title,
      url: document.URL,
      data: this.props.data
    }
    console.log('in analyze function')
    chrome.runtime.sendMessage({message: "analyze", pageData: responseObj});
  }

  render() {
    console.log('what be the props', this.props)
    return  (
      <div>
        <h1>This page has been {this.state.converted ? 'degendered' : 'reverted to it\'s original form'}</h1>
        <div className='buttons'>
          <button id="revert" onClick={this.switchConvert}>{this.state.converted ? 'Revert' : 'Degender'}</button>
          <button id="highPro" onClick={() => this.color('pronoun')}>Altered Pronouns</button>
          <button id='highAdj' onClick={() => this.color('adjective')}>Altered Adjectives</button>
          <button id='highNoun' onClick={() => this.color('noun')}>Altered Nouns</button>
          <button id='analyze' onClick={this.analyze}>Analyze Page</button>
        </div>
      </div>
    )
  }
}

