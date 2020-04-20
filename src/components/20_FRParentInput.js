import React, { Component } from 'react'
import FRInput from './20_FRInput'

class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      //creating reference and attach it to the child component
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <>
        <FRInput ref={this.inputRef}/>
        {/* attaching here above ref={this.inputRef} 
        it then go to child component where the actual ref is pointed at.. (ie) in FRInput file
        */}
        <button onClick={this.clickHandler}>Focus</button>
      </>
    )
  }
}

export default FRParentInput