// import React, { Component } from 'react'

// ================ 1st way - if/else ====================

// class UserGreet extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             // isLogged: true              // Admin
//              isLogged: false         // Guest
//         }
//     }
    
//     render() {
//         if (this.state.isLogged) {
//             return  <h2>Welcome Admin</h2>
//         } else {
//             return  <h2>Welcome Guest</h2>
//         }
//         // return (
//         //     <div>
//         //     </div>
//         // )
//     }
// }

// export default UserGreet


// ================ 2nd way - if/else ====================

// import React, { Component } from 'react'

// class UserGreet extends Component {
//     constructor(props) {
//        super(props)
//         this.state = {
//             isLogged: true              // Admin
//             //  isLogged: false         // Guest
//         }
//     }
//     render() {
//         let message
//         if (this.state.isLogged) {
//             message = <h2>Welcome Admin</h2>
//         } else {
//             message = <h2>Welcome Guest</h2>
//         }
//         return (
//             <div>
//                 {message}
//             </div>
//         )
//     }
// }

// export default UserGreet


// ================ Ternary ====================


// import React, { Component } from 'react'

// class UserGreet extends Component {
//     constructor(props) {
//        super(props)
//         this.state = {
//             // isLogged: true              // Admin
//              isLogged: false         // Guest
//         }
//     }
//     render() {
//         return (
//             this.state.isLogged ?
//             <h2>Welcome Admin</h2>  :
//             <h2>Welcome Guest</h2>

//             // condition ? true : false
//         )
//     }
// }

// export default UserGreet


// ================ Short circuit ====================

import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
       super(props)
        this.state = {
            isLogged: true              // Admin
            //  isLogged: false               // Nothing
        }
    }
    render() {
        return this.state.isLogged &&  <h2>Welcome Admin</h2>
        // evaluate if LHS true  : evaluates RHS
        // evaluate if LHS false : will not evaluate RHS
    }
}

export default UserGreet
