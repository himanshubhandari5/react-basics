import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class UnmountAll extends Component {
  componentDidMount() {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 3000)
  }

  render() {
    return <h1> I am about to delete everything.... i.e. UNMOUNTING ALL THE COMPONENTS!!</h1>
  }
}

export default UnmountAll