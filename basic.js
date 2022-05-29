// Deklarasi Var
const name = "Fatih";
const age = 19;
const isMarried = false;
const arr = [1,2,3];
const myObject = {
    street: "Jl Manunggal",
    No: 130
}

// Arrow Function
const say = (name, age) => {
    console.log(`Hello my nsme is ${name}, i'am ${age} years old`);
}

say(name, age);

// Rest Operator
const count = (...num) => {
    console.log(num);
}

count(1,2,3,4,5);


// Spread Operator
const array = [1,2,3,4,5];
const arrayCopy = [...arr];
console.log(arrayCopy);


// Destructurring
const key = ['doni', 20];
const [nama, umur] = key;
console.log(nama, umur);
