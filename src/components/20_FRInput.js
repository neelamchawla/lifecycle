// FR - Forward Ref
// import React, { Component } from 'react'
import React from 'react'

// class FRInput extends Component {
//   render() {
//     return (
//       <>
//         <input type="text" />
//       </>
//     )
//   }
// }

// here the child component recieves the ref from parent component in this (props, ref) then attaches it to native input element... child component basically forwarding ref from parent component to its native component
const FRInput = React.forwardRef((props, ref) => {
  return (
    <>
        <input type="text" ref={ref}/>
        {/* Here ref={ref} to the native component,
        now parent component can directly access the native component, using this input element 
        */}
    </>
  );
})

export default FRInput
