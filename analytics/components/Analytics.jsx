import React, { Component } from 'react';
import {connect} from 'react-redux';

import {VictoryPie} from 'victory';

//word visuals
import Pronouns from './Pronouns'

//helper functions

import theme from '../chartTheme'

//reducers
import {changeView} from '../ducks/view'

class Analytics extends Component {

  constructor () {
    super();
    this.state = {
      pronouns: {},
      nomPron: {},
      refPron: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    const pronNum = sumPronouns(nextProps.data.pronouns);
    this.setState({pronouns: pronNum});
    const nomPron = nomPronouns(nextProps.data.pronouns);
    this.setState({nomPron});
    const refPron = refPronouns(nextProps.data.pronouns);
    this.setState({refPron})
  }

  render () {
    return  (
    <div>
      <nav>
        <h1>Degender Analytics</h1>
        <h2>{this.props.title}</h2>
        <a href={this.props.url}><span className='page-url'>{this.props.url}</span></a>
        <ul>
          <li><a onClick={()=>this.props.changeView('pronouns')}>Pronouns</a></li>
          <li><a onClick={()=>this.props.changeView('nouns')}>Nouns</a></li>
          <li><a onClick={()=>this.props.changeView('adjectives')}>Adjectives</a></li>
        </ul>
      </nav>
      <main>
        {this.props.view === 'pronouns' ? <Pronouns theme={theme}/> : null}
        {this.props.view === 'nouns' ? 'NOUNS WILL GO HERE' : null}
        {this.props.view === 'adjectives' ? 'ADJECTIVES WILL GO HERE' : null}
      </main>
      <footer>
      </footer>
    </div>
    )
    }
  
}

const mapStateToProps = ({title, url, view}) => ({
  title,
  url,
  view
})

const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => {
    dispatch(changeView(view))
  }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Analytics)
