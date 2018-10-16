import React, { Component } from 'react';
import './Staff.css';

class Staff extends Component {
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
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <div className="jumbotron tophowto">
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the how too portion of the beer portal</p>
      </div>
<div className="jumbotron howto">
<h1>How to Make your Own Beer</h1>
          <p>Through out this section we will show you how to make your own beer. The biggest items is to make sure that all of your equipment is sanatized</p>
  
          <h2>Step by Step instructions from Northern Brewer</h2>
  
  
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jaDQ6S6p6Wk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  
          <h3>Welcome to homebrewing: hobby, obsession, and way of life!</h3>
          <p>Brewing beer is fun and easy; if you can make mac and cheese from a box without help,
               you can make beer, and we’re going to show you how. This section will provide you with
                all the necessary information for you on how to brew beer from an extract recipe. This
                 section does not intend to teach you all there is to know about brewing beer, but don’t
                  worry, there is more to come.</p>
  
          <p>Brewing is a process. The process involves boiling and chilling, a period of fermentation
               and finally bottling and storage.</p>
  
               <h4>Objective</h4>
  
               <p>To brew, ferment, bottle and condition a beer from an extract kit using basic equipment. </p>
              <br></br>
              <h3>Step 1: Preparation - Getting ready for your brew day!</h3>
  
              <p><strong>Step 1:</strong> Make sure you have the proper equipment. Use the following as a guide: 
                  Sanitizer, Brew Kettle/Pot, Fermentation Vessel, Air Lock, Stir Spoon, Auto Siphon,
                   Bottles, Bottle Caps, &amp; a Bottle Capper. </p>
              
              <p><strong>Step 2:</strong> Sanitize, Sanitize, Sanitize: Your success will rely on how clean your equipment is. Anything that comes in contact with your beer after the boil process should be sanitized. PBW and Star San are great sanitizers for your equipment.</p>
  
              <p><strong>Step 3:</strong> Lay out everything before you begin. Have your equipment at the ready and all your ingredients prepared and measured before you begin.</p>
  <br></br>
              <h3>Step 2: Let's Brew</h3>
     <p>You’ll Need: Your kettle, fermenter, funnel (optional), sanitizer, hydrometer and ingredient kit.</p>
     <p><strong>Step 4:</strong> Steeping Grains. Fill your 5-gallon brew kettle with 2.5 gallons of water. As you heat your water, steep your grains for 20 minutes, or until your water reaches 170 degrees.  When you remove your grains, let the water drip out of the grain bag and into the kettle.  Don't squeeze your grain bag as you don't want to extract tannins, which may give your beer unwanted flavors.</p>
  <p><strong>Step 5:</strong> Bring your kettle to a boil, remove from heat, and add your malt extracts. Be careful not to boil over. Hops are added at various intervals. Refer to your exact recipe as to when you need to add hops to your boil.</p>
  <p><strong>Step 6:</strong> The solution is now called wort.  Cool your wort by bringing the temperature down as quickly as possible.  This can be done one of two ways.  Set your pot in a sink with an ice bath or use a wort chiller.  A wort chiller is inserted into your wort. Cold water runs from your tap, through the chiller, and out to the sink bringing the heat of the wort with it.  A wort chiller is the most effective way, but either will get you the desired results.</p>
      
  <br></br>
  <h3>Step 3: Fermenting</h3>
  <p><strong>Step 7:</strong> After sanitizing your fermentation vessel, the cooled wort can be poured or siphoned into your fermenter. Some pots even have a valve for easy transportation from your kettle to your fermenter.</p>
  <p><strong>Step 8:</strong> Add water to bring the level to 5 gallons.</p>
  <p><strong>Step 9:</strong> Aerate your wort by splashing it around in its container.  Yeast need oxygen and splashing your wort will help.</p>
  <p><strong>Step 10:</strong> Add your yeast. Dry yeast is the easiest as you typically don't have to prepare it beforehand. Sanitize the yeast pack and a pair of scissors, cut the corner off the yeast pack, and pour the yeast into the fermenter.</p>
  
  <p><strong>Step 11:</strong> Seal your fermenter, add an air lock, and store in a dark, cool place.  Ales should stay at 68 degrees to ferment properly.</p>
  
  <br></br>
  
  <h3>Step 4: Bottling</h3>
  
  <p><strong>Step 12:</strong> After fermentation is complete, typically within two weeks, it's time to bottle your beer.</p>
  <p><strong>Step 13:</strong> Sanitize your bottles, bottle filler, bottle caps, and bottling bucket you will be using for transfer.  Use a bottle brush on your bottles to make sure they are as clean as possible. You will also want to sanitize any transfer hoses you use for this step.</p>
  <p><strong>Step 14:</strong> Boil your priming sugar in 16 ounces of water. After it cools, you can add this directly to the bottling bucket.</p>
  <p><strong>Step 15:</strong> Transfer your beer. Siphon the beer out of your fermenter and into your bottling bucket.  Be careful to leave as much sediment in the fermenter as possible.</p>
  <p><strong>Step 16:</strong> Attach a bottle filler to your hose and the hose to the bottling bucket spigot. Open the spigot on your bottling bucket and push the bottle filler to the bottom of the bottle.  This will let the beer flow into the bottle. Fill each bottle to the top. When you remove the bottle filler, it will leave the perfect amount of space at the top of the bottle.</p>
  <p><strong>Step 17:</strong> Cap the bottles with bottle caps and a bottle capper.</p>
  <br></br>
  <h3>Section 5: Enjoy</h3>
  <p><strong>Step 18:</strong> Store the bottles at room temperature for roughly two weeks. This gives your beer proper time to carbonate.</p>
  <p><strong>Step 19:</strong> Refrigerate.</p>
  <p><strong>Step 20:</strong> Enjoy.</p>
  <p>Reference: <a href="https://learn.northernbrewer.com/hc/en-us/articles/360002505093-How-to-Brew-Beer-Homebrewing-101" target="_blank">Northern Brewer</a></p>
</div>

      </div>
    );
  }
}

export default Staff;