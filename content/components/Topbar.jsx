import React, { Component } from 'react';
import {connect} from 'react-redux'


export default class Topbar extends Component {
  render() {
    console.log(this.state)
    return  (
      <div>

        <h1>This page has been degendered</h1>
        <button id='revert'>Revert</button>
        <button id='highPro'>Altered Pronouns</button>
        <button id='highAdj'>Altered Adjectives</button>
        <button id='highNone'>Altered Nouns</button>
        <button id='highAll'>All Altered Text</button>

      </div>
    )
  }
}

