import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home&nbsp;</Link> |&nbsp;
        <Link to="/problem-1">Problem-1 </Link>
        <Link to="/problem-2">Problem-2 </Link>
      </nav>
    </>
  )
}

export default Navbar