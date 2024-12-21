/*PART A*/
/*1*/
const person = {   
    name: "Hodaya",
    age: 28,
    isStudent: true,
}

console.log(person) 

/*2*/
console.log(person.name)
console.log(person.age)
console.log(person["isStudent"]) 

/*3*/
person.age= 28.5;
person.hobby = "cooking"

console.log(person) 

/*4*/
const movie = {
    title: "ted",
    genre: "comedy",
}
    movie.releaseYear= 2012
    movie.isPopular= true
    movie.genre = "comedy and fantasy"


console.log(movie) 

/*5*/
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue"
};
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

/*6*/

const firstPerson = {
    name: "Adam",
    age: 25
}

const secondPerson = {
    name: "Roni",
    age: 30
}

function combinePeople(obj1, obj2) {
    return {
        "first person's name": obj1.name,
        "first person's age": obj1.age,
        "second person's name": obj2.name,
        "second person's age": obj2.age
    } 
}

const combined = combinePeople(firstPerson, secondPerson)
console.log("Combined People Object:", combined)


/*7*/

function countProperties(obj) {
     return Object.keys(obj).length
}

console.log( "Number of properties in person object:", countProperties(person))
console.log("Number of properties in movie object:", countProperties(movie))

/*8*/

delete person.isStudent
console.log(person) 

/*9*/

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop)
}
console.log(" Does car have 'make' property?", hasProperty(car, "make"))
console.log(" Does car have 'price' property?", hasProperty(car, "price"))


/*10*/

function updatePerson(person, key, value) {
    person[key] = value
}
updatePerson(person, "age", 28)
updatePerson(person, "city", "Hadera")
console.log("Updated Person Object:", person)


/*PART B*/


/*1*/
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Fruits Array:", fruits)

/*2*/

console.log(fruits[0])
console.log(fruits[fruits.length - 1])
console.log(fruits[2])

/*3*/

fruits.push("Orange");
console.log("Fruits Array:", fruits)

fruits.unshift("Fig"); //להוסיף לתחילת המערך
console.log("Fruits Array:", fruits)

fruits.pop(); //להוריד מסוף המערך
console.log("Fruits Array:", fruits)

/*4*/

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}
for (fruit of fruits) {
    console.log(fruit)
}

/*5*/

console.log("Total number of elements:", fruits.length);
console.log(fruit)

/*6*/

function isInArray(array, element) {
    return array.includes(element)
}
console.log( isInArray(fruits, "Banana"))
console.log(fruit)

/*7*/

fruits.sort() //מיון
console.log(fruit)

/*8*/

fruits.reverse()  //רברס
console.log(fruit)

/*9*/

const numbers = [12, 7, 18, 3, 21, 8, 14, 9, 10, 4]

function filterEvenNumbers(array) {
    return array.filter((num) => { //פילטר
        return num % 2 === 0
    })
}
console.log("Even Numbers:", filterEvenNumbers(numbers));

/*10*/
const vegetables = ["Carrot", "Broccoli", "Spinach"]
const groceries = fruits.concat(vegetables)
console.log("Combined Array:", groceries)
