import { Container, Row, Col, Button } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      year: "2024",
      name: "CloudSync Pro",
      tech: "Java / Spring / AWS",
      description: "Enterprise-grade file synchronization service with end-to-end encryption."
    },
    {
      year: "2023",
      name: "EcoTrack Mobile",
      tech: "React Native / Firebase",
      description: "Community-driven app for tracking local environmental impact data."
    },
    {
      year: "2023",
      name: "Titan DB Engine",
      tech: "Rust / PostgreSQL",
      description: "A custom indexing layer designed for ultra-fast geospatial queries."
    }
  ];

  return (
    <section className="py-20 bg-[#faf9f6]">
      <Container>
        {/* Simple Header */}
        <div className="mb-16 border-bottom border-dark pb-4 d-flex justify-content-between align-items-end">
          <h2 className="font-serif text-4xl mb-0">Projects</h2>
          <span className="font-mono text-[10px] text-[#928f85] uppercase tracking-widest">Selected Works</span>
        </div>

        {/* Project Rows */}
        {projectList.map((item, index) => (
          <div key={index} className="group border-bottom border-[#e5e1da] py-5">
            <Row className="align-items-center">
              {/* Year/Index */}
              <Col xs={2} md={1} className="font-mono text-[12px] text-[#928f85]">
                {item.year}
              </Col>

              {/* Name and Tech */}
              <Col xs={10} md={4}>
                <h3 className="text-xl font-medium text-[#1a1814] mb-1">{item.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-tighter text-[#4a7c59] mb-0">
                  {item.tech}
                </p>
              </Col>

              {/* Description */}
              <Col md={5} className="mt-3 mt-md-0">
                <p className="text-[#5e5b54] text-sm mb-0 leading-relaxed">
                  {item.description}
                </p>
              </Col>

              {/* Link */}
              <Col md={2} className="text-md-end mt-4 mt-md-0">
                <Button variant="link" className="text-dark p-0 text-decoration-none font-weight-bold text-[13px] hover-underline">
                  View Case Study →
                </Button>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;