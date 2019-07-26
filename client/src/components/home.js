import React, { Component } from 'react';
import './../App.css';
import GradientWheel from './wheel';

const url = process.env.REACT_APP_SERVER_URL || ''

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      winnerIndex: -1,
      winnerName: ''
    }
  }

  componentDidMount() {
    fetch(`${url}/participants`)
      .then(res => res.json())
      .then(res => this.setState({ participants: res }))
  }

  generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  generateWinner = async (winnerIndex) => {
    const winnerName = this.state.participants[winnerIndex].name;
    await setTimeout(() => { this.setState({ winnerName: winnerName })}, 1000)
  }

  clearParticipants = () => {
    fetch(`${url}/clearwheel`, {
      'method': 'POST' 
    })
      .then(res => res.ok ? this.setState({ participants: [] }) : console.log(res))
  }

  render() {
    const { winnerIndex, participants, winnerName } = this.state;
    return(
      <div>
        <div className="main-container">
          <h1 className="title">Hackages Wheel of Fortune</h1>
          <h3 id="winner">And the Winner Is... {winnerName}&nbsp;</h3>
        </div>
        <GradientWheel clearParticipants={this.clearParticipants} winnerName={winnerName} winnerIndex={winnerIndex} participants={participants} generateWinner={this.generateWinner} />
      </div>
    )
  }
}

export default Home;