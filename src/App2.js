import React, { Component } from 'react'
import './css/App.css'
import logo from './Extra/logo.svg'
import Setstate from './components/lifecycle/1_Setstate'
import Lifecycles from './components/lifecycle/2_Lifecycles'

export default class App2 extends Component {
    constructor(props){
        super(props);
        console.log("App2 - constructor");
        console.log(props);
        this.state = {
            roll: 111
        }
        console.log("App2 - outside constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("App2 - derived");
    }

    componentDidMount(){
        console.log("App2 - did_mount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("App - should_update");
        console.log(nextProps, nextState);
    }

    getSnapshotBeforeUpdate(prevProps, nextState){
        console.log("App - snap");
        console.log(prevProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("App - did_update");
        console.log(prevProps, prevState, snapshot)
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className='App-logo' alt="logo" />
            <Setstate increment={1} />
            <Lifecycles />
            </header>
            </div>
        )
    }
}
