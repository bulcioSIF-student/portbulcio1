const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
const mongoURI = 'mongodb://Portfolio:Yoru123@ac-vjoxzdo-shard-00-00.cumjqzd.mongodb.net:27017,ac-vjoxzdo-shard-00-01.cumjqzd.mongodb.net:27017,ac-vjoxzdo-shard-00-02.cumjqzd.mongodb.net:27017/?ssl=true&replicaSet=atlas-nxcqzc-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('─── MongoDB Connected (User: Portfolio)'))
  .catch(err => {
    console.error('─── Connection Error:', err.message);
  });

// Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

/**
 * ROUTES
 */

// 1. CREATE: Save a new message from the contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message saved to database!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error: could not save message.' });
  }
});

// 2. READ: Fetch all messages for the Dashboard
app.get('/api/messages', async (req, res) => {
  try {
    // Fetches all messages and sorts them by newest first
    const messages = await Contact.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching messages.' });
  }
});

// 3. DELETE: Remove a message from the Dashboard
app.delete('/api/messages/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Message deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`─── Server started on http://localhost:${PORT}`);
});
