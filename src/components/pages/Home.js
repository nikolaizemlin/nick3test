import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './Staff.css';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the portal and you are looking at the home page,{' '}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-light btn-sm" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
           If you would like to join this site please email the site admin  <a href="nhosley1976@gmail.com" target="_blank">here.</a>
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div>
        <div className="jumbotron heading">
          <h1 className="display-4">This is the home page.</h1>
          {mainContent}
        </div>
        <div className="jumbotron history">
        <h1 className="text-center">History of Beer</h1>
    
    <p> Like wine, beer has a long history, one that’s longer than we’ll ever be able to trace. 
        Residue of the first known barley beer was found in a jar at the Godin Tepe excavation site in modern day Iran, presumably 
        sitting there since someone took his or her last sip around 3400 B.C. But chances are, the first beer had been “cracked” 
        millennia before that.
        </p>
        
        <p>So while an exact date or time for the first chug, or keg stand, or even hiccup, is not known, what is known is that beer,
        like bread, developed best in farm-based, agrarian societies where there was an enough grain and time for fermentation. 
        One thing we definitely know is that ancient man loved beer as much as—if not more—than we do: the Babylonians had about
         20 recipes for beer, Egyptian Pharaohs were buried with vats of the stuff, even the workers who built the pyramids were 
         essentially paid in beer. One of the first written recipes for beer actually comes from a poem, a 3800 year-old ode to 
         brewing that was etched into clay tablets. Found in ancient Sumer (modern day Iraq), the “Hymn to Ninkasi” celebrates 
         the Sumerian goddess of beer and also conveniently outlines steps for brewing (lines like “The filtering vat, which makes 
         a pleasant sound,/ You place appropriately on a large collector vat” could give Shakespeare a run for his money).
         </p>
        
        <p>However it began, beer rapidly took hold as one of civilization’s favorite—and safest—ways to drink. Historically 
            speaking, water wasn’t always reliably potable for most cultures, and alcoholic drinks like beer (also sanitized by 
            the application of heat) would have been safer. Of course, the appearance of beer was changing as brewing methods 
            evolved. Babylonians drank their beer with a straw—it was thicker, full of grain. But by the 16th Century, Germany’s 
            “Reinheitsgebot” beer purity law had essentially removed everything but water, hops, and barley from acceptable brewing 
            ingredients (yeast, a slight oversight, was added back to the list a few centuries later).
        </p>
         <p>Even hops weren’t always as ubiquitous. Ancient Egyptians would have had a beer stabilized and flavored with things like
             wild herbs, dates, olive oil, and meadowsweet. And for centuries, beer cultivation in Europe relied on a mixture of 
             herbs and spices called gruit. Only around the turn of the first millennium A.D. were hops regularly finding their way 
             to beer, with Germany exporting hops for brewing around the 13th century.
        </p>
         <p>Over the centuries, beer’s popularity has risen and fallen and risen again. In America, Prohibition introduced our 
            palates to watered-down beer, a lighter flavor profile that lingers to this day, especially among mass-marketed beers. 
            But craft beer has made serious gains in the market, yielding a historically unprecedented diversity of styles. Craft 
            brewers are even reviving ancient recipes: in 1990, Anchor Steam’s Fritz Maytag brewed a beer using the Ninkasi poem’s 
            recipe, and Dogfish Head’s Ancient Ales line includes beers like the “Ta Henket,” or Egyptian bread beer, which you can 
            simply purchase and imbibe, no pyramid experience required.
        </p>
        
    
<p>Reference: <a href="https://vinepair.com/beer-101/a-brief-history-of-beer/" target="_blank">A BRIEF HISTORY OF BEER</a></p>
<p>Reference: <a href="https://www.homebrewing.org/" target="_blank">A Beer supply store</a></p>




        </div>
        </div>
      );
    }
  }
);