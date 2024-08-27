 function Details ({personalData, friendData}) {
  //variables
  // const trophiesEarned = personalData.trophySummary[0].earnedTrophies
  const trophyLevel = personalData.trophySummary.level
  const onlineStatus = personalData.presences[0].onlineStatus
  
  //trophies
  const platinumTrophies = personalData.trophySummary.earnedTrophies.platinum;
  const goldTrophies = personalData.trophySummary.earnedTrophies.gold;
  const silverTrophies = personalData.trophySummary.earnedTrophies.silver;
  const bronzeTrophies = personalData.trophySummary.earnedTrophies.bronze;

  //friend count
  let onlineFriendCount = 0;
  let offlineFriendCount = 0;

  // check what friends are online

    //loop through friends list and just check who is on   V
    for ( let i = 0; i < friendData.length; i++) {
      if (friendData[i].status == "online"){
        onlineFriendCount++
      }
      else if (friendData[i].status == "offline"){
        offlineFriendCount++
      }
    }

    



  
  return(
    <div className="game-details">
    <div className="row center-content">
      <div className="col-lg-12">
        <h2>Overview</h2>
      </div>
      <div className="col-lg-10 center-content">
        <div className="content" id="details__shadowbox">
          <div className="row">  

            <div className="col-lg-5 ">
              <div className="info text-center">
                <div className="row">
                  <div className="col-lg-2 sideways-text details__sideways-text">
                    <h4>
                      ONLINE
                    </h4>
                  </div>

                  <div className="col-lg-4 num-box">
                    <h1 className="big-number"> {onlineFriendCount} </h1>
                  </div>
                  <div className="col-lg-2 sideways-text details__sideways-text">
                    <h4>
                      OFFLINE
                    </h4>
                  </div>

                  <div className="col-lg-4 num-box">
                    <h1 className="big-number"> {offlineFriendCount} </h1>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="info">
                <div>
                  <h4>Trophies</h4>
                  <span className="center-text">lvl {trophyLevel}</span>
                </div>
                <div className="details__trophies-container col-12 row">
                  <div className="col-3">
                    <img className="details__trophy-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9cfb5b-aa09-4dc2-b19b-931576776dae/de4fujh-3cf64804-b0b2-4d1a-8f60-928f1ddeb575.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiOWNmYjViLWFhMDktNGRjMi1iMTliLTkzMTU3Njc3NmRhZVwvZGU0ZnVqaC0zY2Y2NDgwNC1iMGIyLTRkMWEtOGY2MC05MjhmMWRkZWI1NzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5T7yYnOROSIYA5UVeNWHfc-lfC5EcBmAbgtnGzXv5Pc" alt="platinum trophies"/>
                    <div className="details__trophy-count">{platinumTrophies}</div>
                  </div>
                  <div className="col-3">
                    <img className="details__trophy-img" src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-gold-trophy.png" alt="platinum trophies"/>
                    <div className="details__trophy-count">{goldTrophies}</div>
                  </div>
                  <div className="col-3">
                    <img className="details__trophy-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9cfb5b-aa09-4dc2-b19b-931576776dae/dczn5p8-4a3f5d31-027b-4a49-825b-ee718dc6e08f.png/v1/fit/w_375,h_401/trophies_silver_by_switchblade1984_dczn5p8-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZmI5Y2ZiNWItYWEwOS00ZGMyLWIxOWItOTMxNTc2Nzc2ZGFlXC9kY3puNXA4LTRhM2Y1ZDMxLTAyN2ItNGE0OS04MjViLWVlNzE4ZGM2ZTA4Zi5wbmciLCJ3aWR0aCI6Ijw9NzQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lQSKbZEoFjy3WZrm8LMFeaasdUGfKuoOSJTecUV8O4I" alt="platinum trophies"/>
                    <div className="details__trophy-count">{silverTrophies}</div>
                  </div>
                  <div className="col-3">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9cfb5b-aa09-4dc2-b19b-931576776dae/dczn4qm-c948def7-65de-48fc-8a74-ddb1728a410c.png/v1/fill/w_749,h_800/trophies_bronze_by_switchblade1984_dczn4qm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZmI5Y2ZiNWItYWEwOS00ZGMyLWIxOWItOTMxNTc2Nzc2ZGFlXC9kY3puNHFtLWM5NDhkZWY3LTY1ZGUtNDhmYy04YTc0LWRkYjE3MjhhNDEwYy5wbmciLCJ3aWR0aCI6Ijw9NzQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.plCx1KWEzlBI46HAygwV-5XINio9i1FPiJTK8Wg60I4" alt="platinum trophies"/>
                    <div className="details__trophy-count">{bronzeTrophies}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
            <div className="info text-center">
                <div className="details__status-container">
                  <div className={`details__status details__status-${onlineStatus}`}></div>
                </div>
                  <span>Your {onlineStatus} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details