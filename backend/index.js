const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(process.env.API_PORT, () => {
  console.log(process.env);
  console.log(`Listening on ${process.env.API_PORT}, fucking finally.`);
})