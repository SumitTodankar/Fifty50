const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let counter = 0;
let blurBG = setInterval(blurring,30);

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurring() {
    counter++;
    if(counter > 99){
        clearInterval(blurBG)
    }

    text.innerText = `${counter}%`;
    text.style.opacity = scale(counter,0,100,1,0);
    bg.style.filter = `blur(${scale(counter,0,100,30,0)}px)`
}


