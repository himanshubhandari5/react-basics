import { Component } from 'react';

interface ThrowErrorState {
  count: number;
}

class ThrowError extends Component<object, ThrowErrorState> {
  cnt = 0;
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({ ...this.state, count: this.state.count + 1 });
    this.cnt = this.cnt + 1;
    if (this.state.count > 3) {
      console.log('Error thrown');
      throw new Error('Count greater than 3, Error thrown!');
    }
  }

  render() {
    return (
      <>
        <h1>Error Throw Example(not working)</h1>
        <button onClick={this.increaseCount}>
          Increase {this.state.count} | {this.cnt}
        </button>
      </>
    );
  }
}

export default ThrowError;
