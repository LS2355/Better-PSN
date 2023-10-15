import React from "react";

function FriendsListFeatured ({friendData, setPopup, setOnlineIdIndex}) {
  //variables
  let FeaturedFriendsBuild = [];


  //makes the elements for the featured friends list
  for (let i = 0; i < 8; i++){
    FeaturedFriendsBuild.push(<FeaturedFriends 
      key = {i}
      index = {i}
      onlineID = {friendData[i].onlineId} 
      PFP = {friendData[i].PFP} 
      avatar = {friendData[i].avatar} 
      PSPlus = {friendData[i].PSPlus} 
      status = {friendData[i].status}
      personalDetails = {friendData[i].personalDetails}
      platform = {friendData[i].platform}
      currentGame = {friendData[i].currentGame}
      />)
    } 

    function showPopup (index) {
      setPopup(true)
      setOnlineIdIndex(index)
     }

  function FeaturedFriends (data) {
    const {index, onlineID, PFP, avatar, PSPlus, status, personalDetails, platform, currentGame} = data || false;


    return(
      <div className="col-lg-3 col-sm-6">
        <div className={`item featured-friends__${status}-status top-index`} onClick={()=>showPopup(index)}>
        {PFP ? <img src= {PFP} alt="Player PFP" />: <img src= {avatar} alt="player avatar" 
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/800px-PlayStation_App_Icon.jpg";
        }}/>}
        { personalDetails ?
         (<div>
            <h4 className='featured-friends__primary'>{personalDetails.firstName} {personalDetails.lastName} 
                      <br />  <span className='featured-friends__secondary'>{onlineID}</span>
            </h4>

          </div>)
          :
           <h4 className='featured-friends__primary'>{onlineID}</h4>}


        <img className="ps-plus featured-friends__PS-plus" src="https://seeklogo.com/images/P/playstation-plus-logo-5DBDF15160-seeklogo.com.png" alt="PS+ logo" />
        </div>
      </div>
    )
  }


  return(
    <div className="most-popular">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4><em>Featured Friends</em> <span id="small-lable">( the better ones )</span></h4>
        </div>
        <div className="row">
          {FeaturedFriendsBuild}
        </div>
      </div>
    </div>
  </div>
  )
}

export default FriendsListFeatured