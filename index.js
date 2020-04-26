const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).send('Hello');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});