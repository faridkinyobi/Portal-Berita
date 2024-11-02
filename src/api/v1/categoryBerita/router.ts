import { authenticaUser, authorizeRole } from '../../../middlewares/auth';
import { create, delet, get, update } from './controller';
import express from 'express';

const router = express.Router();

router.post('/catagoryBerita',authenticaUser,authorizeRole('admin'), create);
router.put('/catagoryBerita/:id',authenticaUser,authorizeRole('admin'),  update);
router.delete('/catagoryBerita/:id',authenticaUser,authorizeRole('admin'), delet);
router.get('/catagoryBerita',authenticaUser,authorizeRole('admin'), get);
export default router;
