import React from "react"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StateAndProps from "./StateAndProps"
import FirstComponent from "./FirstComponent"
import RouterDemo from "./RouterDemo"
import Lifecycle from "./Lifecycle"
import ThrowError from "../components/ThrowError"
import UnmountAll from "./UnmountAll"
import Page404 from "./Page404"
import FormDemo from "./FormDemo"
import ErrorHandler from "./ErrorHandler"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/state-and-props" element={<StateAndProps />} />
          <Route path="/router-demo" element={<RouterDemo />} />
          <Route exact path="/lifecycle" element={<Lifecycle paramAsProp="This value is passed from Route!" />} />
          <Route path="/lifecycle/:id" element={<Lifecycle />} />
          <Route path="/react-form" element={<FormDemo />} />
          <Route path="/error-handler" element={<ErrorHandler>
            <ThrowError />
          </ErrorHandler>} />
          <Route path="/delete" element={<UnmountAll />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    )
  }
}

export default App