import { useState, useMemo } from "react";
// eslint-disable-next-line react/prop-types
function Navbar ({setPopup, setOnlineIdIndex, friendData, personalData}) {



  const userPFP = personalData.personalDetail.profilePictureUrls[0].profilePictureUrl;
  const userAvatar = personalData.avatarUrls[0].avatarUrl

  console.log("PFP", userPFP, "ava", userAvatar)



// const [searchData, setSearchData] = useState(["apple", "map","dap","crap","flap"]);
const searchData = friendData
const [query, setQuery] = useState("");
let searchIndex=0;

function showPopup (index) {
  setPopup(true)
  setOnlineIdIndex(index)
  setQuery("")  //clear query so that the results disaprear
 }



const filteredItems = useMemo(()=>{
  if (!query) return  //if nothing i search retun
  return searchData.filter(data=>{
    data["index"]= searchIndex; // add the index to the json (didnt want to do it like this but it works, i will fix later)
    searchIndex ++;
    data = data.onlineId //filter using online id
   return data.toLowerCase().includes(query.toLowerCase())
  })
}, [searchData, query])


  return(
    <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">
                      {/* Logo */}
                      <a href="index.html" className="logo">
                          <img src="src/resources/better_PSN_logo.png" alt="Better-PSN icon" className="logoImg"/>
                        <h1>Better PSN</h1>
                      </a>






                      {/* Search Bar */}
                      <div className="search-input">
                        <form id="search" onSubmit={(e)=>e.preventDefault()}>
                          <input type="search" value={query} placeholder="Search Friend" id='searchText' name="searchKeyword" onChange={(e)=> setQuery(e.target.value)} />
                        </form>
                        
                        {/* if the search bar is empty dont show the results table */}
                        {query && <div className="search__results">
                          {filteredItems.map((data)=>{
                            console.log("filterd data", data)
                            return (
                              <div className="search__card" onClick={()=>showPopup(data.index)} key={data.onlineId}>
                                <img src={data.PFP ? data.PFP : data.avatar} className="search__card-PFP" />
                                <div className="search__card-onlineID">{data.onlineId}</div>
                              </div>
                          )})}
                        </div>  }



                      </div>








                      {/* Menu */}
                      <ul className="nav">
                          <li><a href="profile.html">Profile <img src={userPFP? userPFP : userAvatar} alt="User PFP" /></a></li>
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