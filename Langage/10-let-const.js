// const prenom = 'Romain';
// prenom = 'Toto'; // TypeError: Assignment to constant variable.

let prenom = 'Romain';
prenom = 'Toto'; // OK

const coords = {
  x: 1,
  y: 2,
};

// seule la référence est constante, l'objet lui peut
// être modifié :
coords.x = 10;

// Pour rendre l'objet constant (JAMAIS UTILISE) :
// Object.freeze(coords);

const names = ['Romain'];
names.push('Vincent');
// names = []; // TypeError: Assignment to constant variable.

