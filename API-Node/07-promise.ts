import fs from "node:fs/promises";

// fs.readFile("package.json", (err, buffer) => {
//   if (err) {
//     console.log("erreur : " + err.message);
//   } else {
//     fs.writeFile("package.json.copy", buffer, (err) => {
//       if (err) {
//         console.log("erreur : " + err.message);
//       } else {
//         console.log("Copy done");
//       }
//     });
//   }
// });

// à ce stade : aucune amélioration
// fs.readFile("package.json")
//   .then((buffer) => {
//     fs.writeFile("package.json.copy", buffer)
//       .then(() => {
//         console.log("Copy done");
//       })
//       .catch((err) => {
//         console.log("erreur : " + err.message);
//       });
//   })
//   .catch((err) => {
//     console.log("erreur : " + err.message);
//   });

// grace aux promesses on peut ne pas imbriquer
// et recentraliser la gestion d'erreur
// fs.readFile("package.json")
//   .then((buffer) => {
//     return fs.writeFile("package.json.copy", buffer);
//   })
//   .then(() => {
//     console.log("Copy done");
//   })
//   .catch((err) => {
//     console.log("erreur : " + err.message);
//   });


// en plus court
fs.readFile("package.json")
  .then((buffer) => fs.writeFile("package.json.copy", buffer))
  .then(() => console.log("Copy done"))
  .catch((err) => console.log("erreur : " + err.message));

