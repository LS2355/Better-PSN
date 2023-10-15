

function Details () {
  return(
    <div className="game-details">
    <div className="row center-content">
      <div className="col-lg-12">
        <h2>Overview</h2>
      </div>
      <div className="col-lg-11 center-content">
        <div className="content" id="details__shadowbox">
          <div className="row">  

            <div className="col-lg-4">
              <div className="info text-center">
                <div className="row">
                  <div className="col-lg-2 sideways-text details__sideways-text">
                    <h4>
                      ONLINE
                    </h4>
                  </div>
                  <div className="col-lg-5">
                    <h1 className="big-number"> 6 </h1>
                    <span>Close Friends</span>
                  </div>
                  <div className="col-lg-5">
                    <h1 className="big-number"> 6 </h1>
                    <span>Friends</span>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-2">
            <div className="info text-center">
                  <h1 className="big-number"> 34 </h1>
                  <span>Offline</span>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info">
                <div className="left">
                  <h4>Trophies</h4>
                  <span>your level</span>
                </div>
                <ul>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
            <div className="info text-center">
                <div className="details__status-container">
                  <div className="details__status details__status-online"></div>
                </div>
                  <span>Your Online</span>
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