import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// --- DOT_ENV ---
import dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
// -------

import { apiRoute } from './api';

const app = express();
app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.json({ healthcheck: true });
});
app.use(bodyParser.json());
app.use('/api', apiRoute);

app.listen(process.env.PORT, () =>
  console.log(`-- Server ran at :${process.env.PORT}`)
);
