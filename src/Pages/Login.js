import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginStyles from '../Styles/Login.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Reset errors
        setUsernameError('');
        setPasswordError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

        // Check if username is empty
        if (username.length === 0) {
            setUsernameError('Please enter your email');
        }
        else if (!emailRegex.test(username)) {
            setUsernameError('Invalid email format');
        }

        // Check if password is empty
        if (password.length === 0) {
            setPasswordError('Please enter your password');
            return;
        }
        else if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least one capital letter, one small letter, one special character, one number, and be at least 8 characters long');
            return;
        }

        // Check if username and password match dummy data
        const dummyUsers = [
            { username: 'user1@example.com', password: 'Password1!' },
            { username: 'user2@example.com', password: 'Password2!' },
            { username: 'user3@example.com', password: 'Password3!' },
        ];
        const user = dummyUsers.find((user) => user.username === username && user.password === password);
        if (user) {
            // Call onLogin prop with the user data
            onLogin(true);
            toast.success('User Successfully logged in.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            // Redirect to home page
            navigate('/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className={loginStyles.mainlogin}>
            <div className={loginStyles.loginCard}>
                <h2 style={{ textAlign: 'center', marginBottom: '0px' }}>Login</h2>
                <div style={{ padding: '10px' }}>
                    <label className={loginStyles.label}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <div style={{ color: 'red', fontSize: '9px' }}>{usernameError}</div>}
                </div>
                <div style={{ padding: '10px' }}>
                    <label className={loginStyles.label}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div style={{ color: 'red', fontSize: '9px' }}>{passwordError}</div>}
                </div>
                <button onClick={handleLogin} className={loginStyles.loginButton}>Login</button>
            </div>
        </div>
    );
};

export default Login;
