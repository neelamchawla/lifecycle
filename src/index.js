import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
// import Student from './components/Student';

ReactDOM.render(<App name="Props_Example_index" />, window.document.getElementById('root'));
// // ReactDOM.render(<Student name="Props_Example_index" />, window.document.getElementById('stu'));
// // ReactDOM.unmountComponentAtNode(document.getElementById("stu"));




// =========== props example ==============
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand.model} model and company name {this.props.brand.name}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carinfo = {name: "Ford", model: "Mustang"};
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carinfo} />
//       <button>Click</button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Garage />, document.getElementById('root'));