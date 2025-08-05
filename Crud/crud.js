const fs = require('fs');

// Create a file :--------
fs.writeFile('Crud.txt', 'This is crud File.',(err) => {
    console.log(err);
})

// Read a file :--------
fs.readFile('crud.txt', (err , d) => {
    console.log(err);

    console.log(d);
    console.log(d.toString());  
})


// Update a file :--------
fs.appendFile('crud.txt', 'this is Append Files Added.',(err) => {
    console.log(err);
})

// Rename a file :--------
fs.rename('crud.txt', 'crud-output.txt',(err) => {
    console.log(err);
})

// Delete a file :--------
// fs.unlink('crud.txt', (err) => {
//     console.log(err);
// })