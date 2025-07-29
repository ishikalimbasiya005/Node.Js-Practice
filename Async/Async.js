
// Synchronous code execution example :-----------------
console.log("Start");
console.log("process");
console.log("end");

// Asynchronous code execution example :-----------------
var a=10, b=0;

setTimeout(() => {
    b=20;
}, 5000);
console.log(a + b);


// Promise [Similler Syncronous but Not Run Sync.. in Node Js] :-----------------
var c=20 , d=0;

const result =  new Promise((resolve, reject) => {

    setTimeout(() => {
        d=20;
        resolve()
}, 3000)
}).then(() => {
    console.log(c+d);
})

