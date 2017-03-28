import React from 'react';
import {VictoryBar, VictoryChart} from 'victory';

const alterData = (normalData) => {
  const arr = [];
  for (let key in normalData) {
    arr.push({word: key, number: normalData[key].number, gender: normalData[key].gender})
  }
  return arr
}

export default ({theme, adjectives}) => {
  const data = alterData(adjectives);
  return (
    <div>
      <div className='big-pie'>
          <h3>All Adjectives</h3>
          <VictoryChart domainPadding={16}>
            <VictoryBar name="allAdjectives"
              theme={theme}
              style={{ 
                data: {fill: (d) => d.gender === 'masc' ? '#268A8C' : '#740D3D',
                      width: 16},
                labels: {fontSize: 14, padding: 10}
              }}
              data={data}
              x='word'
              y='number'
              sortKey='y'
            />
          </VictoryChart>
        </div>
      </div>
  )
}