import React, { Component } from 'react';
import {connect} from 'react-redux'


const Analytics = (props) => {
  console.log('da props',props);
  return  (
  <div>
    <nav>
      <h1>Degender Analytics</h1>
      <h2>{props.title}</h2>
      <a href={props.url}><span>{props.url}</span></a>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </nav>
    <main>
      <p>GRAPHS</p>
    </main>
    <footer>
    </footer>
  </div>
  )
}

const mapStateToProps = (state) => ({
  title,
  url,
  data
})

export default connect()(Analytics)
