import { Component } from 'react';
import { createRoot } from 'react-dom/client';

class UnmountAll extends Component {
  componentDidMount() {
    setTimeout(() => {
      const rootElement = document.getElementById('root');
      if (rootElement) {
        // Create a root and then unmount it
        const root = createRoot(rootElement);
        root.unmount();
      }
    }, 3000);
  }

  render() {
    return (
      <h1>
        {' '}
        I am about to delete everything.... i.e. UNMOUNTING ALL THE COMPONENTS!!
      </h1>
    );
  }
}

export default UnmountAll;
