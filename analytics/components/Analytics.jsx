import React, { Component } from 'react';
import {connect} from 'react-redux';

import {VictoryPie} from 'victory';

import {sumPronouns, nomPronouns} from '../categories'



// // Colors
// const colors = [
//   "#252525",
//   "#525252",
//   "#737373",
//   "#969696",
//   "#bdbdbd",
//   "#d9d9d9",
//   "#f0f0f0"
// ];

// const charcoal = "#252525";

// // Typography
// const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
// const letterSpacing = "normal";
// const fontSize = 14;

// // Layout
// const baseProps = {
//   width: 450,
//   height: 300,
//   padding: 50,
//   colorScale: colors
// };

// // Labels
// const baseLabelStyles = {
//   fontFamily: sansSerif,
//   fontSize,
//   letterSpacing,
//   padding: 10,
//   fill: charcoal,
//   stroke: "transparent"
// };

// const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// // Strokes
// const strokeLinecap = "round";
// const strokeLinejoin = "round";

// // Create the theme
// const theme = {
//   area: assign({
//     style: {
//       data: {
//         fill: charcoal
//       },
//       labels: centeredLabelStyles
//     }
//   }, baseProps),
//   axis: assign({
//     style: {
//       axis: {
//         fill: "transparent",
//         stroke: charcoal,
//         strokeWidth: 1,
//         strokeLinecap,
//         strokeLinejoin
//       },
//       axisLabel: assign({}, centeredLabelStyles, {
//         padding: 25
//       }),
//       grid: {
//         fill: "transparent",
//         stroke: "transparent"
//       },
//       ticks: {
//         fill: "transparent",
//         size: 1,
//         stroke: "transparent"
//       },
//       tickLabels: baseLabelStyles
//     }
//   }, baseProps),
//   bar: assign({
//     style: {
//       data: {
//         fill: charcoal,
//         padding: 10,
//         stroke: "transparent",
//         strokeWidth: 0,
//         width: 8
//       },
//       labels: baseLabelStyles
//     }
//   }, baseProps),
//   candlestick: assign({
//     style: {
//       data: {
//         stroke: charcoal,
//         strokeWidth: 1
//       },
//       labels: centeredLabelStyles
//     },
//     candleColors: {
//       positive: "#ffffff",
//       negative: charcoal
//     }
//   }, baseProps),
//   chart: baseProps,
//   errorbar: assign({
//     style: {
//       data: {
//         fill: "transparent",
//         stroke: charcoal,
//         strokeWidth: 2
//       },
//       labels: centeredLabelStyles
//     }
//   }, baseProps),
//   group: assign({
//     colorScale: colors
//   }, baseProps),
//   line: assign({
//     style: {
//       data: {
//         fill: "transparent",
//         stroke: charcoal,
//         strokeWidth: 2
//       },
//       labels: assign({}, baseLabelStyles, {
//         textAnchor: "start"
//       })
//     }
//   }, baseProps),
//   pie: {
//     style: {
//       data: {
//         padding: 10,
//         stroke: "transparent",
//         strokeWidth: 1
//       },
//       labels: assign({}, baseLabelStyles, {
//         padding: 20
//       })
//     },
//     colorScale: colors,
//     width: 400,
//     height: 400,
//     padding: 50
//   },
//   scatter: assign({
//     style: {
//       data: {
//         fill: charcoal,
//         stroke: "transparent",
//         strokeWidth: 0
//       },
//       labels: centeredLabelStyles
//     }
//   }, baseProps),
//   stack: assign({
//     colorScale: colors
//   }, baseProps),
//   tooltip: assign({
//     style: {
//       data: {
//         fill: "transparent",
//         stroke: "transparent",
//         strokeWidth: 0
//       },
//       labels: centeredLabelStyles,
//       flyout: {
//         stroke: charcoal,
//         strokeWidth: 1,
//         fill: "#f0f0f0"
//       }
//     },
//     flyoutProps: {
//       cornerRadius: 10,
//       pointerLength: 10
//     }
//   }, baseProps),
//   voronoi: assign({
//     style: {
//       data: {
//         fill: "transparent",
//         stroke: "transparent",
//         strokeWidth: 0
//       },
//       labels: centeredLabelStyles
//     }
//   }, baseProps)
// };



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
        <a href={this.props.url}><span className='page-url'>{this.props.url}</span></a>
        <ul>
          <li>Pronouns</li>
          <li>Nouns</li>
          <li>Adjectives</li>
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
