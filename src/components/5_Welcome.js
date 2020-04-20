import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
            <p>========== class comp =============</p>
            <h1>
                Hello {this.props.name}
            </h1>
            {this.props.children}
        </div>
        )
    }
}
