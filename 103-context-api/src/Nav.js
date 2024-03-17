import React, { useContext } from "react"
import { MovieContext } from "./context/MovieContext"

const Nav = ({ name, price }) => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <nav>
      <p>List of Movies: {movies.length}</p>
    </nav>
  )
}

export default Nav
