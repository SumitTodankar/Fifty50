const sliders = document.querySelectorAll('.slider');

sliders.forEach(item => {
    item.addEventListener("mouseover",() => {
        removeActiveClass();
        item.classList.add('active')
    })
})

function removeActiveClass(){
    sliders.forEach(slider => {
        slider.classList.remove('active')
    })
}