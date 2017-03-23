import React, { Component } from 'react';
import {connect} from 'react-redux';

import {VictoryPie} from 'victory';

import {sumPronouns, nomPronouns, refPronouns} from '../categories'
import theme from '../chartTheme'

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
    console.log('the nominative case', nomPron)
    this.setState({nomPron});
    const refPron = refPronouns(nextProps.data.pronouns);
    this.setState({refPron})
  }

  render () {
    console.log('da props',this.props);

    return  (
    <div>
      <nav>
        <h1>Degender Analytics</h1>
        <h2>{this.props.title}</h2>
        <a href={this.props.url}><span className='page-url'>{this.props.url}</span></a>
        <ul>
          <li>Pronouns</li>
          <li>Nouns</li>
          <li>Adjectives</li>
        </ul>
      </nav>
      <main>
        <div className='big-pie'>
          <h3>All Pronouns</h3>
          <VictoryPie name="allPronouns"
            innerRadius={100}
            cornerRadius={5}
            padAngle={1}
            theme={theme}
            style={{ labels: {fontSize: 14, padding: 10}}}
            data={[
              {x: `feminine ${Math.round(100*this.state.pronouns.fem/this.state.pronouns.total)}%`, y: this.state.pronouns.fem}, {x: `masculine ${Math.round(100*this.state.pronouns.masc/this.state.pronouns.total)}%`, y: this.state.pronouns.masc}
            ]}
          />
          <span>There were {this.state.pronouns.fem} feminine and {this.state.pronouns.masc} masculine out of {this.state.pronouns.total} total gendered pronouns</span>
        </div>
        <div className='pie-row'>
          <div className='small-pie'>
            <h3>Nominative Case Pronouns</h3>
            <VictoryPie name="nomPronouns"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              theme={theme}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: "feminine", y: this.state.nomPron.fem}, {x: "masculine", y: this.state.nomPron.masc}
              ]}
            />
            <span>There were {this.state.nomPron.fem} feminine and {this.state.nomPron.masc} masculine out of {this.state.nomPron.total} total gendered nominative case (subject) pronouns</span>
          </div>
          <div className='small-pie'>
            <h3>Reflexive Pronouns</h3>
            <VictoryPie name="refPronouns"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              theme={theme}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: "feminine", y: this.state.refPron.fem}, {x: "masculine", y: this.state.refPron.masc}
              ]}
            />
            <span>There were {this.state.refPron.fem} feminine and {this.state.refPron.masc} masculine out of {this.state.refPron.total} total gendered nominative case (subject) pronouns</span>
          </div>
        </div>
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
