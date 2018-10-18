import React, { Component } from 'react';
import { Button, FieldGroup, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import './About.css';

class Info extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
    
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }


  
  render() {
    const { currentUserName } = this.state;

    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    


    return (
      <div>
        <div className="jumbotron info">
        <h1>Welcome {currentUserName}</h1>
        <p>You have reached the authorized area for posting stuff to this page.</p>
      </div>

        <div className="jumbotron tentry">
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Name of Recipe"
      placeholder="Enter text"/>
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Type of Beer"
      placeholder="Enter Text"/>
   
    {/* <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    /> */}

<FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>
    <Button type="submit">Submit</Button>

      </div>
      </div>


    );
  }
}

export default Info;