import './assets/css/App.css'
import React from 'react'
import Navbar from './modules/Navbar'
import FriendsList from './modules/FriendsList'


function App() {
    return(
      <div>
        <Navbar />
        <FriendsList />
      </div>
    )
}

export default App
