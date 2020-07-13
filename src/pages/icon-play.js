import React, { Component } from "react"
import { number } from "prop-types"

export default class iconPlay extends Component {
    render() {
        const { size } = this.props
        return (
            <svg xmlnsXlink="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 227 249">
                <path id="Polygon_1" data-name="Polygon 1" d="M124.5,0,249,227H0Z" transform="translate(227) rotate(90)"/>
            </svg>
        );
    }
}

iconPlay.propTypes = {
    size: number
}