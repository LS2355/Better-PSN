import './assets/css/App.css'
import React from 'react'
import Navbar from './modules/Navbar'
import Banner from './modules/Banner'
import Details from './modules/Details'
import FriendsListFeatured from './modules/FriendsList-Featured'
import FriendsList from './modules/FriendsList'

function App() {
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
