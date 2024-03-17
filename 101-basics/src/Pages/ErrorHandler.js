import { Component } from "react"

class ErrorHandler extends Component {
  constructor() {
    super()
    this.state = { error: false, info: null, hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log("error?: " + error)
    this.setState({ ...this.state, hasError: true })
  };

  componentDidCatch(error, info) {
    this.setState({
      error, info
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>Is there any Error: {this.state.error}</p>
          <p>Error Info: {this.state.info}</p>
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorHandler