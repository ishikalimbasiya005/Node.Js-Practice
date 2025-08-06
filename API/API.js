const express = require("express");

const app = express();

const mongodb = require("../Connect_MongoDb/sortcut");

// Create a connection to MongoDB :-----------
app.use(express.json());

// Create Port :---------------------------------------------------------------
app.listen(5070, () => {  
  console.log("Server is running on port 5070");
});


 // Show Data :---
app.get("/", async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const data = await collection.find().toArray();
  res.send(data);
});

// Insert data:-----
app.post("/", async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const data = await collection.insertOne(req.body)
  res.send(data);
});

// update data:-----
app.patch("/", async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const data = await collection.updateOne({name:"kushali"}, {$set: {name:"kushali patel"}});
  res.send(data);
});

// delet data:-----
app.delete("/", async (req, res) => {
  var db = await mongodb();
  const collection = db.collection("mydemos");
  const data = await collection.deleteOne(req.body);
  res.send(data);
})

// Serch Data :-------------------------------------------------------------------
app.get("/search/:key", async (req, res) => {
  var d = await mongodb();
  const collection = d.collection("mydemos");
  const data = await collection.find(req.body)
  res.send(data)
});

