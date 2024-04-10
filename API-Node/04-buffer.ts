// Buffer est une classe globale de Node.js
// comme process il est aujourd'hui recommandé de l'importer
// représente un tableau d'octet (ex: quand lit un fichier)

import { Buffer } from 'node:buffer'

// chaine de caractères ABC :
const buffer1 = Buffer.from([65, 66, 67]);
console.log(buffer1.toString('utf-8')); // utf-8
console.log(buffer1.toString('latin1')); // windows
console.log(buffer1.toString('ascii')); // ascii
console.log(buffer1.toString('hex')); // hexadécimal

const buffer2 = Buffer.from([68, 69, 70]);

const bufferConcat = Buffer.concat([buffer1, buffer2]);
console.log(bufferConcat.toString('utf-8')); // ABCDEF
