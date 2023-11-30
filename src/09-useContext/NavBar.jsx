import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"

export const NavBar = () => {

    const NavItems = [
        { 
            url: "/",
            name: "Home"
        },
        { 
            url: "/about",
            name: "About"
        },
        { 
            url: "/login",
            name: "Login"
        },
    ];

  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <Link className="navbar-brand" to="/"> use Context </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {/* <li className="nav-item"> */}
                    {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
                {/* </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">login</Link>
                </li> */}

                {/* // usamos NAVLink con isActive

                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
                    to="/">
                    Home
                </NavLink>
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
                    to="/about">
                    About
                </NavLink>
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
                    to="/login">
                    Login
                </NavLink> */}

                {  
                    NavItems.map(( navItem ) => (
                        <NavItem key={ navItem.name } navItem={ navItem } />
                    ))
                }
            </ul>
        </div>
        </nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login </Link> */}
    </>
  )
}
