import useAxios from "../Hooks/useAxios"

const UseFetchHook = () => {
  const { data, fetchError, isLoading } = useAxios('https://api.restful-api.dev/objects')
  return (
    <>
      <h1>Products:</h1>
      <ul>
        {isLoading ?
          "loading..." :
          data.map(d => (
            <li key={d.id}>{d.name}</li>
          ))
        }
      </ul >
      <hr /><hr />
      <p>Error: {JSON.stringify(fetchError)}</p>
    </>
  )
}

export default UseFetchHook
