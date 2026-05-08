import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bulcioImg from '../assets/bulcio.jfif'; 

const Home = () => {
  const customStyles = `
    .home-section { 
      background-color: #faf9f6; 
      min-height: 90vh; 
      display: flex; 
      align-items: center; 
      padding: 80px 0;
    }
    .hero-name { 
      font-size: clamp(3rem, 8vw, 6rem); 
      font-weight: 300; 
      letter-spacing: -4px; 
      line-height: 0.9;
      color: #1a1814;
    }
    .hero-serif { 
      font-family: 'serif'; 
      font-style: italic; 
    }
    .hero-subtext {
      font-size: 1.25rem;
      color: #5e5b54;
      line-height: 1.8;
      max-width: 500px;
      font-weight: 300;
    }
    .image-frame {
      width: clamp(280px, 35vw, 450px);
      aspect-ratio: 4/5;
      background-color: #e5e1da;
      border-radius: 24px; /* Softer, modern corners */
      position: relative;
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.05); /* Softer, larger shadow */
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* Soft filter to match the page aesthetic */
      filter: grayscale(20%) contrast(1.05) sepia(10%); 
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .image-frame:hover .hero-img {
      transform: scale(1.05);
      filter: grayscale(0%) contrast(1) sepia(0%);
    }
    .image-frame::after {
      content: 'J.R.B';
      position: absolute;
      bottom: 25px;
      right: 25px;
      font-size: 10px;
      letter-spacing: 3px;
      color: white;
      z-index: 10;
      opacity: 0.8;
    }
    /* Subtle overlay to blend photo with background */
    .image-frame::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.2), transparent 40%);
      z-index: 2;
      pointer-events: none;
    }
    .btn-hero {
      border-radius: 50px;
      padding: 15px 35px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      transition: all 0.3s ease;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section className="home-section">
        <Container>
          <Row className="align-items-center g-5">
            
            <Col lg={7} className="order-2 order-lg-1">
              <div className="mb-2">
                <span className="text-uppercase tracking-widest small fw-bold text-muted" style={{letterSpacing: '4px'}}>
                  Future App Developer
                </span>
              </div>
              
              <h1 className="hero-name mb-4">
                John Ross<br />
                <span className="hero-serif">Bulcio</span>
              </h1>

              <p className="hero-subtext mb-5">
                Specializing in <span className="text-dark fw-normal">Java</span> and the creation of refined digital experiences. Building modern solutions from Baguio City.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/projects">
                  <Button variant="dark" className="btn-hero border-0 bg-[#1a1814]">
                    View Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline-dark" className="btn-hero">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </Col>

            <Col lg={5} className="order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
              <div className="image-frame">
                <img 
                  src={bulcioImg} 
                  alt="John Ross Bulcio" 
                  className="hero-img" 
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
