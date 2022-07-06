import React, { Component } from 'react'

class ControlledCom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }
  handelUsernameChange = async (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handelCommentsChange = (e) => {
    this.setState({
      comments: e.target.value
    })
  }
  handelTopicChange = (e) => {
    this.setState({
      topic: e.target.value
    })
  }
  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
    e.preventDefault()
  }
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Form</h2>
        <div>
          <label htmlFor="">Username</label>
          <input type='text' onChange={this.handelUsernameChange} value={username} />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea value={comments} onChange={this.handelCommentsChange}></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={topic} onChange={this.handelTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default ControlledCom