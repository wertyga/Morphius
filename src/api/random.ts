import { Router } from 'express';
import { getError } from '../utils/errors';

export const randomizerRoute = Router();

randomizerRoute.post('/', async (req, res) => {
  const {
    body: { data },
  } = req;
  if (data instanceof Array) {
    const randomIndex = Math.ceil(Math.random() * data.length) - 1;
    res.json({ data: data[randomIndex] });
    return;
  }
  if (typeof data === 'number') {
    res.json({ data: Math.ceil(Math.random() * data) });
    return;
  }
  const { error, status } = getError('wrongDataType', ['data']);
  res.status(status).json({ error });
});
