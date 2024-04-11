// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// function timeout(delay: number) {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// import { promisify } from 'util';
// const timeout = promisify(setTimeout);
// timeout(1000).then(() => {
//   console.log('1s');
// });

// import { setTimeout } from "timers/promises";

// setTimeout(1000).then(() => {
//   console.log("1s");
// });

// function fetchTodos() {
//   return new Promise((resolve) => {
//     resolve([{id: 1, title: 'ABC', completed: true}])
//   });
// }

// Promise.resolve et Promise.reject permet de retourne une promesse
// avec un valeur tout de suite (sans attendre un appel async)
// Ex : dans un test on veut remplacer un API async par un API sync
// avec des fausses données
// function fetchTodos() {
//   return Promise.resolve([{id: 1, title: 'ABC', completed: true}]);
// }

// Les 4 méthodes suivantes permettent de combiner plusieurs promesses
// en une :
// - Promise.all
// - Promise.race
// - Promise.allSettled
// - Promise.any


// Promise.all
// Combine plusieurs promesses en une qui sera résolue quand
// toutes les promesses en entrée auront été résolue
// Si les promesses en entrée résolvaient des valeurs
// La promesses combinée nous la résoud sous forme de tableau
// Si une des promesses en entrée est rejeté, l'ensemble est rejeté
// Cas d'utilisation :
// Paralléliser des opérations et obtenir les résultats lorsqu'elles sont
// toutes terminée, si l'une échoue l'ensemble échoue
// Par exemple lire plusieurs fichiers en même temps

function fakeFetch<T>(val: T) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, Math.random() * 1000);
  });
}


// fakeFetch('ABC').then((val) => {
//   console.log(val);
// });
// fakeFetch('DEF').then((val) => {
//   console.log(val);
// });

Promise.all([
  fakeFetch('ABC'),
  fakeFetch('DEF')
]).then((values) => {
  // values est un tableau
  // dans l'ordre du tableau passé à .all
  console.log(values);
});

// async function main() {
//   const val1 = await fakeFetch('ABC');
//   console.log(val1);

//   const val2 = await fakeFetch('DEF');
//   console.log(val2);
// }

// main();


async function main() {
  const [val1, val2] = await Promise.all([
    fakeFetch('ABC'),
    fakeFetch('DEF'),
  ]);
  console.log(val1);
  console.log(val2);
}

main();

// Promise.race
// résolu lorsque la première est résolue
// si la première est en erreur l'ensemble est erreur
// Cas d'utilisation: faire un opération avec un délai maximum
// ex :
// Promise.race(
//   fs.readFile('myFile.txt'),
//   setTimeout(1000),
// );

// Promise.any
// résolu lorsque la première est résolue
// si la première est en erreur on attend la suivante
// on a une erreur si toutes les promesses sont en erreur
// Cas d'utilisation: intéroger des serveurs mirroirs
// ex:
// Promise.race(
//   fetch('https://mirroir1.monserveur.com/todos'),
//   fetch('https://mirroir2.monserveur.com/todos'),
// );

// Promise.allSettle
// Comme all, mais on récupère tous les résultats en erreur ou en succès
// Cas d'utilisation: un dashboard qui affiche
// plusieurs panneau avec des données qu'on a requeter
// au chargement du dashboard
// Avec Promise.all si une requete échoue rien ne s'affiche
// Avec Promise.allSettle on fera un affichage partiel
