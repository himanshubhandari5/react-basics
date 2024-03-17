import React, { Component } from 'react'
// import { withRouter } from 'react-router'

class Lifecycle extends Component {
  constructorCount = 1;
  renderCount = 1;
  derivedStateFromProps = 1;

  constructor({ props }) {
    super(props)
    this.state = { "lifecycle1": "lifecycle-1-value", "lifecycle2": "lifecycle-2-value" }

    console.log("Constructor(): " + this.constructorCount)
    this.constructorCount = this.constructorCount + 1
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps()")
    if (state.lifecycle1 === 'lifecycle-1-value') {
      state.lifecycle1 = "lifecycle-1-value-updated by getDerivedStateFromProps"
    }
    return state
  }

  componentDidMount() {
    console.log("componentDidMount()")
  }

  render() {
    console.log("render(): " + this.renderCount++)
    // this.renderCount = this.renderCount + 1
    return (
      <>
        <h1>Lifecycle</h1>
        <p>Current State: <strong>{this.state.lifecycle1}</strong> and <strong>{this.state.lifecycle2}</strong></p>
        <p>"this.props.match.params.id" is not supported in react-router-dom v6</p>
        {/* <p>Dynamically fetched ID is: {this.props.match.params.id}</p> */}
        <p>Param added during Component: <strong>{this.props.paramAsProp}</strong></p>
      </>
    )
  }
}

// export default withRouter(Lifecycle)
export default Lifecycle