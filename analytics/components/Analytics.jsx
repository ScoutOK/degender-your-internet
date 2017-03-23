import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mascPronouns, femPronouns, sumPronouns} from '../categories'


class Analytics extends Component {

  constructor () {
    super();
    this.state = {
      allPro: 0,
      femPro: 0,
      mascPro: 0,
    }
  }

  componentWillReceiveProps (nextProps) {
    const pronNum = sumPronouns(nextProps.data.pronouns);
    console.log(pronNum);
    this.setState({allPro: pronNum.total})
    this.setState({femPro: pronNum.fem})
    this.setState({mascPro: pronNum.masc})
  }

  render () {
    console.log('da props',this.props);

    return  (
    <div>
      <nav>
        <h1>Degender Analytics</h1>
        <h2>{this.props.title}</h2>
        <a href={this.props.url}><span>{this.props.url}</span></a>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
      <main>
        <p>READY FOR GRAPHS</p>
        <span>There were {this.state.femPro} feminine and {this.state.mascPro} masculine out of {this.state.allPro} total gendered pronouns</span>
      </main>
      <footer>
      </footer>
    </div>
    )
    }
  
}

const mapStateToProps = ({title, url, data}) => ({
  title,
  url,
  data
})

export default connect(mapStateToProps)(Analytics)
