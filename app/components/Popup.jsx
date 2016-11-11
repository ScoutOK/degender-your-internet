import React, { Component } from 'react';
//import { Link } from 'react-router';
import {connect} from 'react-redux'


export class Popup extends Component {
  render() {
    return (
      <div>
        <button>Degender This Page</button>
        <ul>
          <li>Settings</li>
          <li>Show Altered Words</li>
          <li><a href='/analytics.html' target='_blank'>Analyze this page</a></li>
        </ul>
      </div>
      )
  }
}

export default connect()(Popup)
