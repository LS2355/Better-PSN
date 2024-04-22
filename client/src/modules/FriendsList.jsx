

// friends list will start of short then will habe a button in the bottom to expand the list to see full friends list
function FriendsList (Props) {
  const {friendData} = Props
    // console.log(`onlineID = ${onlineId} PFP = ${PFP} avatar= ${avatar} PSPlus= ${PSPlus} status= ${status}`)
    

    let friendsListBuild = [];
    
    if(Props.expandList){
        for (let i = 8; i < friendData.length; i++){
          
      friendsListBuild.push(<FriendTemplate 
        key = {i}
        index = {i}
        onlineID = {friendData[i].onlineId} 
        PFP = {friendData[i].PFP} 
        avatar = {friendData[i].avatar} 
        PSPlus = {friendData[i].PSPlus} 
        status = {friendData[i].status}
        lastOnline = {friendData[i].lastOnline}
        personalDetails = {friendData[i].personalDetails}
        platform = {friendData[i].platform}
        trophySummary = {friendData[i].trophySummary}
        currentGame = {friendData[i].currentGame}
        currentGameImage = {friendData[i].currentGameImage}
        />)
      } 
    }
    else{
      for (let i = 8; i < 20; i++){
        friendsListBuild.push(<FriendTemplate 
          key = {i}
          index = {i}
          onlineID = {friendData[i].onlineId} 
          PFP = {friendData[i].PFP} 
          avatar = {friendData[i].avatar} 
          PSPlus = {friendData[i].PSPlus} 
          status = {friendData[i].status}
          lastOnline = {friendData[i].lastOnline}
          personalDetails = {friendData[i].personalDetails}
          platform = {friendData[i].platform}
          trophySummary = {friendData[i].trophySummary}
          currentGame = {friendData[i].currentGame}
          currentGameImage = {friendData[i].currentGameImage}
          />)
        } 
    }


    function showPopup (index) {
     Props.setPopup(true)
     Props.setOnlineIdIndex(index)
    }






function FriendTemplate(Props) {
  const {index, onlineID, PFP, avatar, PSPlus, status, lastOnline, personalDetails, platform, trophySummary, currentGame, currentGameImage} = Props || false; //shouls add user about me content in the expanded cards 


  // function doesItExist (onlineID, PFP, avatar, PSPlus, status, lastOnline, personalDetails, platform, trophySummary, currentGame, currentGameImage) {
  //   if (typeof value ===  'undefined'){
  //     console.log("variable is undefined")
  //   }
  //   else {
  //     console.log("variable is defined as " + value)
  //   }
  // }

  return(
    <div className="col-4 top-index friendsList__wrapper" onClick={()=>showPopup(index)}>
      <div className="friendsList__item row">
        <div className="col-lg-10 friendsList__item-wrapper">
         {/* use terinery operator */}
         {PFP ? <img src= {PFP} alt="Player PFP" className="friendslist__image" />: <img src= {avatar} alt="player avatar" className="friendslist__image" 
           onError={({ currentTarget }) => {
             currentTarget.onerror = null; // prevents looping
             currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/800px-PlayStation_App_Icon.jpg";
           }}/>}
         {/* 
         will show closefriend name and gamertag
           if not availible will just default to gamertag and get rid of span tag section 
         */}
  
         {PSPlus == 1 && (<img className="ps-plus friendsList__ps-plus" src="https://seeklogo.com/images/P/playstation-plus-logo-5DBDF15160-seeklogo.com.png" alt="PS+ logo" />)}
         <br />
         { personalDetails ?
            (<div>
               <h2 className='friendsList__primary'>{personalDetails.firstName} {personalDetails.lastName}</h2>
               <h4 className='friendsList__secondary'>{onlineID}</h4>
             </div>)
             : <h2 className='friendsList__primary'>{onlineID}</h2>}
        </div>
        <div className="col-lg-2 friendsList__status-wrapper">
          {/* online status */}
            <div className= {`friendsList__status details__status-${status}`}></div>

           {/* this will either say game playing or if they are offline then it will say last online time
           if they are online but not playing anythng then it will say "just chilling "
           when playing a game it will show a controller of offline it will show a sleeping icon (maybe a bed with zzzz's)
           */}
       
        </div>

      </div>
   </div>
  )
}





    return(
        <div className="other-friends">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4>Full <em>Friends List</em></h4> 
            </div>
          </div>
          {friendsListBuild}
          {/* center div and make it go down a littl */}
          <div className="col-lg-12">
            <div className="main-button friendsList__expand-container" onClick={()=>Props.setExpandList(!Props.expandList)}><a href="#sum">view more</a></div>
          </div>
        </div>
      </div>
    )
}

export default FriendsList;