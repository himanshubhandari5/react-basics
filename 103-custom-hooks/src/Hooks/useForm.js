import { useState } from "react"

const useForm = (defaultFormData) => {
  const [formData, setFormData] = useState(defaultFormData)
  const handleChange = (event) => {
    const field = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    console.log(`form value changed: ${field} : ${value}`)
    setFormData(formData => ({ ...formData, [field]: value }))
  }
  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log(`formData is: `, formData)
  }
  const handleFormReset = () => {
    setFormData(() => defaultFormData)
  }
  return [formData, handleChange, handleSubmitForm, handleFormReset]
}

export default useForm
