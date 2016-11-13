import React, { Component } from 'react';
//import { Link } from 'react-router';
import {connect} from 'react-redux';
import { sendToPage } from '../ducks/convert'


export default class Popup extends Component {
  constructor () {
    super();
    this.state ={
      converted: false
    };
    this.degender = this.degender.bind(this);
  }
  degender () {
    console.log('is it even running this?')
    if (this.state.converted) {
      this.setState({converted: false})
      console.log('in true')
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      console.log(activeTab)
      chrome.tabs.sendMessage(activeTab.id, {"message": "revert"});
      });
    } else {
      this.setState({converted: true})
      console.log('in false')
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      console.log(activeTab)
      chrome.tabs.sendMessage(activeTab.id, {"message": "convert"});
      });
    }
  }

  render() {
    return (
      <div id='popup-box'>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id='degender-button' onClick={this.degender}>{this.state.converted === true ? 'Revert' : 'Degender This Page'}</button>
        <ul>
          <li>Settings</li>
          <li>Show Altered Words</li>
          <li><a href='/analytics.html' target='_blank'>Analyze this page</a></li>
        </ul>
      </div>
      )
  }
}


