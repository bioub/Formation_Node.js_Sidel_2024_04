// Les promesses ne fonctionnent pas pour les cas
// où le callback sera appelé plusieurs fois :
// function interval(delay: number) {
//   return new Promise<void>((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delay);
//   });
// }

// interval(1000).then(() => {
//   console.log("1s");
// });

// 3 solutions
// - laisser le code classique avec callbacks
// - utiliser une bibliothèque comme RxJS (le choix d'Angular)
// - async iterator (ES2018)
import readline from 'node:readline';
import fs from 'node:fs';
import { fromEvent, map } from 'rxjs';

function solution1() {
  const rl = readline.createInterface({
    input: fs.createReadStream('package.json'),
  });

  let cpt = 0;

  rl.on('line', (line) => {
    console.log(++cpt + ' | ' + line);
  });
}

solution1();

function solution2() {
  const rl = readline.createInterface({
    input: fs.createReadStream('package.json'),
  });

  let cpt = 0;

  const obs = fromEvent(rl, 'line').pipe(
    map((line) => ++cpt + ' | ' + line)
  );

  obs.subscribe((lineWithNb) => {
    console.log(lineWithNb);
  });
}
solution2();

async function solution3() {
  const rl = readline.createInterface({
    input: fs.createReadStream('package.json'),
  });

  let cpt = 0;

  for await (const line of rl) {
    console.log(++cpt + ' | ' + line);
  }
}
solution3();
