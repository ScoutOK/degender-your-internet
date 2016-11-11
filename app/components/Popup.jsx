import React, { Component } from 'react';
//import { Link } from 'react-router';
import {connect} from 'react-redux';
import { fetchHTML } from '../ducks/pageHtml'


export class Popup extends Component {
  render() {
    return (
      <div id='popup-box'>
        <button onClick={() => this.props.fetchHTML(currentTab)}>Degender This Page</button>
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
    fetchHTML: () => {
      dispatch(fetchHTML())
    }
  }
}

export default connect(null, mapDispatchToProps)(Popup)
