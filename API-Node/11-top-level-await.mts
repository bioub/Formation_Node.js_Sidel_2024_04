import fs from 'fs/promises';

try {
  const buffer = await fs.readFile("package.json");
  await fs.writeFile("package.json.copy", buffer);
  console.log("Copy done");
} catch (err) {
  if (err instanceof Error) {
    console.log("erreur : " + err.message);
  }
}
