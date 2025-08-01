 
//++++++++++++++++++++++++++++++++++++++ Interview Questions and Answers  ++++++++++++++++++++++++++++++++++++

// 1.] What is Node js?
// --> Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on servers.

// 2.] Why use Node js?
// --> Node.js allows developers to use JavaScript for server-side programming, enabling full-stack development with a single language. It’s fast, scalable, and ideal for building real-time, data-intensive applications like APIs, chat apps, and more.


                            // If_Condition :-------------------------------
a = 12;
if (a > 10) {
    console.log("Value is greter than 10"); 
}
else{
    console.log("Value is less than or equal to 10");
}

                            //    Var vs Let vs Const :-------------------------------
// 1] Var :-
// Allow re-declaration and re-assignment
var a = 10;
a = 20;
var a = 30;
console.log(a);

// 2] Let :-
// Allow re-assignment but not re-declaration
let b = 10;
b = 20;              
// let b = 30;         //Not Re-declarable
console.log(b);

// 3] Const :-
// not allow re-declaration and re-assignment
const c = 10;
// c = 20;         //Not Re-assignable
// const c = 30;   //Not Re-declarable
console.log(c);


                                // Switch_Case :-------------------------------
a = 2;
switch (a) {
    case 1:
        console.log("Value is 1");
        break;

    case 2:
        console.log("Value is 2");
        break;

    default:
         console.log("Another Value is given");
        break;
}

                                //   Map Methods :-------------------------------
arr = [1,2,3,4,5,6,7,8,9,10]

arr.map((i) => {
    console.log(i * 2);
})
arr.filter((i) => {
    console.log(i * 2);
})
arr.forEach((i) => {
    console.log(i * 2);
})

                                // Object :------------------------------
let User = {
    name : "Radha",
    age : 20,
    City : "Vrundavan"
}
console.log(User.name);


                                // Array :------------------------------
let arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1[0]); // Accessing first element


                                // Array of object :-----------------------
let arr2 = [
    { name: "Radha", age: 20, city: "Vrundavan" },
    { name: "Krishna", age: 22, city: "Mathura" },
    { name: "Gopis", age: 18, city: "Vrundavan" }
]
console.log(arr2[1]); // Accessing name of first object


                            //   Function :--------------------------
function hello(){
    console.log("Hello, Good Morning!");
}
hello();


