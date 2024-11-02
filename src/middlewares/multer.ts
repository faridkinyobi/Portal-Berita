import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload/img');
  },
  filename: function (req, fill, cb) {
    cb(null, Math.floor(Math.random() * 8888888) + '-' + fill.originalname);
  },
});
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: Function,
): void => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    //reject file
    cb(
      {
        message: 'Unsupported file format',
      },
      false,
    );
  }
};

const uploadMiddleware = multer({
  storage: storage,
  limits: {
    fileSize: 3000000,
  },
  fileFilter: fileFilter,
});

export default uploadMiddleware;
