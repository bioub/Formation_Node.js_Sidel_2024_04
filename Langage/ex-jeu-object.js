// Exercice 1 :
// Regrouper ces 4 fonctions dans un namespace objet Random
// Et appeler Random.getRandomInt(0, 100) pour générer le nombre
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {

    console.log('Vous avez saisi : ' + answer);
    jouer()
  });

}

jouer();

// Exercice 2
// Créer une "classe" Jeu (dit plutot une fonction constructeur) qui cache les 3 variables
// rl, valeur et tentatives dans des propriétés
// jouer() doit devenir une méthode de cette classe de tel sorte à ce que démarer la partie
// se fasse avec le code suivante :
// const game = new Jeu()
// game.jouer();

// Exercice 3
// Passer des options au constructeur de cette classe via un objet
// contenant des clés min et max (dont les valeurs par défaut seront 0 et 100)
// de sorte à ce que les codes suivants fonctionnent
// const game = new Jeu()
// game.jouer();
// const game = new Jeu({ min: 10, max : 20 })
// game.jouer();
// const game = new Jeu({ max : 20 })
// game.jouer();
// const game = new Jeu({ min : 50 })
// game.jouer();
