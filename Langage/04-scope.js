'use strict';

// globalVar = 'global'; // plus possible si mode Strict (soit 'use strict', soit module ESM)
globalThis.globalScope = 'global';
const moduleScope = 'module'; // module, global (Browser sans type="module"), closure (Node en CommonJs)

function externe() {
  const closure = 'closure';

  function interne() {
    const local = 'local';
    if (true) {
      const block = 'block'
      console.log(block);
      console.log(local);
      console.log(closure);
      console.log(moduleScope);
      console.log(globalScope);
      // console.log(globalVar);
    }
  }

  interne();
}

externe();

// pile d'appels
// ^
// |
// |
// |[interne]
// |[externe]
// +---------------> temps

