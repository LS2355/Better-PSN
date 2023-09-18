import './assets/css/App.css'
import React, {useEffect, useState}from 'react'
import Navbar from './modules/Navbar'
import Banner from './modules/Banner'
import Details from './modules/Details'
import FriendsListFeatured from './modules/FriendsList-Featured'
import FriendsList from './modules/FriendsList'

//PSN api
import { getProfileFromUserName,  exchangeCodeForAccessToken, exchangeNpssoForCode, getUserFriendsAccountIds, getProfileFromAccountId} from 'psn-api'


function App() {
  const [theData, setTheData]=useState([])
  const myNpsso = "oVGLVuA9qd5vdrx3h8swLB54Bz7otB4UxSPUWrhUhsNunYbmXAPGi2iIraNMZiMB";  

  // 🆗 Ship it
useEffect(() => {
  (async () => {
    const accessCode = await exchangeNpssoForCode(myNpsso);
    const auth = await exchangeCodeForAccessToken(accessCode);
    const response = await getProfileFromUserName (auth, "stupedmunkey23")
    setTheData(response)
    console.log(theData)

  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);


async function run () {

// const response = await getProfileFromUserName(authorization, "me");//type in user id ur searching for 
// //console.log(response);
//  const userProfile = await buildProfileObj (response);
  
  



// get friends list acountIds
  const FullfriendsList = await getUserFriendsAccountIds(authorization, "me");

  // all we need from the JSON is the friend ids 
  let friendsAccountIDs = FullfriendsList.friends
    console.log("list of all friends" , friendsAccountIDs.length);
  
for (let i = 0; i <friendsAccountIDs.length; i++){
  // get profile From Account Id
  //all we are getting from this is there online ID/ username
    //we have to do it like this because doing just an acccountID search does not return with their online status;
  const GetfriendOnlineID = await getProfileFromAccountId(authorization, friendsAccountIDs[i]);
  let friendOnlineID = GetfriendOnlineID.onlineId;
  //will return friends data   
  const friendJSON = await searchFriend(authorization ,friendOnlineID);

  //will extract only what is necessary from friends data (the json file that we just got) and make it a object  
  await buildProfileObj(friendJSON);
  
}
  // sort through list


}



//gets profile data
async function searchFriend (authorization ,onlineId){
  const friendJSON = await getProfileFromUserName(authorization, onlineId);
  return friendJSON;
}


//builds the profile Objects to use on the friends list and user profile
async function buildProfileObj (response) {

  const status = response.profile.primaryOnlineStatus;
  const onlineId = response.profile.onlineId;
  const PSPlus = response.profile.plus;
  const Avatar = response.profile.avatarUrls[0].avatarUrl;
  const id = i++;
  
  // if there is a profile picture available then use grab that url if not then leave PFP as null
  var PFP = null;
  // if (response.profile.personalDetailSharing == 'shared'){
  //   PFP = response.profile.personalDetail.profilePictureUrls[0].profilePictureUrl;
  // };
  
  // make into one obj
  const Profile = {onlineId, PFP, Avatar, PSPlus, status, id}
  FriendsList.push(Profile)
}



run();
  return(
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <Banner />
              <FriendsListFeatured />
              <Details />
              <FriendsList />
            </div>  
          </div>  
        </div>  
      </div>    
    </div>
  )
}

export default App
