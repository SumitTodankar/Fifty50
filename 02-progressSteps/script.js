const circles = document.querySelectorAll('.step');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counter = 1;

next.addEventListener("click",() => {
    counter++;
    if(counter > circles.length){
        counter = circles.length;
    }
    update();
})

prev.addEventListener("click",() => {
    counter--;
    if(counter < 1){
        counter = 1;
    }
    update();
})

function update(){
    circles.forEach((item,indx) => {
        if(counter > indx){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })

    const activeCircles = document.querySelectorAll('.step.active');

    console.log(activeCircles.length ,circles.length);

    progress.style.width =  ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%"
}