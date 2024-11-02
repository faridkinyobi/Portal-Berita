const { Sequelize } = require('sequelize');
import { config } from '../config';
export const db = new Sequelize(config.name, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});
