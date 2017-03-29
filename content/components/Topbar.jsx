
import React from 'react';

export default ({converted, color, analyze, switchConvert}) => (
  <div className='color-top'>
    <h1>This page has been {converted ? 'degendered' : 'reverted to it\'s original form'}</h1>
    <div className='buttons'>
      <button id="revert" onClick={switchConvert}>{converted ? 'Revert' : 'Degender'}</button>
      <button id="highPro" onClick={() => color('pronoun')}>Altered Pronouns</button>
      <button id='highAdj' onClick={() => color('adjective')}>Altered Adjectives</button>
      <button id='highNoun' onClick={() => color('noun')}>Altered Nouns</button>
      <button id='analyze' onClick={analyze}>Analyze Page</button>
    </div>
  </div>
)

