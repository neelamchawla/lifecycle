import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: '',
     comments: '',
     topic: 'react'
  }
}

HandleUsername = (e) => {
    this.setState({
        name : e.target.value
    })
}

HandleComments = e => {
    this.setState({
        comments : e.target.value
    })
}

HandleTopic = e => {
    this.setState({
        topic : e.target.value
    })
}

HandleSubmit = event => {
    alert(`UserName: ${this.state.name}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`)
    event.preventDefault()
}

  render() {
      const {name, comments, topic} = this.state
    return (
      <form onSubmit={this.HandleSubmit}>
        <div>
            <label>User Name: </label>
            <input type="text" 
            // value={this.state.name}
            value={name}
            onChange={this.HandleUsername}/>
        </div>
        <div>
            <label>Comments: </label>
            <textarea type="text" 
            // value={this.state.comments}
            value={comments}
            onChange={this.HandleComments}/>
        </div>
        <div>
            <label>Topics: </label>
            <select
            // value={this.state.topic}
            value={topic}
            onChange={this.HandleTopic} >
            <option value = "react">React</option>
            <option value = "angular">Angular</option>
            <option value = "vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
