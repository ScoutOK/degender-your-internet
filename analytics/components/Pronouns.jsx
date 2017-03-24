import React from 'react';
import {VictoryPie} from 'victory';


export default (props) => {
  return (
    <div>
      <div className='big-pie'>
          <h3>All Pronouns</h3>
          <VictoryPie name="allPronouns"
            innerRadius={100}
            cornerRadius={5}
            padAngle={1}
            theme={props.theme}
            style={{ labels: {fontSize: 14, padding: 10}}}
            data={[
              {x: `feminine ${Math.round(100*props.pronouns.all.fem/props.pronouns.all.total)}%`, y: props.pronouns.all.fem}, {x: `masculine ${Math.round(100*props.pronouns.all.masc/props.pronouns.all.total)}%`, y: props.pronouns.all.masc}
            ]}
          />
          <span>There were {props.pronouns.all.fem} feminine and {props.pronouns.all.masc} masculine out of {props.pronouns.all.total} total gendered pronouns</span>
        </div>
        <div className='pie-row'>
          <div className='small-pie'>
            <h3>Nominative Case Pronouns</h3>
            <VictoryPie name="nomPronouns"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              theme={props.theme}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: `feminine ${Math.round(100*props.pronouns.nom.fem/props.pronouns.nom.total)}%`, y: props.pronouns.nom.fem}, {x: `masculine ${Math.round(100*props.pronouns.nom.masc/props.pronouns.nom.total)}%`, y: props.pronouns.nom.masc}
              ]}
            />
            <span>There were {props.pronouns.nom.fem} feminine and {props.pronouns.nom.masc} masculine out of {props.pronouns.nom.total} total gendered nominative case (subject) pronouns</span>
          </div>
          <div className='small-pie'>
            <h3>Reflexive Pronouns</h3>
            {props.pronouns.ref.total ? <div>
              <VictoryPie name="refPronouns"
              innerRadius={100}
              cornerRadius={5}
              padAngle={1}
              theme={props.theme}
              style={{ labels: {fontSize: 14, padding: 10}}}
              data={[
                {x: `feminine ${Math.round(100*props.pronouns.ref.fem/props.pronouns.ref.total)}%`, y: props.pronouns.ref.fem}, {x: `masculine ${Math.round(100*props.pronouns.ref.masc/props.pronouns.ref.total)}%`, y: props.pronouns.ref.masc}
              ]}
            />
            <span>There were {props.pronouns.ref.fem} feminine and {props.pronouns.ref.masc} masculine out of {props.pronouns.ref.total} total gendered nominative case (subject) pronouns</span>
            </div>
            : <span>There were no reflexive pronouns in the provided example</span>}
            </div>
        </div>
      </div>
  )
}