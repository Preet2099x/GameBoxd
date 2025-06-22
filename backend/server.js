import express from 'express';
import dotenv from 'dotenv';
import loginRoutes from './routes/loginRoutes.js';
import signupRoutes from './routes/signupRoutes.js';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('🎮 GameBoxd backend is running!');
});

// API routes
app.use('/api', loginRoutes);
app.use('/api', signupRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at PORT: ${PORT}`);
});
