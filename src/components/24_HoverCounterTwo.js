import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // incrementCount = () => {
  //     this.setState(prevState => {
  //         return { count: prevState.count + 1 }
  //     })
  // }
  // for first output

  render() {
      // const {count} = this.state
      const {count, incrementCount} = this.props      // for 2nd output
    return (
      <>
        {/* <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2> //state */}
        <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2> 
        {/* //props for 2nd output */}
      </>
    )
  }
}

export default ClickCounterTwo
