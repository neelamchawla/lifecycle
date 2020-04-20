import React, { Component } from 'react'

 class Monster extends Component {
    constructor(){
        super();

        this.state = {monster:[]

                // [{
                //     id: 1,
                //     name: "Frankenstein"
                // },
                // {
                //     id: 2,
                //     name: "Dracula"
                // },
                // {
                //     id: 3,
                //     name: "Zombie"
                // }]
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        // .then(response => console.log(response))
        .then(response => response.json())
        // .then(users => console.log(users)) 
        .then(users => this.setState({ monster: users}));
    }

    render() {
         return (
            <div className="App">
                {this.state.monster.map(monster => (
                    <h1 key={monster.id}>
                        {monster.name} </h1>
                    ))
                }
            </div>
        )
    }
}

export default Monster