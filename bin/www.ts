import http from 'http';
import app from '../app'; // Sesuaikan path dengan lokasi file app.ts
import debug from 'debug';
import { db } from '../src/db/index';

// Inisialisasi debug
const debugLog = debug('myapp:server');

// Normalize a port into a number, string, or false.
const normalizePort = (val: string): number | string | false => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

// Mendapatkan port dari environment atau default ke 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Event listener for HTTP server "error" event.
const onError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Event listener for HTTP server "listening" event.
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  debugLog('Listening on ' + bind);
};

// Membuat server HTTP

const server = http.createServer(app);

db.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err.message);
  });
