import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
      // console.log("Regular")
    return (
      <>
        <h3>Regular Component {this.props.name}</h3>
      </>
    )
  }
}

export default RegularComp