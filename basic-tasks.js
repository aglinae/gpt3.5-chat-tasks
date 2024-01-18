// String and Array
const combineStrings = (str, str2) => {
  return str + " " + str2;
};

console.log(combineStrings("hello", "world!"));

const reverseArray = (array) => {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};

console.log(reverseArray(arr));

// conditional statements

function checkAge(age) {
  if (age >= 18) {
    console.log("Возможно");
  } else {
    console.log("Невозможно");
  }
}
checkAge(23);

// Loops

function printNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
printNumbers(10);

// Objects

const person = {
  name: "John",
  age: 18,
};
console.log(person.name, person.age);

// Function

const calculateArea = (width, height) => {
  return `S = ${width * height}`;
};

console.log(calculateArea(20, 5));

// Array and Loops

const fruits = ["banana", "apple", "cherry", "lemon"];

const consoleFruit = (fruits) => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};

consoleFruit(fruits);
