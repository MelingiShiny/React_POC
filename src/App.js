import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Pages/Navbar';
import { Footer } from './Pages/Footer';
import { BooksList } from './Pages/BooksList';
import { MyBooks } from './Pages/MyBooks';
import { About } from './Pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books-list" element={<BooksList></BooksList>}></Route>
        <Route path="/my-list" element={<MyBooks></MyBooks>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
