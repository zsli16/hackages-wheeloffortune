import React, { Component } from 'react';


class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      error: ''
    }
  }

  updateName = (e) => {
    this.setState({ name: e.target.value })
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  signUp = (e) => {
    const { email, name } = this.state
    this.setState({ error: ''})
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegex) && name !== '' && name.length < 30) {
      e.preventDefault();
      fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
      .then(() => this.props.history.push('/home'))
    } else {
      this.setState({ error: 'Please enter a valid email address... or a shorter name ;)' })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header-title"><h1>Sign up for the raffle!</h1></div>
        <div className="form-group">
          <input className="form-control" type="text" value={this.state.name} onChange={(this.updateName)} placeholder="Your name"/>
          <input className="form-control" type="email" value={this.state.email} onChange={this.updateEmail} placeholder="Your e-mail address"/>
          <button className="btn btn-primary btn-block" onClick={this.signUp} type="submit">Sign Up</button>
        </div>
        <div className={this.state.error.length > 1 ? 'alert alert-danger' : ''}>{this.state.error}</div>
      </div>

    )
  }
}

export default SignUpForm;