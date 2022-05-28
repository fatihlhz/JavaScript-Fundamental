class animal {
    constructor(name, diet, feet) {
        this.name = name;
        this.diet = diet;
        this.feet = feet;
    }
}

const Zebra = new animal("Zebra", "Herbivore", 4);
const Lion = new animal("Lion", "Carnivore", 4);

console.log(Zebra);
console.log(Lion);