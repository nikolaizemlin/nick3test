import React, { Component } from 'react';

import './About.css';

class About extends Component {


  render() {
    

    return (
      <div>
        <div className="jumbotron abouttop">
        <h1>Created By: Nick, Meg, Andy & Kenzie</h1>
      </div>
      <div className="jumbotron nick" id="nick">
        <h1>Nick Hosley</h1>
        <p>Here is something about me.</p>
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
<h4 href="https://mackenzieedwards18.github.io/portfolio/">Profile</h4>
      </div>
      </div>
    );
  }
}

export default About;




