import useForm from "../Hooks/useForm"

const useFormHook = () => {
  const defaultFormData = { name: "dummy name", gender: "female", apply: "no", "India": false, "USA": true, UK: true }
  const [formData, handleChange, handleSubmitForm, handleFormReset] = useForm(defaultFormData)

  return (
    <>
      <h1>Form Hook</h1>
      <form action="save" onSubmit={handleSubmitForm}>
        Name: <input type="name" id="name" name="name" value={formData.name} onChange={handleChange} />
        <br />
        Gender: <select name="gender" id="gender" defaultValue={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        Apply? :
        <label htmlFor="apply-yes">Yes</label>
        <input type="radio" name="apply" id="apply-yes" value="yes" defaultChecked={formData.apply === 'yes'} onChange={handleChange} />
        <label htmlFor="apply-no">No</label>
        <input type="radio" name="apply" id="apply-no" value="no" defaultChecked={formData.apply === 'no'} onChange={handleChange} />
        <br />
        Which Locations do you prefer?
        <input type="checkbox" id="india" name="India" defaultChecked={formData.India} onChange={handleChange} />
        <label htmlFor="India">India</label>
        <input type="checkbox" id="USA" name="USA" defaultChecked={formData.USA} onChange={handleChange} />
        <label htmlFor="USA">USA</label>
        <input type="checkbox" id="UK" name="UK" defaultChecked={formData.UK} onChange={handleChange} />
        <label htmlFor="UK">UK</label>
        <br />
        <button type="submit">Save</button>
        <button type="reset" onSubmit={handleFormReset}>Reset Form</button>
      </form>
      <hr />
      <h1>Form values</h1>
      {Object.keys(formData).map(key => (
        <p key={key}>{key}: {typeof formData[key] === 'boolean' ? formData[key] ? 'true' : 'false' : formData[key]}</p>
      ))}
    </>
  )
}

export default useFormHook
