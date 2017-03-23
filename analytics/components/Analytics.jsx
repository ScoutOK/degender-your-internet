import React, { Component } from 'react';
import {connect} from 'react-redux';

import {VictoryPie} from 'victory';

import {sumPronouns, nomPronouns} from '../categories'



class Analytics extends Component {

  constructor () {
    super();
    this.state = {
      pronouns: {},
      nomPron: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    const pronNum = sumPronouns(nextProps.data.pronouns);
    this.setState({pronouns: pronNum});
    const nomPron = nomPronouns(nextProps.data.pronouns);
    console.log('the nominative case', nomPron)
    this.setState({nomPron});
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
        <div className='pie-row'>
          <div className='pie-container'>
            <VictoryPie name="pie"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: `feminine ${Math.round(100*this.state.pronouns.fem/this.state.pronouns.total)}%`, y: this.state.pronouns.fem}, {x: `masculine ${Math.round(100*this.state.pronouns.masc/this.state.pronouns.total)}%`, y: this.state.pronouns.masc}
              ]}
            />
            <span>There were {this.state.pronouns.fem} feminine and {this.state.pronouns.masc} masculine out of {this.state.pronouns.total} total gendered pronouns</span>
          </div>
          <div className='double-pie'>
            <VictoryPie name="pie"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: "feminine", y: this.state.nomPron.fem}, {x: "masculine", y: this.state.nomPron.masc}
              ]}
            />
            <span>There were {this.state.nomPron.fem} feminine and {this.state.nomPron.masc} masculine out of {this.state.nomPron.total} total gendered nominative case (subject) pronouns</span>
            {/*<VictoryPie name="pie"
              standalone={true}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: "feminine", y: this.state.femPro}, {x: "masculine", y: this.state.mascPro}
              ]}
            />*/}
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
