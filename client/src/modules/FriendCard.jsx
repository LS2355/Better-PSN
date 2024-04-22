//this is just going to be the freind popup cards
import GetLastOnline from "./lastOnline";
import React from 'react'

function PopupFriendCard(props) {

  console.log("props: " , props)
  console.log("index: ", props.onlineIdIndex)
  
let {onlineId, PFP, avatar, PSPlus, status, lastOnline, personalDetails, platform, trophySummary, currentGame, currentGameImage}= props.friendData[props.onlineIdIndex] || false




  const profileImage = { 
   backgroundImage: "url(" + (PFP || avatar) + ")" 
  }

  return (props.trigger)? (
    <div className='popup'>
      <div className="popup__inner">
        <div className="popup__left-section">
          <div style={profileImage} alt="profile picture" className='popup__PFP' >
            <div className={`popup__status popup__status-${status}`}></div>
          </div>
          <br />
          { personalDetails ?
           (<div className="popup__item">
              <h2 className='popup__primary'>
                {personalDetails.firstName} {personalDetails.lastName} 
                {PSPlus == 1 && (<img className="ps-plus popup__ps-plus" src="https://seeklogo.com/images/P/playstation-plus-logo-5DBDF15160-seeklogo.com.png" alt="PS+ logo" />)}
              </h2>
              <h4 className='popup__secondary'>{onlineId}</h4>
              <div className="popup__platform-container">
                {platform && (<h6>playing on <span className="popup__platform-span">{platform}</span></h6>)}
              </div>
            </div>)
            : <h2 className='popup__primary'>
              {onlineId}
              {platform && (<h6>playing on <span className="popup__platform">{platform}</span></h6>)}
              {PSPlus == 1 && (<img className="ps-plus popup__ps-plus" src="https://seeklogo.com/images/P/playstation-plus-logo-5DBDF15160-seeklogo.com.png" alt="PS+ logo" />)}
              </h2>
          }
        
        </div>
        <div className="popup__right-section row">
          {currentGame ? 
          <div className="popup__game-item col-lg-8">
            <h6>playing</h6>
            <img src={currentGameImage} alt={currentGame} className="popup__game-image" />
            <h4 className="popup__game-or-offline">{currentGame}</h4>
          </div>
            : lastOnline && 
            <div className="popup__game-or-offline col-lg-8">
              <GetLastOnline lastOnline= {lastOnline}/>
            </div> 
          }
          <br />
          {trophySummary && 
          (
            <div className="popup__trophy-container col-lg-8">
              <div className="col-lg-6"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9cfb5b-aa09-4dc2-b19b-931576776dae/de4fujh-3cf64804-b0b2-4d1a-8f60-928f1ddeb575.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiOWNmYjViLWFhMDktNGRjMi1iMTliLTkzMTU3Njc3NmRhZVwvZGU0ZnVqaC0zY2Y2NDgwNC1iMGIyLTRkMWEtOGY2MC05MjhmMWRkZWI1NzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5T7yYnOROSIYA5UVeNWHfc-lfC5EcBmAbgtnGzXv5Pc" alt="trophy image" className="popup__trophy-image"/></div>
              <div className="col-lg-6 popup__trophy-text-wrapper"><div className="popup__trophy-text"> level {trophySummary.level}</div></div>
            </div>
          )
          }

        </div>
        <a className="popup__close-btn" onClick={()=>props.setTrigger(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </a>

        
      </div>
    </div>
  ) : "";
}

export default PopupFriendCard
