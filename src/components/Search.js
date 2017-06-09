import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) { this.setState({ [e.target.id]: e.target.value }) }

  render() {
    return(
      <div className="Search">
        <input type="text" id="title" value={this.state.title} onChange={this.handleInput}
          placeholder="Search movies by their title..." />
      </div>
    )
  }
}

export default Search