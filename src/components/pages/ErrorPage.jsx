
import { Link } from "react-router-dom"
import "../../style/ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="error-box" >
        <h1>!!!404 Error!!!</h1>
    <h2>We couldn't find the page you're looking for</h2>
<h5>Go Back to Home</h5>

<Link to="/"  className="link-home">Home</Link>


    </div>
  )
}

export default ErrorPage