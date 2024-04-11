import http from 'node:http';
import process from 'node:process';

const server = http.createServer((req, res) => {
  req.pipe(process.stdout);
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end();
});

// server.on('request', (req, res) => {
//   req.pipe(process.stdout);
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// });

server.on('error', (err) => {
  console.log(err.message);
});

// server.on('listening', () => {
//   console.log('server started on port 4000');
// });

server.listen(4000, () => {
  console.log('server started on port 4000');
});
