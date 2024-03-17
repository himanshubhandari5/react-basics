import React, { Component } from 'react'
import Child from '../components/Child'
import ChildTags from '../components/ChildTags'

class StateAndProps extends Component {

  constructor() {
    super()
    this.state = { "key1": "value-1", "key2": "", "key3": "passing-value-from-parent-to-child" }
    this.onKey2Change = this.onKey2Change.bind(this)
    this.updateKey3 = this.updateKey3.bind(this)
  }

  onKey1Change(evt) {
    // This way it won't allow to update the value of key1
    this.setState({ "key": evt.target.value })
  }

  onKey2Change(event) {
    this.setState({ ...this.state, "key2": event.target.value })
  }

  onKey3Change(event) {
    this.setState({ ...this.state, "key3": event.target.value })
  }

  /* updateKey3 = (value) => {
    this.setState({ ...this.state, "key3": value })
  } */
  updateKey3(value) {
    this.setState({ ...this.state, "key3": value })
  }

  render() {
    return (
      <>
        <h1>Parent Component</h1>
        <ul>
          <li>Class based component</li>
          <li>It can have a constructor, which needs to call super()</li>
          <li>Constructor can also set state</li>
          <li>State value can only be updated by setState() method, which will update the complete state</li>
          <li><strong>If we wants to keep old state data, we have to first deconstruct the state and then update state with new values</strong></li>
          <li>The way to get state value:
            <ul>
              <li>
                <strong>Key1:{this.state.key1}</strong>:
                <input type="text" value={this.state.key1} id="key1" onChange={(event) => this.onKey1Change(event)}></input>
              </li>
              <li>
                <strong>Key2:{this.state.key2}</strong>:
                <input type="text" value={this.state.key2} id="key2" onChange={this.onKey2Change} />
              </li>
              <li>
                <strong>Key3:{this.state.key3}</strong>:
                <input type="text" value={this.state.key3} id="key3" onChange={(event) => this.onKey3Change(event)}></input>
              </li>
            </ul>
          </li>
          <li>JSX required to have one parent div to hold all the subsequent childs or tags, using , that unnecessary div element can be avoided</li>
        </ul>
        <hr />

        <Child propsVal={this.state.key3} updateKey3={this.updateKey3} />
        <hr />
        <ChildTags param="param-value">
          <ul>
            <li>Children can also pass along with props</li>
            <li>This is children tags, which are passed along Child component</li>
          </ul>
        </ChildTags>
      </>
    )
  }
}

export default StateAndProps
