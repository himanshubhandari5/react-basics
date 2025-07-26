import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import FirstComponent from './pages/FirstComponent';
import StateAndProps from './pages/StateAndProps';
import RouterDemo from './pages/RouterDemo';
import Lifecycle from './pages/Lifecycle';
import FormDemo from './pages/FormDemo';
import ErrorHandler from './pages/ErrorHandler';
import ThrowError from './components/ThrowError';
import UnmountAll from './pages/UnmountAll';
import Page404 from './pages/Page404';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/state-and-props" element={<StateAndProps />} />
          <Route
            path="/lifecycle"
            element={
              <Lifecycle paramAsProp="This value is passed from Route!" />
            }
          />
          <Route path="/lifecycle/:id" element={<Lifecycle />} />
          <Route
            path="/error-handler"
            element={
              <ErrorHandler>
                <ThrowError />
              </ErrorHandler>
            }
          />
          <Route path="/react-form" element={<FormDemo />} />
          <Route path="/delete" element={<UnmountAll />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
