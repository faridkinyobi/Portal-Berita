import { getOne, searchBerita } from './controller';
import express from 'express';
import { authenticaUser, authorizeRole } from '../../../middlewares/auth';
const router = express.Router();

router.get('/detailBerita/:id',authenticaUser,authorizeRole('user'),getOne);
router.get('/searchBerita', authenticaUser,authorizeRole('user'),searchBerita);

export default router;
