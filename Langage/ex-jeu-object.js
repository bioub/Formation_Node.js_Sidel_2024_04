// Exercice 1 :
// Regrouper ces 4 fonctions dans un namespace objet Random
// Et appeler Random.getRandomInt(0, 100) pour générer le nombre
// SI MODULE === MAUVAISE PRATIQUE (il vaut garder les 4 fonctions dans ce cas)
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
}


const readline = require('node:readline');


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


class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    // const { min = 0, max = 100 } = options;

    this.entierAlea = Random.getRandomInt(min, max);
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });

  }
}

const game = new Jeu({ max: 10 });
game.jouer();
