const cors =require('cors');
const express = require('express');
const app = express();

const dotenv = require('dotenv'); // Load environment variables from .env file
dotenv.config();
const db= require('./config/mongoose');

//use the body
app.use(express.json());

const port = process.env.PORT || 5000;
app.use(cors());

app.use("/",require('./routes/index'));//defining routes path

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
