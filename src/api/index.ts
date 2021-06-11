import { Router } from 'express';
import { randomizerRoute } from './random';

export const apiRoute = Router();

apiRoute.use('/random', randomizerRoute);
