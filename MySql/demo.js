const connection = require("./index");
const express = require("express");
const app = express();

app.use(express.json());

// Insert data into the database
app.post("/", (req, res) => {
  const arr = req.body;

  connection.query("INSERT INTO demo SET ?", arr, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

// View data from the database
app.get("/", (req, res) => {
  const arr = req.body;

  connection.query("SELECT * FROM demo", arr, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});


// Delete data from the database
app.delete("/", (req, res) => {
    var a =3
  connection.query("DELETE FROM demo WHERE id =?" ,a, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});


// Update data in the database
app.patch("/", (req, res) => {
  var a = ["kushu", "kushu@gmail.com", "12345", "2"];

  connection.query("UPDATE demo SET name=?, email=? , password=? WHERE id=?",a,(error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
});

// Start the server
app.listen(1020, () => {
  console.log("Server is running on port 1020");
});
