import { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // DEFAULT CREDENTIALS
  const DEFAULT_USER = "admin";
  const DEFAULT_PASS = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credentials.username === DEFAULT_USER && credentials.password === DEFAULT_PASS) { 
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError(true);
      // Clear error message after 3 seconds
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card className="p-5 border-0 shadow-sm" style={{ width: '100%', maxWidth: '400px', borderRadius: '24px', backgroundColor: '#fff' }}>
        <div className="text-center mb-4">
          <h2 className="fw-light mb-1" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>Admin Login</h2>
          <p className="text-muted small uppercase tracking-widest" style={{ fontSize: '10px' }}>Restricted Access</p>
        </div>

        {error && (
          <Alert variant="danger" className="py-2 text-center border-0 small rounded-pill">
            Invalid credentials
          </Alert>
        )}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="small text-muted ms-2">Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="admin" 
              className="py-2 px-4 rounded-pill border-light bg-light shadow-none"
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small text-muted ms-2">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="py-2 px-4 rounded-pill border-light bg-light shadow-none"
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 py-3 rounded-pill fw-bold border-0 bg-[#1a1814]">
            Access Dashboard
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
