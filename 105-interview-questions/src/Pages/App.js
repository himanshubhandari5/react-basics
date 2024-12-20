import React from "react"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Problem1 from "./Problem1"
import Problem2 from "./Problem2"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problem-1" element={<Problem1 />} />
        <Route path="/problem-2" element={<Problem2 />} />
        {/* To catch all the Routes that are not resolved */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  )
}

export default App