const cors =require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv'); // Load environment variables from .env file

dotenv.config();
const port = process.env.PORT || 5000;
// Enable CORS
app.use(cors());

app.get('/api/user', (req, res) => {
  const userData = { id: 'user123', name: 'John Doe', email: 'john@example.com' };
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
