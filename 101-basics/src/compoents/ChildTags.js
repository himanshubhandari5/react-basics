import React, { Component } from "react"

class ChildTags extends Component {
  /* 
  Constructor is not required.

  constructor(props) {
    super(props)
  } */

  render() {
    return (
      <>
        {this.props.children}
        <p>Param value is <strong>{this.props.param}</strong></p>
      </>
    )
  }
}



/* const ChildTags = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}
 */
export default ChildTags