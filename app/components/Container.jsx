import React, { Component } from 'react';


export default class Container extends Component {
  render() {
    <div>
      <nav>
        <h1>Degender Analiytics</h1>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
      </footer>
    </div>
  }
}
