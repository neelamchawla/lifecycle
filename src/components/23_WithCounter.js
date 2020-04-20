// import React from 'react';

// const UpdateComponent = OriginalComponent => {
//   // UpdateComponent is a funtion which accepts the component or a parameter that is OriginalComponent and refers to NewComponent. Here OriginalComponent is HoverCounter & ClickCounter. Whereas, the NewComponent has the functionality to maintain the state of account property and also a method to increment that current property of both are passed as props to the OriginalComponent. Where the props are then return the control goes back to the ClickCounter & HoverCounter, where the {count, incrementCount} are passed in the HOC(Higher order component) structured and used in the return statement.
//   // HOC is basically taking care of maintaing the state and incrementing whenever clicking on button or hovering mouse over the header, and display that in UI.
//   // HOC is a funtion that accepts the component and returns an enhanced component.
//   // HOC is a pattern where function accepts a component and returns an enhanced component, HOC pattern is used to share common functionality between components without having to repeat the code.
//   class NewComponent extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count: 0
//       }
//     }
    
//     incrementCount = () => {
//         this.setState( prevState => {
//           return {count: prevState.count + 1}
//         }) 
//     }  
    
//       render(){
//         console.log("withCounter",this.props.name)
//           return (
//           <>
//             <OriginalComponent
//             count={this.state.count}
//             incrementCount = {this.incrementCount}
//             {...this.props}   // to get all the remaing props have specified in other components i.e. HoverComponent and ClickComponent 
//             />
//           </>
//         );
//       }
//   }
//   return NewComponent 
// }

// export default UpdateComponent


// ================== Passing two parameters =====================

import React from 'react';

const UpdateComponent = (OriginalComponent, incrementNo) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    incrementCount = () => {
        this.setState( prevState => {
          return {count: prevState.count + incrementNo}
        }) 
    }  
    
      render(){
        console.log("withCounter",this.props.name)
          return (
          <>
            <OriginalComponent
            count={this.state.count}
            incrementCount = {this.incrementCount}
            {...this.props}
            />
          </>
        );
      }
  }
  return NewComponent 
}

export default UpdateComponent