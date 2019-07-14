import React from 'react';
import './wheel.css';
import { wheelColors } from './../config.js';

const style = (degrees, color, index) => ({
	transform: `rotate(${degrees}deg)`,
	'WebkitTransform': `rotate(${degrees}deg)`,
	'MozTransform': `rotate(${degrees}deg)`,
	'OTransform': `rotate(${degrees}deg)`,
	'msTransform': `rotate(${degrees}deg)`,
  'borderColor': `${color} transparent`,
  'zIndex': 100 - index	
})

function getColor(index) {
  return wheelColors[index%wheelColors.length];
}

function renderWheel(participants) {
  return participants.map((participant, index, allParticipants) => {
    const color = getColor(index);
    const degree = index / allParticipants.length * 360
    return (
      <div className="sec" key={participant.name} style={style(degree, color, index)}><span className="name">{participant.name}</span></div>
    )
  })
}

const spinStyle = (winnerIndex, participants) => {
  const degree = winnerIndex >= 0 ? -((winnerIndex / participants.length * 360) + 360 * 6) : 0
  return {
    transform: `rotate(${degree}deg)`
  }
}

const Wheel = ({participants, winnerIndex, ...props}) => {
  return (
    <div id="wrapper"> 
      <div id="wheel">
        <div style={spinStyle(winnerIndex, participants)} id="inner-wheel">
          {renderWheel(participants)}
        </div>       
        
        <div onClick={props.generateWinner} id="spin">
          <div id="inner-spin">
            <img id="logo" alt="logo" src="hackages-teal.svg"/>
          </div>
        </div>
          
        <div id="shine"></div>
      </div>

      <div id="txt"></div>
      
    </div>
  )
}

export default Wheel;


