// import React, { Component } from 'react'

// class RefsDemo extends Component {
//     constructor(props) {
//       super(props)
    
//       this.inputRef = React.createRef()      //creating reference that will be used in <input ref={this.inputRef}/>
//     }
//     componentDidMount() {
//         this.inputRef.current.focus()
//         console.log(this.inputRef)
//     }

//     clickHandler = () => {
//         alert(this.inputRef.current.value)
//     }

//   render() {
//     return (
//       <>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.clickHandler}>Click</button>
//       </>
//     )
//   }
// }

// export default RefsDemo


// =================================

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.cbRef = null         //create property
      this.setCbRef = element => {    // create a method that assign element to  the property
          this.cbRef = element
      }
    }
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        console.log(this.cbRef)
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <>
         <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default RefsDemo