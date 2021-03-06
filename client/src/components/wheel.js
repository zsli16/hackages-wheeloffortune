import React, { useRef, useState } from 'react';
import './wheel.scss';
import { wheelColors } from '../config.js';
import { Link } from 'react-router-dom';
import AdminModal from './modal.js';

function getColor(index) {
  return wheelColors[index];
}

const chart = (properties) => ({
  'background': `conic-gradient(${properties})`,
    'borderRadius': '50%',
    'width': '500px',
    'height': '500px',
    'transition': '1s all',
    'position': 'relative',
    'zIndex': -1,
    'float': 'left',
})

const GradientWheel = ({participants, clearParticipants, winnerName, winnerIndex, ...props}) => {

  const [modalShow, setModalShow] = React.useState(false);

  const percent = (100 / participants.length).toFixed();
  const middleDegree = (360 * (percent / 100))/2;

  const properties = participants.map((participant, index) => {
    const color = getColor(index);
    return `${color} 0 ${percent*(index+1)}%`
  })

  const wheel = useRef(null);

  const spinWheel = () => {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winnerDegrees = winnerIndex >= 0 ? -((winnerIndex / participants.length * 360) + 360 * 6) : 0
    wheel.current.style.transform = `rotate(${winnerDegrees - (middleDegree)}deg)`;
    props.generateWinner(winnerIndex)
  }

  return (
    <div className="wrapper">
      <div className="wheel-container">
        <div className="wheel-background"/>
        <span className="arrow"></span>
        <button className="spin-wheel" onClick={spinWheel} />
        <div ref={wheel} style={chart(properties)}/>
      </div>
      <ul>
        <h3>Participants</h3>
        { 
          participants.map((participant, index) => {
          const legendColor = getColor(index);
          return (
            <li key={participant.email}>
              <div style={{ 'backgroundColor': `${legendColor}`, 'width': '25px', 'height': '25px'}} />
              <div className="name">{participant.name}</div>
            </li>
          )
        })
        }
    
        <li><Link className="signup-link" to="/signup">Sign Up</Link></li>
        <li><div id="clear-wheel" onClick={() => setModalShow(true)}>Clear Wheel</div></li>

        <AdminModal
          clearParticipants={clearParticipants}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ul>
    </div>
  )
}

export default GradientWheel;


