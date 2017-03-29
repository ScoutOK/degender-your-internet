import React, { Component } from 'react';
import {connect} from 'react-redux';

//word visuals
import Analytics from './Analytics'

//reducers
import {changeView} from '../ducks/view';


class AnalyticsContainer extends Component {

  constructor () {
    super();
    this.keydown = this.keydown.bind(this);
  }

  keydown (e, pos) {
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
