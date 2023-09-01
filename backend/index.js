import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import bookRoutes from './routes/booksRoutes.js';

const app = express();

// Middleware
app.use(express.json());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on port:  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
