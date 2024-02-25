import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => { 
    return(
        <div>
            <nav>
            <NavLink to={'/'}>Series</NavLink>
            <NavLink to={'/filmes'}>Filmes</NavLink>
            </nav>
        </div>
    )
}

export default NavBar