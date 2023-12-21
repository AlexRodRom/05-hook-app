import { NavLink } from "react-router-dom"

export const NavItem = ( { navItem } ) => {

    const { url, name } = navItem;
    
  return (
    <>
        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
            to={ url }>
            { name }
        </NavLink>
    </>
  )
}
