import React, { Component } from 'react';
import './../App.css';
import Wheel from './wheel';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3001';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      winnerNumber: -1,
      winnerName: ''
    }
  }

  componentDidMount() {
    fetch(`${url}/participants`)
      .then(res => res.json())
      .then(res => this.setState({ participants: res }))
  }

  generateWinner = () => {
    const { participants } = this.state;
    let randomNumber = Math.floor(Math.random() * participants.length);
    let winnerName = participants[randomNumber].name;
    console.log({winnerName, randomNumber})
    setTimeout(() => { this.setState({ winnerName: winnerName })}, 6000)
    this.setState({ winnerNumber: randomNumber})
  }

  render() {
    return(
      <div>
        <div className="main-container">
          <h1 className="title">Hackages Wheel of Fortune</h1>
          <Link className="signup-link" to="/signup">Click here to enter the raffle</Link>
          <div>{this.state.winnerName}</div>
        </div>
        <Wheel winnerNumber={this.state.winnerNumber} participants={this.state.participants} generateWinner={() => this.generateWinner()} />
      </div>
    )
  }
}

export default Home;