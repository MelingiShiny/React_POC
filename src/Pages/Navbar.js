import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import navbarStyles from '../Styles/Navbar.module.css';

export const Navbar = ({ loggedInUser, onLogout }) => {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '900' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
    color: isActive ? '#990011' : '#000',
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    toast.error('User Successfully logged out.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // Redirect to login page after logout
    navigate('/');
    onLogout();
  };

  return (loggedInUser ? (
    <nav className={navbarStyles.primary_nav}>
      <h1>Reading Garden</h1>
      <div>
        <NavLink style={navLinkStyles} to="/home">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/my-list">
          My Books
        </NavLink>
        {/* Logout button with onClick event */}
        <button onClick={handleLogout} className={navbarStyles.button}>
          Logout
        </button>
        <ToastContainer />
      </div>
    </nav>
  ) : null
  )
}

