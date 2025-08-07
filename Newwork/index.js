const mongoose = require('mongoose');
const dbconnect = require('./dbconnect');

const express = require('express');
const app = express();
app.use(express.json());

const route = require('./userroute');

dbconnect().then(() => console.log('Connected!')).catch((err) => console.log(err));

app.use("/", route);

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
