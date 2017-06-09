import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setMedia } from '../actions'
import './GetMedia.css'

class GetMedia extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  static propTypes = { title: PropTypes.string.isRequired }
  handleSearch(e) {
    const title = this.props.title.replace(/ /g, '+')
    fetch('http://bechdeltest.com/api/v1/getMoviesByTitle?title=' + title)
      .then(res => res.json())
      .then(data => this.props.setMedia(data))
      .catch(err => console.error(err))
  }

  render() {
    return(
      <button onClick={this.handleSearch} className="GetMedia">SEARCH</button>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setMedia: setMedia }, dispatch)
export default connect(null, mapDispatchToProps)(GetMedia)