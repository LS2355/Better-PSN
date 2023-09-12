import React from "react";
import ReactDom from 'react-dom/client'

function Navbar () {
  return(
    <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">
                      {/* Logo */}
                      <a href="index.html" className="logo">
                          <img src="assets/images/logo.png" alt="" />
                      </a>

                      {/* Search Bar */}
                      <div className="search-input">
                        <form id="search" action="#">
                          <input type="text" placeholder="Search Friend" id='searchText' name="searchKeyword" onkeypress="handle" />
                          <i className="fa fa-search"></i>
                        </form>
                      </div>
                      {/* Menu */}
                      <ul className="nav">
                          <li><a href="index.html" className="active">Home</a></li>
                          <li><a href="browse.html">Browse</a></li>
                          <li><a href="details.html">Details</a></li>
                          <li><a href="streams.html">Streams</a></li>
                          <li><a href="profile.html">Profile <img src="assets/images/profile-header.jpg" alt="User PFP" /></a></li>
                      </ul>   
                      <a className='menu-trigger'>
                          <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
    </header>
 
  )
}    
                  


export default Navbar