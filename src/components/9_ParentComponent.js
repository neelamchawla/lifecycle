import React, { PureComponent } from 'react'
import ChildComponent from './9_ChildComponent'

class ParentComponent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <br />
                <p>=== Parent Component ===</p>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
