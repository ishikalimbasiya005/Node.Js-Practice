const express = require('express');
const {
  insertdata,
  getdata,
  deletedata,
  updatedata,
  logindata,
  verify
} = require('./userlogic');

const route = express.Router();

route.post("/", insertdata);
route.get("/", getdata);
route.delete("/:id", deletedata);
route.patch("/:id", updatedata);
route.post("/login", logindata);
route.post("/verify", verify);

module.exports = route;
