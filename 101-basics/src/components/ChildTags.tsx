import { Component } from 'react';

interface ChildTagsProps {
  param: string;
  children?: React.ReactNode; // Optional children prop
}

class ChildTags extends Component<ChildTagsProps> {
  /* 
  Constructor is not required.

  constructor(props) {
    super(props)
  } */
  render() {
    return (
      <>
        <h1>ChildTags Component</h1>
        {this.props.children}
        <p>
          Param value is <strong>{this.props.param}</strong>
        </p>
      </>
    );
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
export default ChildTags;
