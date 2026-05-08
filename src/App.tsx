import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// 1. Protection Logic Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router basename="/portbulcio1/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 2. Public Login Route */}
        <Route path="/login" element={<Login />} />

        {/* 3. Protected Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
