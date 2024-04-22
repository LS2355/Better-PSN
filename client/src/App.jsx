
import {useEffect, useState}from 'react'
import Navbar from './modules/Navbar'
import Banner from './modules/Banner'
import Details from './modules/Details'
import FriendsListFeatured from './modules/FriendsList-Featured'
import FriendsList from './modules/FriendsList'
import gameData from '../../dummy-data'
import PopupFriendCard from './modules/FriendCard'
import PersonalLoginInstructions from './modules/PersonalLoginInstructions'
// look here for optomization later: https://codedamn.com/news/reactjs/handle-async-functions-with-ease


function App() {
  const [friendCardPopup, setFriendCardPopup] = useState(false);  //toggles Friend popup
  const [friendsListExpand, setFriendsListExpand] = useState(false);  //toggles expandend friends list
  const [onlineIdIndex, setOnlineIdIndex] = useState([]);  //stores what online id is currently being used
 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(gameData[0]); //i need to have some sort of data in here before render for the sort to work properly
  const [personalData, setPersonalData] = useState(gameData[1].profile) 

  const [sortedData, setSortedData]= useState(["loading"]);
  const [loginDisplay, setloginDisplay] = useState(true)  //when set to true login component will disapear
  // gonna need a loading section
  const [ContentDisplay, setContentDisplay] = useState(false) // when set to true content will appear

  const [renderMethod, setRenderMethod] = useState("")

  const generalTemplate = (
    <div>
      <main>
        <Navbar 
        setPopup = {setFriendCardPopup}
        setOnlineIdIndex = {setOnlineIdIndex}
        friendData = {data}
        personalData={personalData}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">-
                <Banner/>
                <FriendsListFeatured 
                  friendData = {data}
                  setPopup = {setFriendCardPopup}
                  setOnlineIdIndex = {setOnlineIdIndex}
                />
                <Details 
                  personalData = {personalData }
                  friendData = {data}
                />
                <FriendsList 
                  friendData= {data}
                  expandList= {friendsListExpand}
                  setExpandList= {setFriendsListExpand}
                  setPopup = {setFriendCardPopup}
                  setOnlineIdIndex = {setOnlineIdIndex}
                />
              </div>  
            </div>  
          </div>  
        </div>
      </main>    
      <PopupFriendCard trigger={friendCardPopup} 
        setTrigger={setFriendCardPopup}
        onlineIdIndex = {onlineIdIndex} 
        friendData = {data} 
      />
    </div>

  )
 /*                              Game Plan                              */
//login
 //make the login option the default display
 //figure out how to do conditional renduring on click 
   //i think that i can do this with just useState and have it become true on click
 //make the api call just a function that runs when i click on template option(login-screen)

//data (this i will do later)
  // now that i am learning data-structurs and algorythms see if their is something that i can do to speed up the search 
  

//server 
  //figure out why the fuck is the server so inconsistant with giving me my data. 
  //figure out how to fix cors error (pretty sure i just have to instal the npm and add it to a app.use(cors))
  
  






//git 
  //i have to figure out how to move the mail folder for the git repository if thats possible.
    //if not then i have to create a new repository 
  
//hosting 
  // I think that i can host the api for free buy using github 
    //it will be extreamly low traffice so i doubt that it will be a problem

// thinks 
  // the constanty calling of my api is probably do to react re-rendering maybe it will be fixed when i run the api call through a function instead

 /*                              Game Plan                              */


  useEffect(()=>{ //this sorts the data by online status
    setData(data.sort((a,b) => a.status < b.status ? 1 : -1))
  },[data])
  


  //gets data from My api
    async function fetchData () {
      try{
        var response = await fetch("http://localhost:3000/psn", //make sure to fix the /testAPI
          {
            method: 'GET'
          }
        )
        response = await response.json();
        setData(response[0])
        setPersonalData(response[1].profile)
        setLoading(false)
      }
      catch (err){
        console.log("error:", err)
        setError(err)
        setLoading(false)
      }
    }




  function handleLogin (Method){
    setloginDisplay(false)  //close login section
    setContentDisplay(true) //open content section
    setRenderMethod(Method) //what is going to be in the content
    if (Method == "demo"){
      fetchData()
      
    }

    
  }



  function RenderContent () {
    if (renderMethod == "demo"){
      if (loading){
        return <div>loading ...</div>
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      else {
        return generalTemplate     
      } 
    }
    else if (renderMethod == "template"){
      return generalTemplate
    }
    else if (renderMethod == "personal"){
      return <PersonalLoginInstructions />
    }
  }



    return (  //login screen
<div>
  {loginDisplay && (
    <div className="login-page">
      <div className="login-section col-8">
        <div className="login-text col-12">
          <div className="login-text__title">Better PSN</div>
          <div className="login-text__subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic </div>
        </div>
        <div className='login-options col-12'>
          <div className="row">
            <div className="login-option col-4" onClick={()=>handleLogin("personal")}>personalAccount</div> {/*when you click on this it will show you step by step instructions on how to use your own personal account */}
            <div className="login-option col-4" onClick={()=>handleLogin("demo")}>demo account</div>  {/* when you clock on this it will fill template with data from the dummy account*/}
            <div className="login-option col-4" onClick={()=>handleLogin("template")}>template</div>   {/* when you click on this it will fill all the info with dummy data i made up */}

          </div>
        </div>
      </div>
    </div>
      )}
  {ContentDisplay && (
    <div>
      {RenderContent()}
    </div>
    )
  }
</div>
    )
}




export default App
