import React from "react"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import UseStateHook from "./UseStateHook"
import UseEffectHook from "./UseEffectHook"
import UseCallbackHook from "./UseCallbackHook"
import UseMemoHook from "./UseMemoHook"
import UseRefHook from "./UseRefHook"
import UseReducerHook from "./UseReducerHook"
import UseLayoutEffectHook from "./UseLayoutEffectHook"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/use-state" element={<UseStateHook />} />
        <Route path="/use-effect" element={<UseEffectHook />} />
        <Route path="/use-callback" element={<UseCallbackHook />} />
        <Route path="/use-memo" element={<UseMemoHook />} />
        <Route path="/use-ref" element={<UseRefHook />} />
        <Route path="/use-reducer" element={<UseReducerHook />} />
        <Route path="/use-layout-effect" element={<UseLayoutEffectHook />} />
      </Routes>
    </Router>
  )
}

export default App