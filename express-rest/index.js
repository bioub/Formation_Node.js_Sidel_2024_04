require('dotenv').config()
const http = require('http');

const app  = require('./app');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});
