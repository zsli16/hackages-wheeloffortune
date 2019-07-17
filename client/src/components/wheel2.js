import React, { useRef } from 'react';
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
    'transition': '1s all',
    'position': 'relative'
})

const GradientWheel = ({participants, winnerIndex, ...props}) => {
  const percent = (100 / participants.length).toFixed();
  const properties = participants.map((participant, index) => {
    const color = getColor(index);
    return `${color} 0 ${percent*(index+1)}%`
  })

  const wheel = useRef(null);

  const spinWheel = () => {
    wheel.current.classList.add('rotate-wheel')
  }

  return (
    <div>
      <button className="spin-wheel" onClick={spinWheel}>Spin</button>
      <div ref={wheel} style={chart(properties)}/>
      <ul>
        {
          participants.map((participant, index) => {
          const legendColor = getColor(index);
          return (
            <li>
              <div style={{ 'backgroundColor': `${legendColor}`, 'width': '25px', 'height': '25px'}} />
              <div className="name">{participant.name}</div>
            </li>
          )
        })
        }
      </ul>
    </div>
    
  )
}

export default GradientWheel;


