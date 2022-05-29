// Class Declaration
class animal {
    constructor(name, diet, feet) {
        this.name = name;
        this.diet = diet;
        this.feet = feet;
    }
    // Class Method
    introduce = () => {
        console.log(`This animal named ${this.name}, it is a ${this.diet} and has ${this.feet} legs!`);
    }
    // Static Class Method
    static saw = (animals) => {
        console.log(`I see a pack of ${animals} over there!`);
    }
}

const Zebra = new animal("Zebra", "Herbivore", 4);
const Lion = new animal("Lion", "Carnivore", 4);

// Calling Class Method 
Zebra.introduce();
Lion.introduce();

// Calling Static Class Method
animal.saw("Giraffe");

// Class Inharitance
class mamal extends animal{
    constructor(name, diet, feet, place) {
        super(name, diet, feet);
        this.place = place;
    }
    hai = () => {
        console.log(`This mamal named ${this.name}, it is a ${this.diet} and has ${this.feet} legs... You can find it at ${this.place}`);
    }
}

const Monkey = new mamal("Monkey", "Omnivore", 4, "Brazil");

Monkey.hai();