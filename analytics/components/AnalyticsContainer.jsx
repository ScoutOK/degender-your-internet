import React, { Component } from 'react';
import {connect} from 'react-redux';


//word visuals
import Analytics from './Analytics'

//helper functions
import {sumPronouns, nomPronouns, refPronouns, sumNouns} from '../categories'
import theme from '../chartTheme'

//reducers
import {changeView} from '../ducks/view';
import {setAllPronouns, setNomPronouns, setRefPronouns} from '../ducks/pronouns'
import {setAllNouns} from '../ducks/nouns'

class AnalyticsContainer extends Component {

  constructor () {
    super();
    this.keydown = this.keydown.bind(this);
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

  keydown (e, pos) {
    console.log('the event',e.keyCode)
    if (e.keyCode === 13) {
      this.props.changeView(pos);
    }
  }
  render () {
    return  (
      <Analytics
        view={this.props.view}
        title={this.props.title}
        url={this.props.url}
        changeView={this.props.changeView}
        keydown={this.keydown}
      />
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
 
export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsContainer)
