import React from "react";
import {getProfileFromUserName} from "psn-api"

// friends list will start of short then will habe a button in the bottom to expand the list to see full friends list
function FriendsList () {





























    return(
        <div className="other-games">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4><em>Other Related</em> Games</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
              {/* 
              will show closefriend name and gamertag
                if not availible will just default to gamertag and get rid of span tag section 
              */}
              <h4>Close friend list</h4><img className="ps-plus" src="https://seeklogo.com/images/P/playstation-plus-logo-5DBDF15160-seeklogo.com.png" alt="PS+ logo" /><br />
              <span>Gamertag</span>
              <ul>
                {/* online status */}
                <li> Online <div className="friendsList__status details__status-online"></div> </li>
                {/* this will either say game playing or if they are offline then it will say last online time
                if they are online but not playing anythng then it will say "just chilling "
                when playing a game it will show a controller of offline it will show a sleeping icon (maybe a bed with zzzz's)
                */}
                <li><i className="fa fa-download"></i> Call of Duty</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
              {/* 
              will show closefriend name and gamertag
                if not availible will just default to gamertag and get rid of span tag section 
              */}
              <h4>Close friend list</h4><span>Gamertag</span>
              <ul>
                {/* online status */}
                <li> Online <div className="friendsList__status details__status-online"></div> </li>
                {/* this will either say game playing or if they are offline then it will say last online time
                if they are online but not playing anythng then it will say "just chilling "
                when playing a game it will show a controller of offline it will show a sleeping icon (maybe a bed with zzzz's)
                */}
                <li><i className="fa fa-download"></i> Call of Duty</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
              {/* 
              will show closefriend name and gamertag
                if not availible will just default to gamertag and get rid of span tag section 
              */}
              <h4>Close friend list</h4><span>Gamertag</span>
              <ul>
                {/* online status */}
                <li> Online <div className="friendsList__status details__status-online"></div> </li>
                {/* this will either say game playing or if they are offline then it will say last online time
                if they are online but not playing anythng then it will say "just chilling "
                when playing a game it will show a controller of offline it will show a sleeping icon (maybe a bed with zzzz's)
                */}
                <li><i className="fa fa-download"></i> Call of Duty</li>
              </ul>
            </div>
          </div>
          {/* center div and make it go down a littl */}
          <div className="col-lg-12">
            <div className="main-button friendsList__expand-container"><a href="#sum">Down arrow</a></div>
          </div>
        </div>
      </div>
    )
}

export default FriendsList;