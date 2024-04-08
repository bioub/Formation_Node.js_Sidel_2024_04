const names = ['Romain', 'Vincent', 'Toto'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// for (const n of names) {
//   console.log(hello(n));
// }

// Exemple de callback synchrone
names.forEach((n) => {
  console.log(hello(n));
});

// pile d'appels
// ^
// |
// |
// |
// | for {  [=>]    } x3
// |[forEach                         ]
// +--------------------------------------------------------> temps

// Exemple de callback asynchrone
setTimeout(() => {
  console.log('1s');
}, 1000);

// pile d'appels
// ^
// |
// |
// |
// |
// |[setTimeout]                                [=>]
// +--------------------------------------------1s------------> temps
