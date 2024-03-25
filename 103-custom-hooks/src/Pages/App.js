import React from "react"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import UseFetchHook from "./UseAxiosHook"
import UseFormHook from "./useFormHook"
import UseWindowsizeHook from "./useWindowsizeHook"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/fetch-hook" element={<UseFetchHook />} />
          <Route path="/form-hook" element={<UseFormHook />} />
          <Route path="/window-size-hook" element={<UseWindowsizeHook />} />
        </Routes>
      </Router>
    )
  }
}

export default App