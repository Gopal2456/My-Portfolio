import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/home';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/"></Link></li>
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
