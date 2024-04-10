import os from 'node:os';

// qu'on a déjà dans process
console.log(os.platform());
console.log(os.arch());

// stats
console.log(os.uptime());
console.log(os.availableParallelism()); // le nombre de coeurs
console.log(os.cpus()); // infos sur le CPU
console.log(os.freemem()); // mémoire dispo

// les dossiers d'intérêts du système
console.log(os.tmpdir());
console.log(os.homedir());

