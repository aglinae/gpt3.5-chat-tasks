// dom manipulation
const exampleID = document.getElementById("exampleID");

exampleID.textContent = "New Text";
exampleID.style.color = "green";
const getAttribute = exampleID.getAttribute("id");
exampleID.textContent = getAttribute;
exampleID.setAttribute("id", "newExampleID");
exampleID.classList.add("exampleClass");
// события
const btn = document.querySelector(".btn");
const mouseOver = document.querySelector(".mouseOver");
const keyupInput = document.querySelector("#keyupInput");
btn.addEventListener("click", () => {
  const btnText = btn.textContent;
  console.log(btnText);
  if (btnText.toLowerCase() === "click") {
    btn.textContent = "Clicked!";
  } else {
    btn.textContent = "Click";
  }
});
mouseOver.addEventListener("mouseover", (e) => {
  let text = "hello world!";
  previousText = e.target.textContent;

  e.target.textContent = text;
});
mouseOver.addEventListener("mouseout", (e) => {
  e.target.textContent = previousText;
});
keyupInput.addEventListener("keyup", (e) => {
  console.log(e);
  e.target.value = e.target.value.toUpperCase();
});

// формы и local storage
const form = document.getElementById("formID");
const name = form.elements["name"];
const email = form.elements["email"];
const password = form.elements["password"];
const btnSubmit = document.querySelector(".btn-submit");
// console.log(name, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("password", passwordValue);
});

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));

// Таймер и Анимация:
