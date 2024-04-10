// importer readline et getRandomInt
// exporter Jeu

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    // const { min = 0, max = 100 } = options;

    this.entierAlea = getRandomInt(min, max);
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
