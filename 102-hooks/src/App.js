import React from 'react'
import { useEffect, useState } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
// import useFetch from './hooks/useFetch'
import useForm from './hooks/useForm'
import useWindowSize from './hooks/useWindowSize'

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" })
  // const [trivia9, setTrivia9] = useState('')
  // const [trivia11, setTrivia11] = useState('')

  // const number = Math.floor(Math.random() * 10)
  const number9 = 9
  // const number11 = 11
  const windowSize = useWindowSize()

  const { axiosData, fetchError, isLoading } = useAxiosFetch(`http://numbersapi.com/${number9}/trivia`)
  // const { fetchData, loading, error } = useFetch(`http://numbersapi.com/${number11}/trivia`)

  // useEffect(() => {

  //   setTrivia9(axiosData)
  // setTrivia11(fetchData)
  // }, [axiosData])


  return (
    <>
      <h1>The useAxiosFetch Hook!</h1>
      <ul>
        <li>axiosData: {axiosData}</li>
        <li>fetchError: {JSON.stringify(fetchError)}</li>
        <li>isLoading: {isLoading ? 'true' : 'false'}</li>
      </ul>
      <h1>The useWindowSize Hook!</h1>
      <p>{JSON.stringify(windowSize)}</p>
      <hr />
      <h1>The useForm Hook!</h1>
      <h2>Form</h2>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="likeit"
        value={values.likeit}
        onChange={handleChange}
      />
      <p>Form Values: {JSON.stringify(values)}</p>
      <hr />
      <h1>The useFetch Hook!</h1>
      <h3>Issue: useFetch isnot working properly</h3>
      {/*
      {loading === true ? <p>Loading..</p>
        :
        <p>Trivia of {number11} is {trivia11}</p>}
      Error: {error}
      <hr /> */}
    </>
  )
}

export default App