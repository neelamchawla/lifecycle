import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: "Welcome Users"
        }
    }

    changeMsg(){
        this.setState({
            message: "Thank you"
        })
    }
    render() {
        return (
            <div>
            <p>========== class comp for state - Message =============</p>
            <h1>
                Hello {this.state.message}
            </h1>
            <button onClick={() => this.changeMsg()}>Click ME</button>
        </div>
        )
    }
}
