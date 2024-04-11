import fs from 'node:fs';
import { createGzip } from 'node:zlib';

const rs = fs.createReadStream('bigfile.html');
const ws = fs.createWriteStream('bigfile.html.zip');

// rs.on('open', () => {
//   console.log('fichier ouvert');
// })

// rs.on('data', (buffer) => {
//   console.log('buffer', buffer.length);
// })

// cat bigfile.html > bigfile.html.copy
rs.pipe(createGzip()).pipe(ws);
