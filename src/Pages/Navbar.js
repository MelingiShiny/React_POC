import { NavLink } from "react-router-dom";
import styles from '../Styles/Navbar.module.css'

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '900' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
            color: isActive ? '#000080' : 'black',
        }
    }
    return (
        <nav className={styles.primary_nav}>
            <h1>Reading Garden</h1>
            <div>
                <NavLink style={navLinkStyles} to="/">Home</NavLink>
                <NavLink style={navLinkStyles} to="/about">About</NavLink>
                <NavLink style={navLinkStyles} to="/my-list">My Books</NavLink>
            </div>
        </nav>
    )
}