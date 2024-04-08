setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appels
// ^
// |
// |
// |
// |
// |[st][st][st][st][lg] ⟳      [=>] ⟳          [=>]⟳   [=>]⟳   [=>]X
// +0ms-------1ms------2ms------3ms--------------500-----501s----1000-------------> temps
//                  E

// Côté C++ (event loop)
// do {
//    executePileD'Appel();
//    siNavigateurIlDessineLesChangements()
// } while (ilYADesTachesEnAttente)

// file d'attente (0ms) : taskB

// Conference sur la boucle d'event :
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
