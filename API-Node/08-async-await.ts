import fs from 'fs/promises';

// asynchrone basée sur des promesses avec async/await
// simple à écrire
// performant
async function copyPackageJson() {
  try {
    const buffer = await fs.readFile("package.json");
    await fs.writeFile("package.json.copy", buffer);
    console.log("Copy done");
  } catch (err) {
    // if (typeof err === 'object' && err !== null && 'message' in err) {
    //   console.log("erreur : " + err.message);
    // }
    if (err instanceof Error) {
      console.log("erreur : " + err.message);
    }
  }
}

copyPackageJson();

// une fonction async retourne une promesse
// donc on pourrait l'appeler avec await
// async function autreFonction() {
//   await copyPackageJson();
// }
