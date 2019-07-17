import React from 'react';
import './wheel.scss';
import { wheelColors } from './../config.js';

const pie = (degree, color, index) => ({
  'backgroundColor': color,
  'transform': `rotate(${degree*(index)}deg)`,
  'transition': 'all 1s',
  'position': 'absolute',
  'width': '500px',
  'height': '500px',
  'borderRadius': '50%',
  'clip': `rect(0px, ${100/(index+1)}%, ${100/(index+1)}%, ${index}px)`
})

const pieSlice = (degree) => ({
  transform: `rotate(${degree}deg)`
})

function getColor(index) {
  return wheelColors[index%wheelColors.length];
}

function renderWheel(participants) {
  return participants.map((participant, index, allParticipants) => {
    const color = getColor(index);
    const degree = (index / allParticipants.length) * 360;
    console.log('index', index)
    console.log('degree', degree)
    return (
      <div key={participant.name} style={pieSlice(degree)} className="hold">
        {/* <div key={participant.name} id={`pieSlice${index+1}`} style={pieSlice(index, degree)} className="hold"> */}
        <div style={pie(degree, color, index)}></div>
        {/* <div className="pie"></div> */}
      </div>
    )
  })
}

let Wheel = ({participants, winnerIndex, ...props}) => {
  return (
    <div className="pie-container"> 
      {renderWheel(participants)}
    </div>
  )
}

export default Wheel;


