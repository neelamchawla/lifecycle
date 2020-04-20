import React, { Component } from 'react'
import UpdateComponent from './23_WithCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      counting: 0
    //   }
    // }
    
    // incrementCount = () => {
    //     this.setState( prevState => {
    //       return {counting: prevState.counting + 1}
    //     }) 
    // } 

    render() {
        // const {counting} = this.state
        const {count, incrementCount} = this.props
        console.log("hoverCounter",this.props.name)
    return (
      <>
        <h1 onMouseOver={incrementCount}>
        {this.props.name} Hovered Heading {count} Times</h1>
      </>
    )
  }
}

// export default UpdateComponent(HoverCounter)
export default UpdateComponent(HoverCounter, 5)    //for 2 parameters
//Higher order component