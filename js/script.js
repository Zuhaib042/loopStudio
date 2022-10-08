let btn = document.querySelector("#menu-btn");
const menu = document.getElementById("menu");
console.log(btn);

btn.addEventListener("click", function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  console.log(btn);
});

