import path from 'node:path';

const exPath = '/Users/romain/Desktop/myFile.txt';

// parser le chemin
console.log(path.isAbsolute(exPath)); // true
console.log(path.extname(exPath)); // .txt
console.log(path.basename(exPath)); // myFile.txt
console.log(path.dirname(exPath)); // /Users/romain/Desktop
console.log(path.parse(exPath)); // objet avec infos détaillées

// créer un chemin
console.log(path.sep);
console.log(path.join('..', 'unDossier', 'myFile.txt'));
console.log(path.resolve('..', 'unDossier', 'myFile.txt')); // chemin absolu par rapport au CWD
console.log(path.resolve(__dirname, '..', 'unDossier', 'myFile.txt')); // chemin absolu par rapport au dossier du fichier

