import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      year: "2025",
      name: "Lab Exam",
      tech: "React / TypeScript / Vite",
      description: "A React-based lab examination project built with TypeScript and Vite.",
      link: "https://bulciosif-student.github.io/Lab_exam/"
    },
    {
      year: "2025",
      name: "Event Dashboard",
      tech: "React / TypeScript / Vite",
      description: "University Club Member Dashboard displaying member info and activity lists.",
      link: "https://bulciosif-student.github.io/MG_LAB6_Bulcio/"
    },
    {
      year: "2025",
      name: "Feedback App",
      tech: "React / TypeScript / Vite",
      description: "A feedback collection web application built as a final lab project.",
      link: "https://bulciosif-student.github.io/Final-Lab-1/"
    }
  ];

  const customStyles = `
    .projects-section { background-color: #faf9f6; padding: 120px 0; }
    .project-row { 
      border-bottom: 1px solid #e5e1da; 
      padding: 40px 0; 
      transition: all 0.4s ease;
      cursor: pointer;
    }
    .project-row:hover { background-color: #f3f2ee; }
    .project-name { 
      font-size: 2.5rem; 
      font-weight: 300; 
      letter-spacing: -1px; 
      transition: transform 0.3s ease;
    }
    .project-row:hover .project-name { transform: translateX(10px); color: #000; }
    .tech-tag { 
      font-size: 10px; 
      text-transform: uppercase; 
      letter-spacing: 2px; 
      color: #4a7c59; 
      font-weight: 700;
    }
    .view-link {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      color: #1a1814;
      text-decoration: none;
      position: relative;
    }
    .view-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: #1a1814;
      transition: width 0.3s ease;
    }
    .project-row:hover .view-link::after { width: 100%; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section className="projects-section">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <span className="text-uppercase tracking-widest text-muted small fw-bold" style={{ letterSpacing: '3px' }}>
                Archive
              </span>
              <h2 className="display-4 fw-light m-0">Selected <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>Works</span></h2>
            </div>
            <div className="text-muted small d-none d-md-block">01 — 03</div>
          </div>

          {projectList.map((item, index) => (
            <div key={index} className="project-row">
              <Row className="align-items-center">
                <Col md={1} className="text-muted font-monospace small d-none d-md-block">
                  ({item.year})
                </Col>
                <Col md={5} xs={12}>
                  <div className="tech-tag mb-2">{item.tech}</div>
                  <h3 className="project-name mb-0">{item.name}</h3>
                </Col>
                <Col md={4} xs={12} className="my-3 my-md-0">
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {item.description}
                  </p>
                </Col>
                <Col md={2} xs={12} className="text-md-end">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-link">
                    Explore Case →
                  </a>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Projects;