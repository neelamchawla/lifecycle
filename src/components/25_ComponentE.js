import React, { Component } from 'react'
import ComponentF from './25_ComponentF'
import UserContext from './25_UserContext'

class ComponentE extends Component {


static contextType = UserContext          //2


  render() {
    return (
      <>
        Component E context {this.context}
        <ComponentF />
      </>
    )
  }
}

// ComponentE.contextType = UserContext   //1 or

export default ComponentE

// limitation of context compare to consumer:
// 1. it only works with class components.
// 2. you can only add / subscribe to a single context only.
// when you need more than one context, in that scenario you have to use the consumer component.