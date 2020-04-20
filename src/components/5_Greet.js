import React, { Component } from 'react'

const Greet = props => {
    console.log(props)
    return (
        <div>
        <p>========== functional comp =============</p>
            <h1>
                Hello {props.name}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet