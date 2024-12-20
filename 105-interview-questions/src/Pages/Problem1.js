import { useState } from "react"
import '../styles/style.css'

const Problem1 = () => {
  const [data, setData] = useState({
    "Afghanistan": "Kabul",
    "Germany": "Berlin",
    "Azerbaijan": "Baku",
    "Egypt": "Cairo",
    "Denmark": "Copenhagen"
  })
  // const [selectedCountry, setSelectedCountry] = useState([])
  // const [selectedCity, setSelectedCity] = useState([])
  const selectedCountry = []
  const selectedCity = []

  const handleClickCountry = (e, i) => {
    e.preventDefault()
    // setSelectedCountry(() => [...selectedCountry, e.target.id])
    selectedCountry.push(e.target.id)
    if (selectedCity.includes(data[e.target.id])) {
      const newData = { ...data }
      delete newData[e.target.id]
      setData(() => newData)
    } else {
      e.target.className = "btn-red"
    }
  }

  const handleClickCity = (e, i) => {
    e.preventDefault()
    console.log(`selected city is ${e.target.id} and selected countries are ${selectedCountry}`)
    // setSelectedCity(() => [...selectedCity, e.target.id])
    selectedCity.push(e.target.id)
    e.target.className = "btn-red"
    selectedCountry.map(c => {
      if (data[c] === e.target.id) {
        const newData = { ...data }
        delete newData[c]
        setData(() => newData)
      }
    })
  }


  return (
    <>
      <ul>
        <li>"Afghanistan": "Kabul"</li>
        <li>"Germany": "Berlin"</li>
        <li>"Azerbaijan": "Baku"</li>
        <li>"Egypt": "Cairo"</li>
        <li>"Denmark": "Copenhagen"</li>
      </ul>
      <p> Display all these key values in different buttons... click one by one if match is there then remove them from UI otherwise display in red</p>
      <hr />
      <h2>Pending</h2>
      <ol>
        <li>Buttons should be displayed randomly</li>
        <li>On re-render, red color is gone</li>
      </ol>
      <hr />

      {Object.entries(data).map((el, i) => {
        return <>
          <button onClick={(e) => handleClickCountry(e, i)} id={el[0]} key={Math.random()}>{el[0]}</button>
          <button onClick={(e) => handleClickCity(e, i)} id={el[1]} key={Math.random()}>{el[1]}</button>
        </>
      })}
    </>
  )
}

export default Problem1
