// operateur REST (...)
// REST s'utilise à la déclaration de la variable (ici nbs)
// conversion de syntaxe
// d'une liste de valeurs (ici 3, 4)
// en un tableau (ici nbs === [3, 4])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));

// operateur SPREAD (...)
// SPREAD s'utilise à la lecture de la variable (ici names)
// conversion de syntaxe
// d'un tableau (ici names === ['Romain', 'Vincent'])
// en une liste de valeurs (ici 'Romain', 'Vincent')

function hello(speaker, listener) {
  return `Hello ${listener} my name is ${speaker}`;
}

console.log(hello('Romain', 'Vincent')); // Hello Vincent my name is Romain

const names = ['Romain', 'Vincent'];
console.log(hello(names[0], names[1])); // Hello Vincent my name is Romain
// avec SPREAD
console.log(hello(...names));

// SPREAD permet aussi de cloner rapidement
const clone = [...names];
const newNames = [...names, 'toto'];

// const romain = newNames[0];
// const vincent = newNames[1];
// const toto = newNames[2];

// Avec la destructuration :
// const [romain, vincent, toto] = newNames;

// Cumul avec default
// const [romain, vincent, toto, titi = 'Titi'] = newNames;

// Cumul avec REST
//    ['Romain', 'Vincent', 'Toto'   ]
const [romain  , vincent    , ...otherNames] = newNames;

// REST / SPREAD peuvent s'utiliser sur des objets depuis ES2018
const coords = {
  x: 1,
  y: 2,
  z: 3,
};

const cloneCoords = {...coords};

// On peut aussi utiliser la destructuration
//    { x: 1      }
const { x: myVarX } = coords;

// const { x: x } = coords;
// Avec shorthand property
// const { x } = coords;

// Avec default
// const { x = 10 } = coords;

// Avec REST
const { z, ...coords2d } = coords;
console.log(coords2d); // { x: 1, y: 2 }
