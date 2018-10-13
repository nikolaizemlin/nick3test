import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
  state = {
    currentUserName: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <div className="jumbotron">
        <h1>Nick Meg Andy Kenzie</h1>
        <p>The above have created this ap</p>
      </div>
      <div className="jumbotron nick" id="nick">
        <h1>Nick Hosley</h1>
        <p>Here would be my</p>
      </div>
      <div className="jumbotron meg">
        <h1>Meg</h1>
        <p>The above have created this app.</p>
      </div>
      <div className="jumbotron andy">
        <h1>Andy</h1>
        <p>The above have created this app.</p>
      </div>
      <div className="jumbotron kenzie">
        <h1>Kenzie</h1>
        <p>The above have created this app.</p>
      </div>
      </div>
    );
  }
}

export default About;