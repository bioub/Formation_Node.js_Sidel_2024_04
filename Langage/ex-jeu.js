// importe un API de Node.js
const readline = require('readline');

// configure readline pour lire des lignes
// sur le clavier (process.stdin quelque chose qui précède la touche ENTREE)
// et écrire dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {

    console.log('Vous avez saisi : ' + answer);
    // Quand le nombre a été trouvé on arrête :
    // rl.close();

    // Pour rejouer
    jouer()
  });

}

jouer()
// pile d'appels
// ^
// |
// |
// |                                                [question]
// |[question]                                      [jouer   ]
// |[jouer   ] ⟳                                    [=>      ] ⟳
// +------------------------------------------------ENTREE----------------> temps
