import React, { Component } from 'react'
import Navbar from '../compoents/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom'

import Lifecycle from '../Pages/Lifecycle'
import StateAndProps from '../Pages/StateAndProps'
import RouterDemo from '../Pages/RouterDemo'
import FirstComponent from '../Pages/FirstComponent'
import ErrorHandler from '../Pages/ErrorHandler'
import FormDemo from '../Pages/FormDemo'
import Page404 from '../Pages/Page404'
import ThrowError from '../compoents/ThrowError'
import UnmountAll from './UnmountAll'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={FirstComponent} />
            <Route path="/state-and-props" component={StateAndProps} />
            <Route path="/router-demo" component={RouterDemo} />
            <Route exact path="/lifecycle">
              <Lifecycle paramAsProp="This value is passed from Route!" />
            </Route>
            <Route path="/lifecycle/:id" component={Lifecycle} />
            <Route path="/react-form" component={FormDemo} />
            <Route path="/error-handler">
              <ErrorHandler>
                <ThrowError />
              </ErrorHandler>
            </Route>
            <Route path="/delete" component={UnmountAll} />
            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
