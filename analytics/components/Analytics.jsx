import React, { Component } from 'react';
import {connect} from 'react-redux';


//word visuals
import PronounsContainer from './PronounsContainer'
import NounsContainer from './NounsContainer'

//helper functions
import {sumPronouns, nomPronouns, refPronouns, sumNouns} from '../categories'
import theme from '../chartTheme'

//reducers
import {changeView} from '../ducks/view';
import {setAllPronouns, setNomPronouns, setRefPronouns} from '../ducks/pronouns'
import {setAllNouns} from '../ducks/nouns'

class Analytics extends Component {

  constructor () {
    super();
  }

  componentWillReceiveProps (nextProps) {
    const pronNum = sumPronouns(nextProps.data.pronouns);
    this.props.setAllPronouns(pronNum);
    const nomPron = nomPronouns(nextProps.data.pronouns);
    this.props.setNomPronouns(nomPron);
    const refPron = refPronouns(nextProps.data.pronouns);
    this.props.setRefPronouns(refPron);
    const allPron = sumNouns(nextProps.data.nouns);
    this.props.setAllNouns(allPron);
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
        {this.props.view === 'pronouns' ? <PronounsContainer theme={theme}/> : null}
        {this.props.view === 'nouns' ? <NounsContainer theme={theme}/> : null}
        {this.props.view === 'adjectives' ? 'ADJECTIVES WILL GO HERE' : null}
      </main>
      <footer>
      </footer>
    </div>
    )
    }
  
}

const mapStateToProps = ({title, url, view, data}) => ({
  title,
  url,
  view, 
  data
})

const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => {
    dispatch(changeView(view))
  },
  setAllPronouns: (data) => {
    dispatch(setAllPronouns(data))
  },
  setNomPronouns: (data) => {
    dispatch(setNomPronouns(data))
  },
  setRefPronouns: (data) => {
    dispatch(setRefPronouns(data))
  },
  setAllNouns: (data) => {
    dispatch(setAllNouns(data))
  }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Analytics)
