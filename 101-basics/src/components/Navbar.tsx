import { Component } from 'react';
import { Link } from 'react-router';

interface NavbarState {
  id: number;
}

class Navbar extends Component<object, NavbarState> {
  constructor(props: object) {
    super(props);
    const id = Math.random();
    this.state = { id };
  }

  render() {
    return (
      <nav>
        <Link to="/">Home</Link>-|-
        <Link to="/state-and-props">State & Props</Link>-|-
        <Link to="/lifecycle">Lifecycle</Link>-|-
        <Link to={`/lifecycle/${this.state.id}`}>
          Lifecycle of {this.state.id}
        </Link>
        -|-
        <Link to="/error-handler">ThrowError</Link>-|-
        <Link to="/react-form">React Form</Link>-|-
        <Link to={`/${Math.random()}`}>404</Link>-|-
        <Link to={`/delete`}>DELETE</Link>
      </nav>
    );
  }
}

export default Navbar;
