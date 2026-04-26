import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    // The basename ensures all links work relative to the subfolder
    <Router>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
    </Router>
  );
}

export default App;