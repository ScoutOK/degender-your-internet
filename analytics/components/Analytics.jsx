import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mascPronouns, femPronouns} from '../categories'


class Analytics extends Component {

  constructor () {
    super();
    this.state = {
      proNum: 0,
      femPro: 0,
      mascPro: 0,
    }
  }

  render () {
    console.log('da props',this.props);
    // let totalProNum = 0;
    // let mascProNum = 0;
    // let femProNum = 0;
    // for (key in this.props.pronouns) {
    //   totalProNum += this.props.pronouns[key];
    //   if (femPronouns.indexOf(this.props.pronouns[key]) > -1) {
    //     femProNum += this.props.pronouns[key];
    //   }
    //   if (mascPronouns.indexOf(this.props.pronouns[key]) > -1) {
    //     mascProNum += this.props.pronouns[key];
    //   }
    // }
    // this.setState({proNum: totalProNum});
    // this.setState({femPro: femProNum});
    // this.setState({mascPro: mascProNum});

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
        <span>There were {this.state.femPro} feminine and {this.state.mascPro} masculine out of {this.state.proNum} total gendered pronouns</span>
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
