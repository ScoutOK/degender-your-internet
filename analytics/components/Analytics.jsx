import React, { Component } from 'react';
import {connect} from 'react-redux'


export default class Analytics extends Component {
  render() {
    return  (
    <div>
      <nav>
        <h1>Degender Analytics</h1>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
      <main>
        <p>Content will go here if I even get this far, maybe tabs? There is a great big world of possibility!</p>
      </main>
      <footer>
      </footer>
    </div>
    )
  }
}


//export default connect()(Analytics)
