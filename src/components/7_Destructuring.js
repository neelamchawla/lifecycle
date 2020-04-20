import React, { Component } from 'react'

// const Destructuring = ({name, age}) => {
//     return (
//         <div>
//             <p>==== function comp for props Destructuring ====</p>

//             <h2>
//                 Hello {name} you are {age} years old

//                 Hello {props.name} you are {props.age} years old
// instead of writting props.name and props.age we added ({name, age}) in const

//             </h2>            
//         </div>
//         )
//     }

//     ============= second way ====================
    // const Destructuring = (props) => {
    //     const {name, age} = props
    //     return (
    //         <div>
    //             <p>==== function comp for props Destructuring ====</p>
    
    //             <h2>
    //                 Hello {name} you are {age} years old
    //             </h2>            
    //         </div>
    //         )
    //     }

// ========================== Class Components ==========================

class Destructuring extends Component {
    render() {
        const {name, age} = this.props
        // const {name, age} = this.state       //for passing states

        return (
            <div>
                <p>==== class comp for props Destructuring ====</p>
    
                <h2>
                    Hello {name} you are {age} years old
                </h2>            
            </div>
            )
        }
    }



export default Destructuring   
