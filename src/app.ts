import express from 'express';
import libroRouter from './router/libro';

const app = express();

app.use(express.json());
app.use(libroRouter);


export default app;

