import React, { Component } from 'react'
import RegularComp from './16_RegularComp'
import PureComp from './16_PureComp'
import Memo from './Memo'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Parent"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Qwerty'
            })
        }, 5000)
    }
    
  render() {
      const {name} = this.state
      console.log("========= Parent Component =========")
    return (
      <>
        <h1>Parent Component</h1>
        <RegularComp name={name} />
        <PureComp name={name} />
        <Memo name={name} />
      </>
    )
  }
}

export default ParentComp
