import { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to fetch messages");
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/login');
    }
    fetchMessages();
  }, [navigate]);

  // NEW: DELETE HANDLER
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Refresh the list after deleting
          fetchMessages();
        }
      } catch (err) {
        console.error("Failed to delete message");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-end mb-5">
        <div>
          <span className="text-muted uppercase small tracking-widest fw-bold" style={{ fontSize: '10px' }}>Admin Panel</span>
          <h1 className="display-5 fw-light m-0">Inquiries</h1>
        </div>
        <Button variant="outline-danger" onClick={handleLogout} className="rounded-pill px-4 btn-sm">Logout</Button>
      </div>

      <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
        <Table hover responsive className="mb-0 align-middle">
          <thead className="bg-light">
            <tr className="small uppercase tracking-wider text-muted" style={{ fontSize: '11px' }}>
              <th className="px-4 py-3">Date</th>
              <th className="py-3">From</th>
              <th className="py-3">Email</th>
              <th className="py-3">Message</th>
              <th className="py-3 text-center">Action</th> {/* NEW COLUMN */}
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? messages.map((msg: any) => (
              <tr key={msg._id} className="border-bottom border-light">
                <td className="px-4 text-muted small">{new Date(msg.date).toLocaleDateString()}</td>
                <td className="fw-bold text-dark">{msg.name}</td>
                <td className="small">{msg.email}</td>
                <td className="text-muted small" style={{ maxWidth: '300px' }}>{msg.message}</td>
                <td className="text-center">
                  {/* DELETE BUTTON */}
                  <Button 
                    variant="link" 
                    className="text-danger p-0 text-decoration-none small"
                    onClick={() => handleDelete(msg._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan={5} className="text-center py-5 text-muted">No messages received yet.</td></tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Dashboard;
