// En JS de nombreux objets sont globaux :
// C'est un moyen de limiter les variables globales
// On appelle ça des namespaces objets

// Définis par le langage :
console.log("Math", typeof Math);
console.log("JSON", typeof JSON);
console.log("Intl", typeof Intl);

// Définis par une plateforme
console.log("document", typeof document);
console.log("process", typeof process);
console.log("console", typeof console);

// Pour créer un namespace objet
// On utilise la syntaxe Object Literal

const MyMath = {
  sum(a, b) {
    return a + b;
  },
};

console.log("MyMath.sum(1, 2)", 3);

// Il faut voir les objets JS comme des systèmes clé/valeurs
// On peut ajouter, modifier, supprimer des clé/valeurs
// MAUVAISE PRATIQUE d'étendre des objets qu'on a pas créé
// (SAUF dans les tests où ça permet de passer des faux)
Math.sum = (a, b) => a + b;
console.log("Math.sum(1, 2)", Math.sum(1, 2));

// POSSIBLE de le faire dans ses objets
// PAS IDEAL pour la compilation Just In Time
MyMath.sub = (a, b) => a - b;

// Le fait de pouvoir ajouter dynamiquement des clés/valeurs : extensibilité
// Modifier
Math.sum = (a, b) => Number(a) + Number(b);

// Supprimer
delete Math.sum;
console.log("Math.sum", Math.sum);

// Pour créer objets
// On utilise object literal pour les namespaces objets (qui ne sont créé qu'une seule fois)
// Ou pour les objets qui ne contiennent pas de méthodes (qui seraient dupliquée)
const coordsA = {
  x: 1,
  y: 2,
  // myMethod() {}
};

const coordsB = {
  x: 4,
  y: 5,
  // myMethod() {}
};

// Pour des objets avec des méthodes on utilise des constructeurs
// function Contact(name) {
//   this.name = name;
//   // déclarer la fonction ici, revient à créer autant de fonction hello que d'objet Contact :
//   // this.hello = function() {
//   //   return 'Hello my name is ' + this.name;
//   // }
// }

// Contact.prototype.hello = function () {
//   return "Hello my name is " + this.name;
// };

class Contact {
  constructor(name) {
    // if (name.length > 2) {
      this.name = name; // dynamique
    // }
  }
  hello() {
    return "Hello my name is " + this.name;
  }
}

const romain = new Contact("Romain");
console.log("romain", typeof romain); // object
console.log("romain.name", romain.name);
console.log("romain.hello()", romain.hello());

const vincent = new Contact("Vincent");
// delete vincent.name;
console.log("vincent.name", vincent.name);

// Contact.prototype.hello = function () {
//   return "Au revoir " + this.name;
// };

console.log("vincent.hello()", vincent.hello());

console.log(romain.hello === vincent.hello); // true : 1 seule fonction, false : plusieurs fonction



const coords = {
  x: 1,
  y: 2,
};

// coords.z = 3;
Object.defineProperty(coords, 'z', {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: false,
})
console.log(coords.z); // 3

console.log(JSON.stringify(coords));
