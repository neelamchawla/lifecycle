import React, { Component } from 'react'

class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  } 
  
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('should', nextProps )
    return nextProps.text !== this.props.text;
    // return true; 
  }

  render() {
    console.log('render')
    return (
      <div className="LifeCycle">
        Lifecycle
        {this.props.text}
      </div>
    )
  }
}

export default Lifecycle
