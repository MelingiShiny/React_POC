
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Pages/Navbar';
import { Footer } from './Pages/Footer';
import { BooksList } from './Pages/BooksList';
import { MyBooks } from './Pages/MyBooks';
import { About } from './Pages/About';
import Login from './Pages/Login';
import { useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    console.log('Logged in as:', user);
    // Set the logged-in user state upon successful login
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    // Clear the logged-in user state upon logout
    setLoggedInUser(null);
  };

  return (
    <>
      {loggedInUser && <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={loggedInUser ? <Home /> : <Navigate to="/" />}>
          <Route path="books-list" element={<BooksList></BooksList>}></Route>
        </Route>
        <Route path="/my-list" element={<MyBooks></MyBooks>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {loggedInUser && <Footer loggedInUser={loggedInUser} onLogout={handleLogout} />}
    </>
  )
}

export default App;
