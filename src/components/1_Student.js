import React, { Component } from 'react';
import Home from './1_Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Student extends Component {

    constructor(props){
        super(props);
        console.log("Student - constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("student - derived");
    }

    componentDidMount(){
        console.log("Student - Did_mount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Student - Should_Update");
        console.log(nextProps, nextState);
    }

    getSnapshotBeforeUpdate(prevProps, nextState){
        console.log("Student - snap");
        console.log(prevProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Student - did_Update");
        console.log(prevProps, prevState, snapshot)
    }

    componentWillUnmount(){
        console.log("Student - unmount")
    }

    render(){
        console.log("Student - render - child of App");
    return (
        <div>
            <h3>Hi {this.props.name}, Roll No: {this.props.roll} </h3>
            <Home mroll={this.props.roll}/>
        </div>
    )
}
}


// const Student = props => {
//     return (
//         <div>
//             <h3>Hello {props.name}, Your Roll No: {props.roll}</h3>
//         </div>
//         );
//     }
    
//     export default Student;



// const Student = props => {
// return <h1>Hello {props.name}</h1>
// }

// export default Student;


// ============== index ==============================

// import React from 'react';
// import Student from './components/Student';
// ReactDOM.render(<Student name="John" />, document.getElementById('root'));
