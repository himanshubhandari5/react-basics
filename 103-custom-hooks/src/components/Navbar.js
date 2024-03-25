import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/fetch-hook">UseFetch </Link>
      |
      <Link to="/form-hook">UseForm </Link>
      |
      <Link to="/window-size-hook">Window Resize Hook </Link>
    </nav>
  )
}

export default Navbar