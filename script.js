button = document.querySelector(".button");
box = document.querySelector(".box");

button.addEventListener('click',changeColor);

function changeColor() {
    box.style.backgroundColor = "red";
}