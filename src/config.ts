const dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.JWT_SECRET_TOKEN)
export const config = {
  name: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || '',
  dialect: process.env.DB_DIALECT || '',
  jwtSecret: process.env.JWT_SECRET_TOKEN || '',
  jwtExpiration: process.env.JWT_EXPIRATION || '',
};
