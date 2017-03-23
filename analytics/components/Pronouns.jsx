import React, {Component} from 'react';
import {VictoryPie} from 'victory';
import {connect} from 'react-redux';

import {sumPronouns, nomPronouns, refPronouns} from '../categories'

class Pronouns extends Component {
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

  render() {
    return (
      <div>
      <div className='big-pie'>
            <h3>All Pronouns</h3>
            <VictoryPie name="allPronouns"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              theme={this.props.theme}
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
                theme={this.props.theme}
                style={{ labels: {fontSize: 14, padding: 10}}}
                data={[
                  {x: `feminine ${Math.round(100*this.state.nomPron.fem/this.state.nomPron.total)}%`, y: this.state.nomPron.fem}, {x: `masculine ${Math.round(100*this.state.nomPron.masc/this.state.nomPron.total)}%`, y: this.state.nomPron.masc}
                ]}
              />
              <span>There were {this.state.nomPron.fem} feminine and {this.state.nomPron.masc} masculine out of {this.state.nomPron.total} total gendered nominative case (subject) pronouns</span>
            </div>
            <div className='small-pie'>
              <h3>Reflexive Pronouns</h3>
              {this.state.refPron.total ? <div>
                <VictoryPie name="refPronouns"
                innerRadius={100}
                cornerRadius={5}
                padAngle={1}
                theme={this.props.theme}
                style={{ labels: {fontSize: 14, padding: 10}}}
                data={[
                  {x: `feminine ${Math.round(100*this.state.refPron.fem/this.state.refPron.total)}%`, y: this.state.refPron.fem}, {x: `masculine ${Math.round(100*this.state.refPron.masc/this.state.refPron.total)}%`, y: this.state.refPron.masc}
                ]}
              />
              <span>There were {this.state.refPron.fem} feminine and {this.state.refPron.masc} masculine out of {this.state.refPron.total} total gendered nominative case (subject) pronouns</span>
              </div>
              : <span>There were no reflexive pronouns in the provided example</span>}
              </div>
          </div>
          </div>
    )
  }
}

const mapStateToProps = ({data}) => ({
  data,
})
 
export default connect(mapStateToProps)(Pronouns)