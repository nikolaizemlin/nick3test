import React, { Component } from 'react';
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



    return (
      <div>
        <div className="jumbotron info">
        <h1>Welcome {currentUserName}</h1>
        <p>You have reached the authorized are for posting stuff to this page.</p>
      </div>

        <form className="jumbotron tentry">
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Type Below to Post to this page.</label>
            
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
            <button ClassName="btn">Submit</button>
        </form>
        <div className="jumbotron posted">
          {/* <ul>
           {onScreenContent}
          </ul> */}
      </div>
      </div>

    );
  }
}

export default Info;