
const express = require("express");

const app = express();

const mongodb = require("./sortcut");

const multer  = require('multer')
const path = require('path');

// Create a connection to MongoDB :-----------
app.use(express.json());

// Create Port :---------------------------------------------------------------
app.listen(5070, () => {
  console.log("Server is running on port 5070");
});


// multer code :-
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'upload'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

// Show Data:-------------
app.get("/", async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const data = await collection.find().toArray();
  res.send(data);
});


 // Insert data:-----
app.post("/", upload.single('img'),async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const obj = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    img: req.file.originalname
  };  
  console.log(obj);
  
  const data = await collection.insertOne(obj);
  res.send(data);
});


