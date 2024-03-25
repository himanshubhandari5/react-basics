import { useState } from "react"

/* {Step-2: Custom Hook} */
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
  ]
}
