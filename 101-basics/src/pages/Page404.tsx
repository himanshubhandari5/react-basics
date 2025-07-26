import { Component } from 'react';

class Page404 extends Component {
  render() {
    return (
      <>
        <h1>This is custom page for 404!</h1>
        <p>
          All the URLs, which are not handled by router will be catched here..
        </p>
      </>
    );
  }
}

export default Page404;
