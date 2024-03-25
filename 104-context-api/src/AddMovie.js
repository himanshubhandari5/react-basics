import React, { useContext, useState } from "react"
import { MovieContext } from "./context/MovieContext"

const AddMovie = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies((previousMovies) => [
      ...previousMovies,
      { name: name, price: price, id: Math.random },
    ])
  }

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={updateName}
      />

      <input
        type="text"
        name="price"
        id="price"
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  )
}

export default AddMovie
