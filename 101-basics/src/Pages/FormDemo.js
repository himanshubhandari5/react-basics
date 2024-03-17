import React, { Component } from "react"

class FormDemo extends Component {
  constructor() {
    super()
    this.state = { name: "", age: 0, city: "", bio: "", vehicleType: "", car: false, bike: true, cycle: true, VehicleILike: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.bioRef = React.createRef()
    this.inputRef = React.createRef()
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ ...this.state, bio: this.bioRef.current.value })
    this.inputRef.current.focus()
  }

  handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const field = event.target.name
    console.log(field + " : " + value)
    // this.setState({ ...this.state, [field]: value })
    this.setState({ [field]: value })
  }

  clearForm() {
    this.setState({ name: "", age: 0, city: "", bio: "", vehicleType: "", car: false, bike: true, cycle: true, VehicleILike: '' })
  }

  render() {
    return (
      <>
        <h1>Form Handling in React</h1>
        <ul>
          <li>In react forms, we have to bind event handler with bind(this), like this</li>
          <ul>
            <li>this.handleChange = this.handleChange.bind(this)</li>
          </ul>
          <li>Other way is to use anonymous function while referencing it with the form control, like this:</li>
          <ul>
            <li>(event) ={">"} this.handleChange(event)</li>
            <li>Passing event in above statement is optional</li>
          </ul>
        </ul>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h2>Controlled Form Elements</h2>
          <p>By controlled inputs we mean, these are controlled by react State</p>
          <input type="text" autoFocus value={this.state.name} placeholder="First Name" name="name" onChange={this.handleChange} ref={this.inputRef} />
          <input type="text" value={this.state.age} placeholder="Age" name="age" onChange={this.handleChange} />
          <select name="city" onChange={this.handleChange}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          <input type="checkbox" id="car" name="car" defaultChecked={this.state.car} onChange={this.handleChange} onClick={this.handleChange} />
          <label htmlFor="car">Car</label>
          <input type="checkbox" id="bike" name="bike" defaultChecked={this.state.bike} onChange={this.handleChange} />
          <label htmlFor="bike">Bike</label>
          <input type="checkbox" id="cycle" name="cycle" defaultChecked={this.state.cycle} onChange={this.handleChange} />
          <label htmlFor="cycle">Cycle</label>
          <input type="radio" id="car" name="VehicleILike" value="Car" onChange={this.handleChange} />
          <label htmlFor="car">Car</label>
          <input type="radio" id="bike" name="VehicleILike" value="Bike" onChange={this.handleChange} />
          <label htmlFor="bike">Bike</label>
          <input type="radio" id="cycle" name="VehicleILike" value="Cycle" onChange={this.handleChange} />
          <label htmlFor="cycle">Cycle</label>

          <hr />
          <h2>Uncontrolled Inputs</h2>
          <p>These are uncontrolled Form Elements, meaning that these are handled by ref</p>
          <p>These values can be fetched after Form Submit!</p>
          <textarea placeholder="Bio" ref={this.bioRef} />
          <button type="submit">Submit</button>
        </form>
        <h2>Fetching Form Values:</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Age: {this.state.age}</li>
          <li>City: {this.state.city}</li>
          <li>Bio: {this.state.bio} </li>
          <li>
            I own:
            <ul>
              <li>Car: {this.state.car && "Car"}</li>
              <li>Bike: {this.state.bike && "Bike"}</li>
              <li>Cycle: {this.state.cycle && "Cycle"}</li>
            </ul>
          </li>
        </ul>
        <li>
          But I like: {this.state.VehicleILike}
        </li>
        <button type="reset" onClick={() => this.clearForm()}>Clear</button>
      </>
    )
  }
}

export default FormDemo

