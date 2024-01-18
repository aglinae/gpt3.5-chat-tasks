// Template literals

const someObj = {
  firstName: "John",
  lastName: "Smilga",
};
function generateEmail({ firstName, lastName }) {
  return `${firstName}.${lastName}@example.com`;
}

console.log(generateEmail(someObj));

// Array Iterators
const students = [
  { id: 1, name: "john", score: 80, favoriteSubject: "math" },
  { id: 2, name: "susy", score: 30, favoriteSubject: "russian" },
  { id: 3, name: "mark", score: 10, favoriteSubject: "english" },
  { id: 4, name: "bobo", score: 90, favoriteSubject: "geography" },
  { id: 5, name: "peter", score: 88, favoriteSubject: "math" },
];

students.forEach((student) => {
  console.log(student.name);
});

// Array Filter и Map

const mathStudents = students.filter(
  (student) => student.favoriteSubject === "math"
);
console.log(mathStudents);

const studentName = students.map((student) => {
  return student.name;
});

console.log(studentName);

// Array Reduce и Объекты

const studentScore = students.reduce((acc, student) => {
  return acc + student.score;
}, 0);

console.log(studentScore);

const subjectCount = students.reduce((acc, student) => {
  const subject = student.favoriteSubject;
  if (acc[subject]) {
    acc[subject]++;
  } else {
    acc[subject] = 1;
  }
  return acc;
}, {});

console.log(subjectCount);

// Date Object и Math Object

const commingDate = "10.01.2024";

const dateParts = commingDate.split(".");

const dateObject = new Date(
  parseInt(dateParts[2]),
  parseInt(dateParts[1]) - 1,
  parseInt(dateParts[0])
);

function calculateDaysLeft(date) {
  const dateNow = new Date();
  const calculate = date.getDate() - dateNow.getDate();
  return `До ${date.getDate()}.0${
    date.getMonth() + 1
  }.${date.getFullYear()} осталось ${calculate} дня`;
}
console.log(calculateDaysLeft(dateObject));

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// Callback Functions

const gas = [10, 30, 9];
const food = [100, 30, 9];

function callbackFunction(gas, food) {
  const sumOFAll = gas.concat(food).reduce((acc, item) => {
    return acc + item;
  }, 0);
  return sumOFAll;
}

function processExpenses(gas, food, cb) {
  return `Общая сумма еды и бензина составляет: ${cb(gas, food)}`;
}

console.log(processExpenses(gas, food, callbackFunction));
