import React from 'react';
//import {connect} from 'react-redux'


export default () => (
  <div>
    <h1>This page has been {this.props.converted ? 'degendered' : 'reverted to it\'s original form'}</h1>
    <div className='buttons'>
      <button id="revert" onClick={this.props.switchConvert}>{this.props.converted ? 'Revert' : 'Degender'}</button>
      <button id="highPro" onClick={() => this.props.color('pronoun')}>Altered Pronouns</button>
      <button id='highAdj' onClick={() => this.props.color('adjective')}>Altered Adjectives</button>
      <button id='highNoun' onClick={() => this.props.color('noun')}>Altered Nouns</button>
      <button id='analyze' onClick={this.props.analyze}>Analyze Page</button>
    </div>
  </div>
)

