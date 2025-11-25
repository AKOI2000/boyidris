import { Link, NavLink } from "react-router-dom"

function Button({children, direction}) {
    return (
        <>
           <Link to={direction} className="btn-primary">
              {children}
           </Link>
        </>
    )
}

export default Button
