import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ViewMedia.css'

class ViewMedia extends Component {
  render() {
    return(
      <ul className="ViewMedia">
        {this.props.media.map(media =>
          <li key={media.id}>
            <div className="MediaItem">
              <h2>{media.title}</h2>
              <small>{media.year}</small>
              <p>Bechdel score: {media.rating}</p>
              <a href={'http://www.imdb.com/title/tt' + media.imdbid}>See on IMDb >></a>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({ media: state.media })
export default connect(mapStateToProps)(ViewMedia)