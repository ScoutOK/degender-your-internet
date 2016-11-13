import React, { Component } from 'react';
import {connect} from 'react-redux'


export class Topbar extends Component {
  render() {
    return  (
      <div>
        <h1>This page has been degendered</h1>
      </div>
    )
  }
}


export default connect()(Topbar)
