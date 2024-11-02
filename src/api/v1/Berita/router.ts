import { create, delet, getData, update } from './controller';
import express from 'express';
import uploadMiddleware from '../../../middlewares/multer';
import { authenticaUser, authorizeRole } from '../../../middlewares/auth';

const router = express.Router();

router.post('/berita', uploadMiddleware.single('FileName'), authenticaUser, authorizeRole('admin'),create);
router.put('/berita/:id', uploadMiddleware.single('FileName'),authenticaUser, authorizeRole('admin'), update);
router.delete('/berita/:id',authenticaUser, authorizeRole('admin'), delet);
router.get('/berita', authenticaUser, authorizeRole('user','admin'), getData); // news list

export default router;
