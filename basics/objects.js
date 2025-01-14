// Object concept :
// An object
var car = {
    "name": "BMW",
    "model": 2022,
    "color": "white",
    "engine": "V12",
};
// access a property of an  object using dot notation:

var car_name = car.name;
var car_model = car.model;

console.log(car_name);
console.log(car_model);

//access a property of an object using bracket notation:

var cat = {
    "name": "Luna",
    "cat breed": "Persian",
    "age": 2.5,
    "color": "white",
    "gender": "female",
};

var breed = cat["cat breed"];
console.log(breed);

//updating object properties using dot;
car.model = "2023"; //updated
console.log(car);

//adding property in object using dot;

cat.meow = "meow-meow";
console.log(cat);
//deleting property:
delete cat.meow;
console.log(cat);