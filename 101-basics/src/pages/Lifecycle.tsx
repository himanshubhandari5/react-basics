import { Component } from 'react';

interface Props {
  paramAsProp?: string;
}

interface State {
  lifecycle1: string;
  lifecycle2: string;
}

class Lifecycle extends Component<Props, State> {
  constructorCount = 1;
  renderCount = 1;
  derivedStateFromProps = 1;

  constructor(props: Props) {
    super(props);
    this.state = {
      lifecycle1: 'lifecycle-1-value',
      lifecycle2: 'lifecycle-2-value',
    };

    console.log('Constructor(): ' + this.constructorCount);
    this.constructorCount = this.constructorCount + 1;
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log('getDerivedStateFromProps(): ', props);
    if (state.lifecycle1 === 'lifecycle-1-value') {
      state.lifecycle1 =
        'lifecycle-1-value-updated by getDerivedStateFromProps';
    }
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    console.log('render(): ' + this.renderCount++);
    // this.renderCount = this.renderCount + 1
    return (
      <>
        <h1>Lifecycle</h1>
        <p>
          Current State: <strong>{this.state.lifecycle1}</strong> and{' '}
          <strong>{this.state.lifecycle2}</strong>
        </p>
        <p>
          "this.props.match.params.id" is not supported in react-router-dom v7,
          and we have to use Functional component.
        </p>
        {/* <p>Dynamically fetched ID is: {this.props.match.params.id}</p> */}
        {/* <p>
          Param added during Component:{' '}
          <strong>{this.props.paramAsProp}</strong>
        </p> */}
      </>
    );
  }
}

// export default withRouter(Lifecycle)
export default Lifecycle;
