import React from 'react';
import './wheel.scss';
import { wheelColors } from './../config.js';

function getColor(index) {
  return wheelColors[index%wheelColors.length];
}

const chart = (properties) => ({
  'background': `conic-gradient(${properties})`,
    'borderRadius': '50%',
    'width': '500px',
    'height': '500px',
    'marginLeft': '10%',
})

const GradientWheel = ({participants, winnerIndex, ...props}) => {
  const percent = (100 / participants.length).toFixed();
  const properties = participants.map((participant, index) => {
    const color = getColor(index);
    return `${color} 0 ${percent*(index+1)}%`
  })
  return (
    <div style={chart(properties)}> 
    </div>
  )
}

export default GradientWheel;


