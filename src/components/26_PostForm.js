import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Id: '',
         title: '',
         body: ''
      }
    }

    ChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
      const {Id, title, body} = this.state
    return (
      <>
        <form onSubmit={this.SubmitHandler}>
            <div>
                <input type='text' name='Id' value={Id}
                placeholder='Id'
                onChange={this.ChangeHandler} />
            </div>
            <div>
                <input type='text' name='title' value={title}
                placeholder='Title'
                onChange={this.ChangeHandler} />
            </div>
            <div>
                <input type='text' name='body' value={body}
                placeholder='Body'
                onChange={this.ChangeHandler} />
            </div>
            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default PostForm
