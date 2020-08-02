import React, { Component } from "react"
import IconPlay from "./icon-play"
import IconPause from "./icon-pause"

// I am still not sure what this method does.
function Icons(props) {
    if (props.icon) {
        return <IconPlay />
    }
    else {
        return <IconPause />
    }
}

export default class TogglePlayPause extends Component {

    constructor(props) {
        super(props);

        // set state to IconPlay Component
        this.state = { icon: true }
        // bind the clickhandler to the component.
        this.clickToPlay = this.clickToPlay.bind(this)
      }
    
      clickToPlay() {
        // when click, set it to the other state
        // whichever state that is.

        this.setState({
            icon: !this.state.icon
        });
    }
    render() {

        return (
            <div className="play-toggle">
                <button className="play-button amplitude-play-pause" onClick={this.clickToPlay}><Icons icon={this.state.icon} /></button>
            </div>    
        );
    }
}