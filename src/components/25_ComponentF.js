import React, { Component } from 'react'
import { UserConsumer } from './25_UserContext'

class ComponentF extends Component {
  render() {
    return (
      <>
        <h1>Component F</h1>
        {/* Step 3: Consume the context value from the provider, we will use consumer component.
        using UserConsumer we will pass a function, which gets the "value" from the provider, can be used in consumer function as a parameter "userName" which can be return in UI page.
        I.e. a function as a child to the consumer component, receives the context "value" as its parameter "userName". the consumer component tells component F to return the value as a userName into jsx
        */}
        <UserConsumer>
            {userName => {
                return <h3>Hello {userName}</h3>
                }}
        </UserConsumer>
      </>
    )
  }
}

export default ComponentF
