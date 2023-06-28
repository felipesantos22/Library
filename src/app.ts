import express from 'express';
import libroRouter from './router/libro';
import authorRouter from './router/author';

const app = express();

app.use(express.json());
app.use(libroRouter);
app.use(authorRouter);


export default app;

