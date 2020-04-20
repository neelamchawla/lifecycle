import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello User"
        }
        // this.clickHandler = this.clickHandler.bind(this)       // 1 type
    }
    
    // open this to use 1 - 3 types
    // clickHandler () {
    //     // without binding "this" it will give error
    //     this.setState({ 
    //         message: "GoodBye, Have a nice Day!!"
    //     })
    //     console.log(this)
    // }

    // open this to use 4th type
    clickHandler = () => {                                       // 4 type
        this.setState({
            message: "GoodBye, Have a nice Day!!"
        })
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <p>======= EventBinding ==========</p>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler}>Click Me</button>
                {/* 2 type */}
                {/* 3 type */}
            </div>
        )
    }
}

export default EventBinding


// ========== ways of binding this key word ==============

// this.clickHandler = this.clickHandler.bind(this)       // 1 type

{/* <button onClick={this.clickHandler.bind(this)}>Click Me</button>     // 2 type */}

{/* <button onClick = {() => this.clickHandler()}>Click Me</button> */}  // 3 type