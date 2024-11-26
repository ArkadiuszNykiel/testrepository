import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/countries">Countries</Link>
        </nav>
    )
}
export default Navbar