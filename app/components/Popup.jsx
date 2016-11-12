import React, { Component } from 'react';
//import { Link } from 'react-router';
import {connect} from 'react-redux';
import { sendToPage } from '../ducks/convert'


export class Popup extends Component {
  render() {
    return (
      <div id='popup-box'>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id='degender-button' onClick={this.props.sendToPage}>Degender This Page</button>
        <ul>
          <li>Settings</li>
          <li>Show Altered Words</li>
          <li><a href='/analytics.html' target='_blank'>Analyze this page</a></li>
        </ul>
      </div>
      )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    sendToPage: () => {
      dispatch(sendToPage())
    }
  }
}

export default connect(null, mapDispatchToProps)(Popup)
