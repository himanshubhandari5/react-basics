import { Component } from 'react';

interface ChildProps {
  propsVal: string;
  updateKey3: (value: string) => void;
}
interface ChildState {
  'child-key-1': string;
}

class Child extends Component<ChildProps, ChildState> {
  constructor(props: ChildProps) {
    super(props);
    this.state = { 'child-key-1': 'child-value-1' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.updateKey3(event.target.value);
  }

  render() {
    return (
      <>
        <h1>Child Component</h1>
        <ul>
          <li>This is Child Component.</li>
          <li>
            State in Child is: <strong>{this.state['child-key-1']}</strong>
          </li>
          <li>
            Value passed as Props: <strong>{this.props.propsVal}</strong>
          </li>
          <li>Props can be accessed by this.props</li>
          <input
            type="text"
            value={this.props.propsVal}
            onChange={this.handleChange}
          />
        </ul>
      </>
    );
  }
}

export default Child;
