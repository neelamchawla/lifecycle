import React, { Component } from 'react'

class Setstate extends Component {
  
    state= {
           count: 23 + 1
        }
    
    //2nd
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 23 + this.props.increment
    //   }
    // }
  
    handleClick = () => {
      //1st
    //   this.setState({
    //     count: this.state.count + 1
    //   },
    //   () => console.log(this.state.count))
    // }
      // 2nd
      this.setState((prevState, prevProps) => {
        return { count : prevState.count + prevProps.increment}
      },
        () => console.log(this.state.count)
      )
    }
    
    render() {
      return (
        <div className="setstate">
          <p>{this.state.count}</p>
          <button
          onClick={this.handleClick}
          >Update</button>
          <br/>
        </div>
      )
    }
  }
  

export default Setstate
