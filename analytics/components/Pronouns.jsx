import React, {Component} from 'react';
import {VictoryPie} from 'victory';
import {connect} from 'react-redux';


class Pronouns extends Component {
  constructor () {
    super();
  }

  render() {
    console.log('pro props', this.props)
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
                {x: `feminine ${Math.round(100*this.props.pronouns.all.fem/this.props.pronouns.all.total)}%`, y: this.props.pronouns.all.fem}, {x: `masculine ${Math.round(100*this.props.pronouns.all.masc/this.props.pronouns.all.total)}%`, y: this.props.pronouns.all.masc}
              ]}
            />
            <span>There were {this.props.pronouns.all.fem} feminine and {this.props.pronouns.all.masc} masculine out of {this.props.pronouns.all.total} total gendered pronouns</span>
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
                  {x: `feminine ${Math.round(100*this.props.pronouns.nom.fem/this.props.pronouns.nom.total)}%`, y: this.props.pronouns.nom.fem}, {x: `masculine ${Math.round(100*this.props.pronouns.nom.masc/this.props.pronouns.nom.total)}%`, y: this.props.pronouns.nom.masc}
                ]}
              />
              <span>There were {this.props.pronouns.nom.fem} feminine and {this.props.pronouns.nom.masc} masculine out of {this.props.pronouns.nom.total} total gendered nominative case (subject) pronouns</span>
            </div>
            <div className='small-pie'>
              <h3>Reflexive Pronouns</h3>
              {this.props.pronouns.ref.total ? <div>
                <VictoryPie name="refPronouns"
                innerRadius={100}
                cornerRadius={5}
                padAngle={1}
                theme={this.props.theme}
                style={{ labels: {fontSize: 14, padding: 10}}}
                data={[
                  {x: `feminine ${Math.round(100*this.props.pronouns.ref.fem/this.props.pronouns.ref.total)}%`, y: this.props.pronouns.ref.fem}, {x: `masculine ${Math.round(100*this.props.pronouns.ref.masc/this.props.pronouns.ref.total)}%`, y: this.props.pronouns.ref.masc}
                ]}
              />
              <span>There were {this.props.pronouns.ref.fem} feminine and {this.props.pronouns.ref.masc} masculine out of {this.props.pronouns.ref.total} total gendered nominative case (subject) pronouns</span>
              </div>
              : <span>There were no reflexive pronouns in the provided example</span>}
              </div>
          </div>
          </div>
    )
  }
}

const mapStateToProps = ({pronouns}) => ({
  pronouns,
})
 
export default connect(mapStateToProps)(Pronouns)