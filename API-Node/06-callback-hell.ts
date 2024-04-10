import fs from "node:fs";

// synchrone
try {
  const buffer = fs.readFileSync("package.json");
  fs.writeFileSync("package.json.copy", buffer);
  console.log("Copy done");
} catch (err) {
  console.log("erreur : " + err.message);
}

// asynchrone (callback hell)
fs.readFile("package.json", (err, buffer) => {
  if (err) {
    console.log("erreur : " + err.message);
  } else {
    fs.writeFile("package.json.copy", buffer, (err) => {
      if (err) {
        console.log("erreur : " + err.message);
      } else {
        console.log("Copy done");
      }
    });
  }
});
