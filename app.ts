import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import sweggerUi from 'swagger-ui-express'
import express, { Request, Response } from 'express';

import { db } from './src/db';

import userRouter  from './src/api/v1/user/router';
import categoryBeritaRouter  from './src/api/v1/categoryBerita/router';
import BeritaRouter  from './src/api/v1/Berita/router';
import DetailBeritaRouter  from './src/api/v1/detailBerita/router';

import {swaggerDocs } from "./src/swagger"

const app = express();

try {
  db.authenticate();
  db.sync().then(() => console.log('data base ready'));
} catch (error) {
  // console.log(error)
}

// setup
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', sweggerUi.serve, sweggerUi.setup(swaggerDocs));
// Base route
const v1 = '/app/v1'
app.use(`${v1}/cms/`, userRouter);
app.use(`${v1}/cms/`, categoryBeritaRouter);
app.use(`${v1}/cms/`, BeritaRouter);
app.use(`${v1}/cms/`, DetailBeritaRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

export default app;
