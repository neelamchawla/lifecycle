import React, { Component } from 'react'
import LifeCycleB from './14_LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "qwerty"
      }
      console.log("Constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, PrevState){
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    ChangeState = () => {
        this.setState({
            name: 'asdfg'
        })
    }

  render() {
      console.log("render")
    return (
      <>
        <h1>LifeCycle A</h1>
        <p>{this.state.name}</p>
        <button onClick={this.ChangeState}>Change</button>
        <LifeCycleB />
      </>
    )
  }
}

export default LifeCycleA
