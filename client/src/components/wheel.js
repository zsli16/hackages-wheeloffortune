import React from 'react';
import './wheel.css';

const style = (degrees, color, index) => ({
	transform: `rotate(${degrees}deg)`,
	'WebkitTransform': `rotate(${degrees}deg)`,
	'MozTransform': `rotate(${degrees}deg)`,
	'OTransform': `rotate(${degrees}deg)`,
	'msTransform': `rotate(${degrees}deg)`,
  'borderColor': `${color} transparent`,
  'zIndex': 100 - index	
})

function renderWheel(participants) {
  return participants.map((participant, index, allParticipants) => {
  let colors = [ 'rgb(26, 188, 156)', 'rgb(46, 204, 113)', 'rgb(52, 152, 219)', 'rgb(155, 89, 182)', 'rgb(52, 73, 94)', 'rgb(22, 160, 133)', 'rgb(39, 174, 96)', 'rgb(41, 128, 185)', 'rgb(142, 68, 173)', 'rgb(44, 62, 80)', 'rgb(241, 196, 15)', 'rgb(230, 126, 34)', 'rgb(231, 76, 60)', 'rgb(236, 240, 241)', 'rgb(149, 165, 166)', 'rgb(243, 156, 18)', 'rgb(211, 84, 0)', 'rgb(192, 57, 43)', 'rgb(189, 195, 199)', 'rgb(127, 140, 141)']
  let color = colors[index%colors.length]
    const degree = index / allParticipants.length * 360
    console.log(participant.name, degree)
    return (
      <div className="sec" key={participant.name} style={style(degree, color, index)}><span className="name">{participant.name}</span></div>
    )
  })
}

const spinStyle = (winnerNumber, participants) => {
  let degree;
  if (winnerNumber >= 0) {
    degree = -((winnerNumber / participants.length * 360) + 360 * 6)
  } else {
   degree = 0
  }
  return {
  transform: `rotate(${degree}deg)`
}}

const Wheel = ({participants, winnerNumber, ...props}) => {
  return (
    <div id="wrapper">
            
            <div id="wheel">
                <div style={spinStyle(winnerNumber, participants)} id="inner-wheel">
                    {renderWheel(participants)}
                </div>       
               
                <div onClick={props.generateWinner} id="spin">
                    <div id="inner-spin"><img id="logo" alt="logo" src="hackages-teal.svg"/></div>
                </div>
                
                <div id="shine"></div>
            </div>
            
            <div id="txt"></div>
      </div>
  )
}

export default Wheel;


