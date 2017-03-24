import React from 'react';
import {VictoryPie} from 'victory';


export default (props) => {
  return (
    <div>
      <div className='big-pie'>
          <h3>All Nouns</h3>
          <VictoryPie name="allNouns"
            innerRadius={100}
            cornerRadius={5}
            padAngle={1}
            theme={props.theme}
            style={{ labels: {fontSize: 14, padding: 10}}}
            data={[
              {x: `feminine ${Math.round(100*props.nouns.all.fem/props.nouns.all.total)}%`, y: props.nouns.all.fem}, {x: `masculine ${Math.round(100*props.nouns.all.masc/props.nouns.all.total)}%`, y: props.nouns.all.masc}
            ]}
          />
          <span>There were {props.nouns.all.fem} feminine and {props.nouns.all.masc} masculine out of {props.nouns.all.total} total gendered nouns</span>
        </div>
        {/*<div className='pie-row'>
          <div className='small-pie'>
            <h3>Nominative Case nouns</h3>
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
        </div>*/}
      </div>
  )
}