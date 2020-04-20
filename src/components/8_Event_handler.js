// import React from 'react'

// function Event_handler() {

//     function clickHandler(){
//         console.log("Event_handler Button clicked")
//     }

//     return (
//         <div>
//             <p>=== function component Event_handler =====</p>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     )
// }

// export default Event_handler

import React, { Component } from 'react'

class Event_handler extends Component {
    clickHandler(){
       console.log("Event_handler Button clicked")
    }

    render() {
        return (
            <div>
                <p>=== class component Event_handler =====</p>
                <button onClick={this.clickHandler}>Click</button>            
            </div>
        )
    }
}

export default Event_handler

