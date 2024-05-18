// Exercise 1: Basic Syntax and Variables
let myName = "Glenn";
let age = 32;
let isSudent = true;
console.log(myName, age, isSudent)

// Exercise 2: Data Types
let favoriteFoods = ["Rice", "Potatoes", "Pasta"];
let person = {
    name: "Glenn Oronsaye",
    age: 32,
    hobbies: ["traveling", "gym", "coding"]
};
console.log(favoriteFoods, person)

// Exercise 3: Conditions
function checkAge(ageUser) {
    if (ageUser >= 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
  }
  checkAge(32)

  // Exercise 4: Loops
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  let counter = 10;
  while(counter > 0){
    counter-=1;
    console.log(counter)
  }

  // Exercise 5: Functions
  function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(10,5))

  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet("Glenn")

  // Exercise 6: Combining Everything
  function createPerson(name, age, hobbies) {
    return {
      name: name,
      age: age,
      hobbies: hobbies
    };
  }
let myself = createPerson("Glenn", 32, ["Coding", "Gym", "Traveling"])  
console.log(myself)


function describePerson(person) {
    const { name, age, hobbies } = person;
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
  }