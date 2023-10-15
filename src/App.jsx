import './assets/css/App.css'
import {useState}from 'react'
import Navbar from './modules/Navbar'
import Banner from './modules/Banner'
import Details from './modules/Details'
import FriendsListFeatured from './modules/FriendsList-Featured'
import FriendsList from './modules/FriendsList'
import gameData from '../../dummy-data'
import PopupFriendCard from './modules/FriendCard'
// import { getProfileFromUserName,  exchangeCodeForAccessToken, exchangeNpssoForCode, getUserFriendsAccountIds, getProfileFromAccountId} from 'psn-api';





function App() {
  const [friendCardPopup, setFriendCardPopup] = useState(false);  //toggles Friend popup
  const [friendsListExpand, setFriendsListExpand] = useState(false);  //toggles expandend friends list
  const [onlineIdIndex, setOnlineIdIndex] = useState([]);  //stores what online id is currently being used
 




  return(
    <div>
      <main>
        {/* <button onClick={()=> setFriendCardPopup(true)}>see popup</button> */}
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">-
                <Banner />
                <FriendsListFeatured 
                  friendData = {gameData}
                  setPopup = {setFriendCardPopup}
                  setOnlineIdIndex = {setOnlineIdIndex}
                />
                <Details />
                <FriendsList 
                  friendData= {gameData}
                  expandList= {friendsListExpand}
                  setExpandList= {setFriendsListExpand}
                  setPopup = {setFriendCardPopup}
                  setOnlineIdIndex = {setOnlineIdIndex}
                />
                {/* when clicking on one of the friends names we will get the id and make the popup work
                  use this code: <button onClick={()=> setFriendCardPopup(true)}>
                */}
              </div>  
            </div>  
          </div>  
        </div>
      </main>    
      <PopupFriendCard trigger={friendCardPopup} 
        setTrigger={setFriendCardPopup}
        onlineIdIndex = {onlineIdIndex} 
        friendData = {gameData} 
      />
    </div>
  )
} 



export default App
