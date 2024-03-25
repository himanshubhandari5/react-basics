import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/use-state">UseState </Link>
      |
      <Link to="/use-effect"> UseEffect</Link>
      |
      <Link to="/use-callback"> Usecallback</Link>
      |
      <Link to="/use-memo"> Usememo</Link>
      |
      <Link to="/use-ref"> Useref</Link>
      |
      <Link to="/use-reducer"> UseReducer</Link>
      |
      <Link to="/use-layout-effect"> UseReducer</Link>
    </nav>
  )
}

export default Navbar