const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const mymodel = mongoose.model('register', schema);
module.exports = mymodel;
