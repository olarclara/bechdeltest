import React, { Component } from 'react'
import './About.css'

class About extends Component { 
  render() {
    return(
      <div className="About">
        <h1>DOES IT PASS THE BECHDEL TEST?</h1>
        <p>The test asks whether a work of fiction features at least two women who talk to each 
        other about something other than a man. It scores goes from 1 to 3, where:</p>
        <ol>
          <li>the movie has (at least) two named women;</li>
          <li>the women talk to each other;</li>
          <li>they talk about something besides a man;</li>
        </ol>
        <p>It's estimated that half of the movies don't meet the test's criteria.</p>
      </div>
    )
  }
}

export default About