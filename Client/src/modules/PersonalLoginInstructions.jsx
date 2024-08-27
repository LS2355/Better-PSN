import { useState } from "react"

function PersonalLoginInstructions () {

  
  const [npsso, setNpsso] = useState([])

  function handleNpssoSubmit() {    //here we have to send the npsso to the server to get ran in the playstation function
    console.log(npsso)
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify({userNpsso: npsso}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
  




  return(
    <div className="personal__container">
    <div className="personal__wrapper">
      <div className="personal__title">INSTRUCTIONS</div>
      <div className="personal__subheading">using your personal account is a bit more hands on then the other two options. <br/> DISCLAMER: I dont keep your data for any reason or do anything with it. I use this site personally so I wouldn't want to deal with that either</div>
      <ul className="personal__inst">
        <li className="personal__inst-step">
          <span className="personal__inst-step-number">STEP 1:</span> 
          <div className="personal__inst-step-directions">
            sign into the playstation website 
            <a href="https://www.playstation.com" className="personal__inst-step-link" target="blank_"> Playstation website</a>
          </div>
        </li>
        <li className="personal__inst-step">
          <span className="personal__inst-step-number">STEP 2:</span> 
          <div className="personal__inst-step-directions">
            In the same browser vist https://ca.account.sony.com/api/v1/ssocookie
            <a href="https://ca.account.sony.com/api/v1/ssocookie" className="personal__inst-step-link" target="blank_">vist</a>
          </div>
        </li>
        <li className="personal__inst-step">
          <span className="personal__inst-step-number">STEP 3:</span> 
          <div className="personal__inst-step-directions">
            within the last visited site you will see something that look like this <br />
            <span className="disclaimer">{'(do not share this code! This is equal to your account password)'}</span> 
            <div className="personal__inst-step-example"> {'{ "npsso": "<64 character token>" }'} </div>
          
          </div>
        </li>
        <li className="personal__inst-step">
          <span className="personal__inst-step-number">STEP 4:</span> 
          <div className="personal__inst-step-directions">
            copy the 64 character token and paste it into the field below
          </div>
        </li>

        <li className="personal__inst-step">
          <div className="personal__inst-step-directions">
            <form onSubmit={(e)=>e.preventDefault()} id="npsso-form">
              <input type="text" className="personal__inst-step-input" id="npsso" value={npsso} placeholder="NPSSO" onChange={(e)=> setNpsso(e.target.value)}></input>
              <button type="submit" id="npsso-submit" onClick={()=>handleNpssoSubmit()}>SUBMIT</button>
            </form>


          </div> 
        </li>

        <li className="personal__inst-step">
          <div className="disclaimer">This data is sent to a server but it is not saved. This is done because sony {"doesn't"} allow for api calls in the front end.</div>
        </li>
        

      </ul>
          
      
    </div>
  </div>

  )
}

export default  PersonalLoginInstructions