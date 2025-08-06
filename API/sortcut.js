const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function mongodb() {
  await client.connect();
  return await client.db("first");
}
module.exports = mongodb