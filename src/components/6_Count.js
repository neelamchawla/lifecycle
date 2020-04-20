import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0 
        }
    }
    
    increment(){
        // this.state.count = this.state.count + 1 
        // this will only change in console.log
        
        this.setState(
            {
            count: this.state.count + 1
            },
            () => {
                console.log('CallBack Value', this.state.count)
                //calls after state has updated
            }
        )
        // react will update in page
        console.log(this.state.count)   
        //calls before state has updated //syncronous
    }

    increment2(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log('inc 2', this.state.count)
    }

    incrementFive(){
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
    }

    render() {
        return (
            <div>
                <h3>
                    Count -> {this.state.count}
                </h3>
                <button onClick={() => this.incrementFive()}>Increment by 5</button>
                <button onClick={() => this.increment2()}>Increment by 1</button>
            </div>
        )
    }
}
