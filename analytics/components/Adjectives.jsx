import React from 'react';
import {VictoryBar} from 'victory';

const alterData = (normalData) => {
  const arr = [];
  for (let key in normalData) {
    arr.push({word: key, number: normaData[key]})
  }
  return arr
}

export default ({theme, adjectives}) => {
  const data = alterData(adjectives);
  return (
    <div>
      <div className='big-pie'>
          <h3>All Adjectives</h3>
          <VictoryBar name="allAdjectives"
            theme={theme}
            style={{ labels: {fontSize: 14, padding: 10}}}
            data={data}
          />
          {/*<span>There were {props.nouns.all.fem} feminine and {props.nouns.all.masc} masculine out of {props.nouns.all.total} total gendered nouns</span>*/}
        </div>
      </div>
  )
}