import React, { Component } from 'react'
import UpdateComponent from './23_WithCounter'

class ClickCounter extends Component {
    render() {
      const {count, incrementCount} = this.props
      console.log("clickCounter",this.props.name)
    return (
      <>
        <button className="btn btn-warning"
        onClick={incrementCount}>
        {this.props.name} Clicked {count} Times
        </button>    
      </>
    )
  }
}

// export default UpdateComponent(ClickCounter)
export default UpdateComponent(ClickCounter, 10)    //for 2 parameters
//Higher order component
