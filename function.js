// // // // Function Concept:reusable function

// // // // my first function

// // // function Greet()
// // // {
// // //     console.log("Hello Chief, Welcome");
// // // }

// // // Greet();

// // // Passing values to function with arguments

// // // function Substract(a,b){

// // //     console.log(a-b);
// // // }

// // // Substract(10,5);


// // // Global scope:

// // var myvar1 = 10;
// // function fun1(){

// //     myvar2 = 20;
// // }
// //  function fun2(){

// //     myvar2 = myvar1;
// //  }

// //  fun1();
// //  fun2();

// /* Making a function to add an element in an
// array and removing its first element and also returning it*/

// // function nextinline(arr,item){

// //     arr.push(item);
// //     return arr.shift();

// // }

// // var testarr = [10,20,30,40]
// // console.log("Before :" + JSON.stringify(testarr));
// // console.log(nextinline(testarr,50));
// // console.log("After :" + JSON.stringify(testarr));

// const cats = ["leaopard", "cheetah", "jaguar", "tiger"];
// // for (const cat of cats){
// //     console.log(cat);
// // }
// function toUpper(string){
//     return string.toUpperCase();
// }

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

// // checking the num is positive or negative

// function checkNum(val){
//     if(val % 2 == 0){
//         return "POSITIVE!";
//     }
//     else {
//     return "NEGATIVE!";
//     }
// }

// console.log(checkNum(11));

// const obj = {
//     username: "Zaryab",
//     status : "Logged In"
// }
// function handleObj(object){
//         console.log(`Hello ${object.username}, Greetings from VS code. You are currently ${object.status}`);
// }
// handleObj(obj)


// function fact (num){
//     let result = 1;
//     for(let i = 1; i<=num; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(fact(8));


function xyz(){
    console.log(this);
    
}
xyz();
