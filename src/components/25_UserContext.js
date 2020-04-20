import React from 'react'

// const UserContext = React.createContext()                 // without default value
const UserContext = React.createContext("Guest")           // with default value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
// step 1: creating contex

export default UserContext
//to get context property in componentE, using class: 1st