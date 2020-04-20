import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <>
        {/* {this.props.name()} */}     {/*  // w/o ternary operator*/}
         {this.props.name(false)}       {/* // true/false => Admin/Guest */}
      </>
    )
  }
}

export default User
