import React from "react";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: Math.random().toString(36).substring(2, 8),
            roll: 101,
            age: 25,
            mroll: this.props.roll
        };
        console.log("Home - constructor")
    }

    componentDidMount(){
        console.log("Home - Did_mount");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Home - derived", state);
        console.log("mroll", props);
        if (props.roll !== state.roll){
            return { mroll : props.roll };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.roll < 105){
        console.log("Home - Should_Update");
        console.log(nextProps, nextState);
        return true;
    }
        // console.log(nextProps, nextState);
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, nextState){
        console.log("Home - snap");
        console.log(prevProps, nextState);
        return 45;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Home- did_Update");
        console.log(prevProps, prevState, snapshot)

    }

    change = () => {
        this.setState({name: Math.random().toString(36).substring(2, 8), roll: this.state.roll + 1, age: this.state.age + 1});
        console.log("Button Clicked")
    }
    render(){
        console.log("Home - render - child of student");
        return (
        <div className="container">
             <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <h4>Hello {this.state.name}, Roll No.{this.state.roll},
                    Your age: {this.state.age}</h4>
                    <button className="btn btn-warning" onClick={this.change}>Change on click</button>
                </div>
            </div>
        </div>
        );
    }
}


// ================== Method of using state ======================
// using constructor
// constructor(props){
//     super(props);
//     this.state = {
//     name: "john",
//     roll: "101",
//     age: this.props.age
// };
// }


// using state
// class Home extends React.Component{
//     state = {
//         name: "john",
//         roll: "101",
//         age: this.props.age
// }