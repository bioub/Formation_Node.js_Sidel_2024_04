import express from "express";

const app = express();

// enregistre le plugin qui parse le JSON en body de la requete :
app.use(express.json());

app.get("/", (req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-type", "text/plain");
  // res.write("Hello");
  // res.end();
  res.json({ msg: 'Hello' });
});

app.get("/hello/:name", (req, res) => {
  res.json({ msg: 'Hello ' + req.params.name})
});

app.post('/register', (req, res) => {
  console.log(req.body);

})

// const server = http.createServer((req, res) => {
//   req.pipe(process.stdout);
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// });

app.listen(4000, () => {
  console.log("server started on port 4000");
});
