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
                        <h1>Better PSN</h1>
                          {/* <img src="assets/images/logo.png" alt="" /> */}
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
                          <li><a href="profile.html">Profile <img src="http://static-resource.np.community.playstation.net/avatar/3RD/30000.png" alt="User PFP" /></a></li>
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