import React, { Component } from 'react'
import Lifecycle from './2_Lifecycle.component'

class Lifecycles extends Component {
    constructor() {
      super()
    
      this.state = {
         showChild: true,
         text: ''
      }
    }
    
  render() {
    //   this.forceUpdate()    //avoid this, its a bad practice
    return ( 
      <div className="lifeycle">
        <button
            onClick = {() =>
            this.setState(state => ({
                showChild: !state.showChild
            }))
            }
        >
            {/* {this.state.text} */}
            Toggle LifeCycles
        </button>
        <button
            onClick={() =>
            this.setState(state => ({
                text: state.text + ' hello'
                // text: state.text    //forcing change state
            }))
            }
        > 
            Update Text
        </button>
        {
          this.state.showChild
          ? <Lifecycle text={this.state.text} />
          : null
        }
      </div>
    )
  }
}

export default Lifecycles
