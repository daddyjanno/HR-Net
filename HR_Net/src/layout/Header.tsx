import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.webp'
import { useSelector } from 'react-redux'
import { getCurrentPage } from '../app/navSlice'

function Header() {
    const currentPage = useSelector(getCurrentPage)

    return (
        <header>
            <nav className="header">
                <Link className="header-logo" to="/">
                    <img
                        src={Logo}
                        alt="Wealth Health logo"
                        className="header-logo-image"
                    />
                </Link>
                <h1>HR Net</h1>
                {currentPage === 'HR Net' ? (
                    <NavLink to="/employees">Employees</NavLink>
                ) : (
                    <NavLink to="/">Home</NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header
