import React, { Component } from 'react';
import './../App.css';
import Wheel from './wheel';
import GradientWheel from './wheel2';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3001';
// const url = 'http://192.168.0.102:3001';

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

  generateWinner = () => {
    const { participants } = this.state;
    const winnerIndex = this.generateRandomNumber(participants.length);
    const winnerName = participants[winnerIndex].name;
    setTimeout(() => { this.setState({ winnerName: winnerName })}, 6000)
    this.setState({ winnerIndex: winnerIndex})
  }

  render() {
    const { winnerIndex, winnerName, participants } = this.state;
    return(
      <div>
        <div className="main-container">
          <h1 className="title">Hackages Wheel of Fortune</h1>
          <h3>{winnerName}&nbsp;</h3>
        </div>
        {/* <Wheel winnerIndex={winnerIndex} participants={participants} generateWinner={() => this.generateWinner()} /> */}
        <GradientWheel winnerIndex={winnerIndex} participants={participants} generateWinner={() => this.generateWinner()} />
        <div className="main-container">
          <Link className="signup-link" to="/signup">Click here to add your name to the wheel </Link>
        </div>
      </div>
    )
  }
}

export default Home;