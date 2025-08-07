const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student')
  .then(() => console.log('Connected!'));

const express = require('express');
const app = express();

app.use(express.json());

const Schema = mongoose.Schema;

app.listen(5040,() => {
    console.log('Server is running on port 5040');
});


const schema = new Schema({
  name:({
    type: String,
    required: true
  }),

  email:({
    type: String,
    unique: true
  }),

  password:({
    type: String,
  })
})

const User = mongoose.model('demos', schema);

// Insert data :-------------------------
app.post("/", async (req,res) => {
  try {
    const data = await User.create(req.body);
    res.status(201).json({
      status: "success",
       data: data
    })
  } catch (error) {
    res.status(400).json({
      status:"false",
      error: error.message
    })
  }
})


// Get data :-------------------------------
app.get("/",async (req, res) => {
   try {
    const data = await User.find()
    res.status(201).json({
      status: "success",
       data: data
    })
  } catch (error) {
    res.status(400).json({
      status:"false",
      error: error.message
    })
  }
})
 

// Update data:------------------------------
app.patch("/:id", async (req, res) => {
   try {await User.findByIdAndUpdate(req.params.id , req.body);
    res.status(201).json({
      status: "success"
    })
  } catch (error) {
    res.status(400).json({
      status:"false",
      error: error.message
    })
  }
})


// Delete data:------------------------------
app.delete("/:id", async (req, res) => {
   try {await User.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success"
    })
  } catch (error) {
    res.status(400).json({
      status:"false",
      error: error.message
    })
  }
})
