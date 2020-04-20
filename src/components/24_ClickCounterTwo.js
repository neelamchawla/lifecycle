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
      // const {count} = this.state        //state
      const {count, incrementCount} = this.props        //props for 2nd output
    return (
      <>
        {/* <button onClick={this.incrementCount}>Clicked {count} Times</button>  // state */}
        <button onClick={incrementCount}>Clicked {count} Times</button>
        {/* //props for 2nd output */}
      </>
    )
  }
}

export default ClickCounterTwo
