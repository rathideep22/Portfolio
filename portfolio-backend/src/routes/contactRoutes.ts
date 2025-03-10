import express from 'express';
import { Request, Response } from 'express';
import Contact from '../models/Contact';

const router = express.Router();

// Define handler function
async function handleContact(req: Request, res: Response) {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }
    
    // Save to database if MongoDB is configured
    if (process.env.MONGODB_URI) {
      const contact = new Contact({
        name,
        email,
        message,
      });
      
      await contact.save();
      return res.status(201).json({ success: true, message: 'Message sent successfully' });
    } else {
      // If no DB is configured, just log the message
      console.log('New contact message:', { name, email, message });
      return res.status(200).json({ success: true, message: 'Message received (Note: No database configured)' });
    }
  } catch (error) {
    console.error('Error in contact submission:', error);
    return res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
}

// POST - Create a new contact message
router.post('/', (req: Request, res: Response) => {
  handleContact(req, res).catch(err => {
    console.error('Unhandled error in contact route:', err);
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  });
});

export default router; 