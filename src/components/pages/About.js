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
        <h1>Nick</h1>
        <p>I like Kilt Lifter mixed with mead and Tequila oh and Absinthe yeah Absinthe is good.</p>
        <p>Reference: <a href="https://nikolaizemlin.github.io/Portfolio/" target="_blank">Profile</a></p>
      </div>
      <div className="jumbotron meg">
        <h1>Meg</h1>
        <p>If it has alchole I love it.</p>
        <p>Reference: <a href="" target="_blank">Profile</a></p>
      </div>
      <div className="jumbotron andy">
        <h1>Andy</h1>
        <p>I love all beer.</p>
        <p>Reference: <a href="https://andydun9.github.io/portfolio/" target="_blank">Profile</a></p>
      </div>
      <div className="jumbotron kenzie">
        <h1>Kenzie</h1>
        <p>I only like the fruity drinks.</p>
        <p>Reference: <a href="https://mackenzieedwards18.github.io/portfolio/" target="_blank">Profile</a></p>

      </div>
      </div>
    );
  }
}

export default About;




