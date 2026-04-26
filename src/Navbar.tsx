import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom border-[#e5e1da] py-3 sticky-top">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="font-serif italic text-2xl text-[#1a1814]"
        >
          B.
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-4 mt-3 mt-lg-0">
            <Nav.Link as={Link} to="/" className="font-mono text-[11px] uppercase tracking-widest text-[#928f85] hover:text-black">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="font-mono text-[11px] uppercase tracking-widest text-[#928f85] hover:text-black">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="font-mono text-[11px] uppercase tracking-widest text-[#928f85] hover:text-black">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="font-mono text-[11px] uppercase tracking-widest text-[#1a1814] font-bold">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;