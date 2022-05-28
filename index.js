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
    return `Hello my nsme is ${name}, i'am ${age} years old`;
}

// Rest Operator
const count = (...num) => {
    console.log(...num);
}

count(arr);


console.log(say(name, age));