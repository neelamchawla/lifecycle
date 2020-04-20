import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "zxcv"
      }
      console.log("Life Cycle B: Constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("Life Cycle B: getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Life Cycle B: componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Life Cycle B: shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, PrevState){
        console.log("Life Cycle B: getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("Life Cycle B: componentDidUpdate")
    }

    ChangeState = () => {
        this.setState({
            name: 'poiuy'
        })
    }

  render() {
      console.log("Life Cycle B: render")
    return (
      <>
        <h1>LifeCycle B</h1>
        <p>{this.state.name}</p>
        <button onClick={this.ChangeState}>Change</button>
      </>
    )
  }
}

export default LifeCycleB
