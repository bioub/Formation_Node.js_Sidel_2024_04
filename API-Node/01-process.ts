import process from 'node:process'; // l'import de process est optionnel mais recommandé

// Pour récupérer les options en CLI (Command Line Interface)
// ex : npx ts-node@latest 01-process.ts --name Romain
// [
//   '/Users/romain/.npm/_npx/4cec6d38a2a713fa/node_modules/.bin/ts-node',
//   '/Users/romain/Desktop/Formation/API-Node/01-process.ts',
//   '--name',
//   'Romain'
// ]
// En général on utilise une bibliothèque :
// minimist, yargs, commander
console.log(process.argv);

import minimist from 'minimist';

console.log(minimist(process.argv.slice(2)));

console.log(process.cwd()); // la où se trouve le terminal
// on peut déplacer le cwd depuis le code Node avec :
process.chdir('..');
console.log(process.cwd()); // le dossier parent

// On accède aux variables d'environnement avec :
// Voir également la lib dotenv
console.log(process.env);

// La plateforme sur laquelle on se trouve (Macos, Windows, Linux)
console.log(process.platform); // darwin (macos)

// La version de Node
console.log(process.version); // v20.11.0

// L'architecture du processeur
console.log(process.arch); // arm64

// Stats
console.log(process.uptime()); // depuis quand node est démarré
console.log(process.memoryUsage()); // conso mémoire
console.log(process.cpuUsage()); // conso cpu

// Killer l'instance de Node
process.exit(0); // sans erreur
process.exit(1); // avec erreur
