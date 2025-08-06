const mongodb = require("./sortcut");

async function getdata() {
  var db = await mongodb();
  const collection = db.collection("mydemos");

  // Show Data :---
  const data = await collection.find().toArray();
  console.log(data);

  // Insert data:-----
  // const data = await collection.insertOne({ city: "Vadodara" });
  // const data1 = await collection.insertOne({ state: "gujarat" });
  // console.log(data);
  // console.log(data1);


// Delete Data:-----
// const deletedata = await collection.deleteOne({ state: "gujarat" });
// console.log(deletedata);


// Update Data:-----
//   const updatedata = await collection.updateOne(
//     { name: "ishika" },
//     { $set: { name: "kushu" } }
//   );
//   console.log(updatedata);

}
getdata();
mongodb();
