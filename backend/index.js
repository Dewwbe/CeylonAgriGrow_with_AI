import express from 'express';
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';

// Creating an instance of the Express application
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("welcome")
})


// Connecting to the MongoDB database
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });