const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();

app.use(cors());
app.use(express.json());

// Replace 'YOUR_MONGODB_URI' with your actual connection string from MongoDB Atlas
const mongoURI = 'YOUR_MONGODB_URI'; 

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected... '))
  .catch(err => console.error('Connection Error:', err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save(); // This saves the data to MongoDB
    res.status(200).json({ success: true, message: 'Message saved to database!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error: could not save message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});