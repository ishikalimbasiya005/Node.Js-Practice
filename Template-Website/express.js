const express = require('express');

const app = express();


const path = require('path');

// Html project path :------
const htmlpath = path.join(__dirname , "/HTML-P");
app.use(express.static(htmlpath))


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "TEMPLATE"));


// Create a Port Number:---
app.listen(5000, (err) => {
    console.log("Server is running on port 5000");
})

// Create a simple route :-----------------------
// app.get('/', (req , res) => {
//     res.send("This is a simple route!");
// })
// Create another  route  :--------------------
// app.get("/contact" , (req , res) => {
//     res.send('This is a contact page!')
// })


// Middleware to check if age is provided :------
const pageopen = (req,res,next) => {
    if(!req.query.age || !req.query.name){
         res.send("Please provide your age and name");
    }
    else{
        next();
    }
}
app.use(pageopen)


// HTML-P Website Path :-------------------
app.get('/', (req , res) => {
    console.log(req.query);
    
    res.render("index-p");
})



