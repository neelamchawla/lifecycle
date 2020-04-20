import React, { Component } from 'react'


class Class_component extends Component {
constructor(){
    super();

    this.state = {
        string: "Hello World",
        name: "qwerty"
    };
    console.log('String ---> ', this.state.string);
    console.log('Name ---> ', this.state.name);
}

NameChange = () => {
    this.setState({
        string: "Helllooo...!!!",
        name: "asdfg"
    })
}


    render() {
        console.log('String Change to ', this.state.string);
        console.log('Name Change to ', this.state.name);

        return (
            <div>
                <p>=========== Class_component ==========</p>
                <p>{this.state.string}</p>        
                <button className="btn btn-primary" onClick={this.NameChange}>Change Name</button>
                <Class_component2 name={this.state.name}/>
            </div>
        )
    }
}


export default Class_component;

class Class_component2 extends Component {
        render() {
            return (
                <div>
                    <p>I am class_component2, {this.props.name} </p>
                </div>
            )
        }
    }

