/*
this file will get all friend data using "psn-api" -npm

~comments 
  -"done all that is left to add is the refresh token
  )"
*/
const { getProfileFromUserName,  exchangeCodeForAccessToken, exchangeNpssoForCode, getUserFriendsAccountIds, getProfileFromAccountId, getBasicPresence} = require('psn-api');


//this is going to be changing until i set the refresh token


console.log("PSN mounted")


const myNpsso = "1pbsm9GMo73G21Gs3ac4rii2tgS7EuUBbk7yWQMLeX2hY5t4ZE6NdbeP7N1sD00H";
const Profiles = [];

const run = async (userNpsso) =>{
  const accessCode = await exchangeNpssoForCode(userNpsso? userNpsso : myNpsso);
  console.log(accessCode)
  const authorization = await exchangeCodeForAccessToken(accessCode);
  const personalAccount = await getProfileFromUserName(authorization, "me")

    //i dont want to send back their accound Id or npsso Id
    delete personalAccount.profile.accountId
    delete personalAccount.profile.npId


  

  

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
    const friendJSON = await searchFriend(authorization ,friendOnlineID, friendsAccountIDs[i]);


    //will extract only what is necessary from friends data (the json file that we just got) and make it a object  
    const profile = await buildProfileObj(friendJSON); 


  }
  //log the Profiles array when everything is done
  console.log([Profiles,personalAccount])

  // console.log(Profiles)
  return [Profiles, personalAccount];
  }


  //gets profile data
  async function searchFriend (authorization ,onlineId, accountId){
    const friendData = await getProfileFromUserName(authorization, onlineId);  //gets most friend data
    const friendPlatform = await getBasicPresence(authorization, accountId);  //this one just gets me the user platform and current game if available
    const friendJSON = {...friendData.profile,...friendPlatform}  //combine into one object
    return  friendJSON
  }


  //builds the profile Objects to use on the friends list and user profile
  async function buildProfileObj (response) {

    const status = response.primaryOnlineStatus;
    const lastOnline= response.presences[0].lastOnlineDate;
    const personalDetails = response.personalDetail;
    const onlineId = response.onlineId;
    const PSPlus = response.plus;
    const avatar = response.avatarUrls[0].avatarUrl;
    const platform = response.basicPresence.primaryPlatformInfo.platform;  
    const trophySummary = response.trophySummary
    let currentGame;
    let currentGameImage;
    let PFP;


    //checks if PFP exist
    if (response.personalDetailSharing == 'shared'){
      if (response.personalDetail.profilePictureUrls){
        PFP = response.personalDetail.profilePictureUrls[0].profilePictureUrl
      }
      else{
        PFP = false
      }
    };  
    //checks if current game exists
    if (response.basicPresence.gameTitleInfoList == true){
      currentGame = response.basicPresence.gameTitleInfoList[0].titleName
      currentGameImage = response.basicPresence.gameTitleInfoList[0].npTitleIconUrl 
    }
    else{
      currentGame = "no";
      currentGameImage = "no"
    }

    // make into one obj
    const Profile = {onlineId, PFP, avatar, PSPlus, status, lastOnline, personalDetails, platform, trophySummary, currentGame, currentGameImage, PFP}
    Profiles.push(Profile) 
}

run()
module.exports= run