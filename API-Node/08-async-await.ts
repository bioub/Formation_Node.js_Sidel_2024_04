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
    console.log("erreur : " + err.message);
  }
}

copyPackageJson();
