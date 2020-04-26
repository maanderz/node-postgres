const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const questions_model = require("./questions_model");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req,res) => {
  res.status(200).send('Initiated')
})

app.get('/:id', (req, res) => {
  console.log('id?',req.params.id)
  // questions_model.getQuestion(id)
  // .then(response => {
  //   res.status(200).send(response);
  // })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});