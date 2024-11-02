import { signIn, signUp, getAll } from './controller';
import express from 'express';
const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/user', getAll);

export default router;
