import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RouterDemo extends Component {
  handleBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <>
        <h1>Router</h1>
        <button onClick={this.handleBack}>Back</button>
        <p>Current Page Location: {this.props.location.pathname}</p>
        <Link to="/">Home</Link>
      </>
    )
  }
}

// export default withRouter(RouterDemo)
export default RouterDemo
