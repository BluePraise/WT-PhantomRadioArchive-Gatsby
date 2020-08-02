import React, { Component } from "react"


export default class AudioSession extends Component {

    render() {

        return (
                
            <audio className="session" preload="metadata" controls>
                <source src={this.props.source} type="audio/mp3" />
            </audio>

            <div className={Style.timeCurrent}></div>
            <div class="progress">
                <div class="play--cursor"></div>
            </div>
            <div class="time--duration"></div>
        );
    }
}


