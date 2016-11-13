import React, { Component } from 'react';
import {connect} from 'react-redux'


export default class Topbar extends Component {
  render() {
    console.log(this.state)
    return  (
      <div>

        <h1>This page has been degendered</h1>
        <button id='revert'>Revert</button>
        <button id='highPro'>Highlight Altered Pronouns</button>
        <button id='highAdj'>Highlight Altered Adjectives</button>
        <button id='highNone'>Highlight Altered Nouns</button>
        <button id='highAll'>Highlight All Altered Text</button>

      </div>
    )
  }
}

