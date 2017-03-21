import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mascPronouns, femPronouns} from '../categories'


const Analytics = (props) => {
  console.log('da props',props);
  let totalProNum = 0;
  let mascProNum = 0;
  let femProNum = 0;
  for (key in props.pronouns) {
    totalProNum += props.pronouns[key];
    if (femPronouns.indexOf(props.pronouns[key]) > -1) {
      femProNum += props.pronouns[key];
    }
    if (mascPronouns.indexOf(props.pronouns[key]) > -1) {
      mascProNum += props.pronouns[key];
    }
  }
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
      <p>READY FOR GRAPHS</p>
      <span>There were {femProNum} feminine and {mascProNum} masculine out of {totalProNum} total gendered pronouns</span>
    </main>
    <footer>
    </footer>
  </div>
  )
}

const mapStateToProps = ({title, url, data}) => ({
  title,
  url,
  data
})

export default connect(mapStateToProps)(Analytics)
