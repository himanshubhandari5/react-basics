import { useState } from 'react'
import '../styles/style.css'

function Problem2() {
  const [rowColumns, setRowColumns] = useState({ rows: 0, columns: 0 })
  let prevTd
  const handleClickTD = (e, i) => {
    e.preventDefault()
    if (prevTd != undefined) {
      prevTd.className = ''
    }
    e.target.className = 'active'
    prevTd = e.target
  }
  let count = 1
  let tableArr = []
  for (let i = 1; i <= rowColumns.rows; i++) {
    const tdArr = []
    for (let j = 1; j <= rowColumns.columns; j++) {
      tdArr.push(
        <td key={count} onClick={(e) => handleClickTD(e, count)}>
          {count++}
        </td>
      )
    }
    tableArr.push(tdArr)
  }
  return (
    <>
      Rows:{' '}
      <input
        onChange={(e) =>
          setRowColumns({ ...rowColumns, rows: e.target.value })
        }
      />
      &nbsp;Columns:
      <input
        onChange={(e) =>
          setRowColumns({ ...rowColumns, columns: e.target.value })
        }
      />
      {rowColumns.rows > 0 && rowColumns.columns > 0 ? (
        <table>
          {tableArr.map((td) => (
            <tr>{td}</tr>
          ))}
        </table>
      ) : (
        <p>No rows or columns are provided.</p>
      )}
    </>
  )
}

export default Problem2
