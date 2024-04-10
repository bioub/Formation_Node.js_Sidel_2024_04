import fs from 'node:fs';

// opérations sur des fichiers, dossiers
// a quelques exceptions
// chaque fonction de fs, existe sous 3 formes
// - synchrone
// - asynchrone basée sur des callbacks
// - asynchrone basée sur des promesses

// synchrone
// simple à écrire (l'exécution du code se fait dans l'ordre des lignes)
// pas performant (thread est bloqué le temps de l'opération)
const buffer = fs.readFileSync('package.json');
console.log(buffer.toString('utf-8'));

// pour récupérer directement les caractères (et pas le buffer)
// on passe l'encodage en option
const str = fs.readFileSync('package.json', { encoding: 'utf-8' });
console.log(str);

// pile d'appels
// ^
// |
// |
// |[readFileSync xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx][log]
// +------------------------------------------------------> temps


// asynchrone basée sur des callbacks
// même paramètres que la version synchrone avec un callback à la fin
// plus compliqué à écrire (l'exécution du code ne se fait pas dans l'ordre des lignes)
// plus performant car le thread reste disponible pendant l'opération
fs.readFile('package.json', { encoding: 'utf-8' }, (err, str) => {
  console.log(str);
});

// pile d'appels
// ^
// |
// |                                               [log]
// |[readFile] ⟳                                   [=> ]
// +------------------------------------------------------> temps


