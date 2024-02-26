import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top container bg-white">
                <NavLink to={'/series'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Netnix</span>
                    </NavLink>

                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink to={'/series'} className="nav-link">Séries</NavLink></li>
                    <li className="nav-item"><NavLink to={'/filmes'} className="nav-link">Filmes</NavLink></li>
                    <li className="nav-item"><NavLink to={'/admin/series'} className="nav-link">ADM Séries</NavLink></li>
                    <li className="nav-item"><NavLink to={'/admin/filmes'} className="nav-link">ADM Filmes</NavLink></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar