const circle = document.getElementById("circle");
const container = document.getElementById("container");

circle.addEventListener('click',() => {
    circle.classList.toggle('active');
    container.classList.toggle('active');
})