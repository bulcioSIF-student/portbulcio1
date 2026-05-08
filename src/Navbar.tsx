import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

    const customStyles = `
    .custom-nav {
      /* Matches your section background exactly */
      background-color: #faf9f6; 
      padding: 25px 0;
      transition: all 0.4s ease;
      /* Removes the default bottom border for a cleaner look */
      border-bottom: 1px solid rgba(26, 24, 20, 0.05); 
    }
    
    .nav-brand {
      font-family: 'serif';
      font-style: italic;
      font-size: 1.4rem;
      font-weight: 700;
      color: #1a1814 !important;
      letter-spacing: -1px;
    }

    .nav-custom-link {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      /* Subtler gray for inactive links */
      color: #928f85 !important; 
      margin: 0 18px;
      position: relative;
    }

    /* Soft Highlight on Hover */
    .nav-custom-link:hover, .nav-custom-link.active {
      color: #1a1814 !important;
    }

    /* The Contact Button - Darker and more defined */
    .contact-pill {
      border: 1px solid #1a1814 !important;
      color: #1a1814 !important;
      padding: 8px 22px !important;
      border-radius: 50px;
      transition: all 0.3s ease;
      margin-left: 20px;
    }

    .contact-pill:hover {
      background-color: #1a1814;
      color: #faf9f6 !important;
    }

    .navbar-toggler { border: none !important; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Navbar expand="lg" sticky="top" className="custom-nav">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            J.R.B<span style={{color: '#928f85'}}>.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" style={{ width: '20px' }}></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-custom-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={`nav-custom-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/projects" 
                className={`nav-custom-link ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`nav-custom-link ${location.pathname === '/contact' ? 'active' : ''}`}
                style={{ marginLeft: '30px' }}
              >
                <span className="border border-dark px-3 py-2 rounded-pill">Contact</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
