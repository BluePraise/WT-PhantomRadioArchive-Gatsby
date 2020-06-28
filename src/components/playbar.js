import React from "react"

import Style from "./stylesheet.css"

const Playbar = () => {


  return (


    <div className={Style.playbar}>
        { /*This is for the live stream */}
        <div className={Style.playToggle}>
            <div className={Style.playPause}></div>
        </div>
        <div className="session--info">
            {/*Live Stream URL*/}
            <div className="session--title">LIVE ON PHANTOM RADIO</div>
            {/*<audio class="session" preload="metadata" controls>
                <source src="sessions/audiofile.mp3" type="audio/mp3">
            </audio>*/}
        </div>
    </div>


  )
}

export default Playbar
