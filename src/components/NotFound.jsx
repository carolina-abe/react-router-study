import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div>
      <h1>404 NotFound</h1>
      <p>Page not found. Please <Link to='/'>return to home</Link>.</p>
    </div>
  )
}
