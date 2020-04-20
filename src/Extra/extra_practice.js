// ============= home =========== User-> Name, setState =============

import React, { Component } from 'react';
// import logo from './Extra/logo.svg';
// import './css/App.css';
import Student from './components/Student'

const App = (props) => {
  return(
    <div>
      {/* <Student name="John" roll="1" />
      <Student name="Joe" roll={1+1} />
      <Student name="Jane" roll="3" />
      <Student name="Jill" roll="4" />
      {props.children} */}
    </div>
  )
}

// ====================== second example ==============================
class Child extends Component{
  
  constructor(props){
    super(props);
    this.state ={
      id: 1,
      name:"Ross"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick () {
  //   this.setState({name: "Joe"})            //modify name
  //   this.setState((state,props) => {console.log("state",state,"props",props);});
  //   console.log("button clicked", this);
  // }

  handleClick = (id,e) => {
    console.log(id);
    console.log(e);
    this.setState({name: "Joe"});            //modify name
    // console.log("button clicked", this);
  }

  //  handleClick = (e) => {                // element of link
  //   e.preventDefault();                  //disable href link to redirect
  //   console.log("button clicked", this);
  // }

render(){
  return (
  <div><br />
    <h3>Hello {this.props.children} my name is {this.state.name}</h3>
    <button className="btn btn-primary" onClick= {e => {this.handleClick(this.state.id)}}>Get Id</button>
    <button className="btn btn-warning" onClick= {this.handleClick.bind(this, this.state.id)}>Get Id</button>
    <button className="btn btn-success" onClick={this.handleClick}>Click Me</button><br /><br />
    <a href="#" onClick={this.handleClick}>Click on this link</a>
  </div>
  );
}
}

export {App, Child};

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// ==================== Practice ========== Module_2 =============

// ===== export default App ========

// === ex 1 ===
//exporting module example;
// export let fname = "John";
// export let lname = "Doe";

// === or ===

// let fname = "John";
// let lname = "Doe";
// export {fname, lname}

// ====

// let fname = "John";
// let lname = "Doe";

// let obj = {
//     name: "Joey"
// }
// export {fname, lname, obj}

// === ex 2 ===
// === Default export ===

// let fname = "John";
// export default fname

// === ex 3 ===
// ===== Funtion ======

// export function greet(msg){
//   console.log(msg);
// }

// === ex 4 === class ===
// export class Greet{
//   constructor(){ 
//     console.log("Constructor");
//   }
//   greet(){
//     console.log("Good Morning, Function");
//   }
// };


// ============================================================
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


// ============= index =========== User-> Name, setState =============

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
// import Student from './components/Student';
import { App, Child } from './App';
import { Home } from './components/Home';

class App2 extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Users</h1>
                        <Home age="25"/>
                        
                        <App><p>Children prop example</p></App>
                        <Child>I am Child</Child>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App2 />, window.document.getElementById('root'));
// ReactDOM.render(<App />, window.document.getElementById('root'));


// ============= home =========== User-> Name, age, hobby =============


import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
    render(){
        // let comp = "";
        // if (true){
        //     comp = <p>Hello Users!!</p>;
        // }
        console.log(this.props);
        return (
            <div>
            {/* <p>New Component!!</p>
            {comp}                      component
            {"Hiii"}                    string
            { 5 != 2 ? "yes" : "No"}    ternary */}
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                        <p>Name: {this.props.name} || Age: {this.props.age}</p>
                        <p>Name: {this.props.user.name} || Age: {this.props.user.age}</p>
                        <p>Object => Hobby: [{this.props.user.hobby}]</p>
                        <div>
                            <h4>Hobbies</h4>
                            <ul>
                                {this.props.user.hobby.map((hobby, i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    hobby: PropTypes.array,
    children: PropTypes.element.isRequired
};


// =========================== index ==============================

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render(){
        var user = {
            name: "Anna",
            age: 24,
            hobby: ["Sports ","Art ","Reading "]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Users</h1>
                        <Home name={"Max"} age={27} user={user}>
                            <p>"Hello Users...!!!"</p>
                        </Home>
                        {/* <Home /> */}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById('root'));


// ===================== Practice ========== Module_1 ======
// === ex 1 === export ===
//exporting module example;
// import {fname, lname} from './App';
// console.log(fname, lname);

//alias example
// import {fname as f, lname as l} from './App';
// console.log(f, l);

// import {fname, lname, obj} from './App';
// // obj.name = "Ross";
// console.log(obj.name);
// console.log(fname, lname);

// === ex 2 === default ====
//exporting module example;
// import fname from './App';
// console.log(fname);

//alias example
// import {default as f} from './App';
// console.log(f);

// === ex 3 === functions ====
// import {greet} from './App';
// greet("Hello World!!");

// === ex 4 === class functions ====
// import {Greet} from './App';
// var gm = new Greet();
// gm.greet();

// ========================================================
// ====================== home ============================

import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.InitialAge,
            status: 0
            };
        }

        older() {
            this.setState({
                age: this.state.age + 3
            });
            // console.log(this.props);
        }   
    render(){

        // console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                        <p>Name: {this.props.name} || Age: {this.state.age}</p>
                        <p>Status: {this.state.status}</p>
                        <hr/>
                        <button className="btn btn-primary" onClick={() => this.older()}>Make me Older</button>
                </div>
            </div>
        </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

// constructor(props){
//     super();
//     this.age = props.age;
// }
// older(){
//     this.age +=3;
//     console.log(this.age);
// }

//onClick={this.older.bind(this)}


// ================================== index ============================================

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Users</h1>
                        <Home name={"Max"} InitialAge={27} />
                        {/* <Home /> */}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById('root'));